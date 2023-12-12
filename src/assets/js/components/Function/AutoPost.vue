<style scoped>
.btn {
    min-width: 150px;
    margin-right: 10px;
}

.save {
    padding: 15px;
}

textarea {
    margin-bottom: 5px;
}

.notify {
    min-height: 300px;
}

/* loader */
.loader {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    /* background: rgba(255, 255, 255, 0.15); */
    overflow: hidden;
    background: orangered;
}

.loader::after {
    content: '';
    width: 96px;
    height: 4.8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: hitZak 1s linear infinite alternate;
}

@keyframes hitZak {
    0% {
        left: 0;
        transform: translateX(-1%);
    }

    100% {
        left: 100%;
        transform: translateX(-99%);
    }
}
</style>
<template>
    <h4>{{ languagePack["AUTO_GROUP_POST"] }}</h4>
    <div class="AUTO_GROUP_POST_CONTENT">
        <div class="row">
            <div class="left col-xl-12 col-md-12 col-12">
                <div class="left_content">
                    <div class="row">
                        <div class="col-md-4">
                            <label for="validationCustom04" class="form-label">{{ languagePack['TYPE_UPLOAD'] }}</label>
                            <select class="form-select" v-model="type">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['AUTO_GROUP_POST_1'] }}</option>
                                <option value="2">{{ languagePack['AUTO_GROUP_POST_2'] }}</option>
                            </select>
                            <label for="validationCustom04" class="form-label">{{ languagePack['SELECT_LIST_PAGE']
                            }}</label>
                            <select class="form-select" v-model="selected_page">
                                <option value="0" selected>{{ languagePack['PROFILE_MEMBER'] }}</option>
                                <option v-for="item in pages" :value="[item.id, item.access_token]">{{ item.name
                                }}</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom01" class="form-label">{{ languagePack['UID_UPLOAD'] }}</label>
                            <input type="text" v-model="group_id" class="form-control">
                            <label for="validationCustom04" class="form-label">{{ languagePack['TYPE_TIME'] }}</label>
                            <select class="form-select" v-model="type_time">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['TYPE_TIME_1'] }}</option>
                                <option value="2">{{ languagePack['TYPE_TIME_2'] }}</option>
                            </select>
                        </div>
                        <div class="col-md-4" v-if="type == 2">
                            <label for="validationCustom02" class="form-label">{{ languagePack['UID_VICTIM_UPLOAD']
                            }}</label>
                            <input type="text" v-model="group_victim_id" class="form-control">
                        </div>
                        <div class="col-md-4" v-else>
                            <label for="validationCustom02" class="form-label">{{ languagePack['CONTENT_POST']
                            }}</label>
                            <textarea type="date" class="form-control" id="" v-model="group_victim_id"></textarea>
                            <input type="file" class="form-control" id="" multiple />
                        </div>
                        <div class="col-md-4" v-if="type == 2">
                            <label for="validationCustom03" class="form-label">{{ languagePack['COUNT_REACTION'] }}</label>
                            <input type="number" v-model="tag_id" class="form-control">
                        </div>
                        <div class="col-md-4" v-if="type == 1">
                            <label for="validationCustom05" class="form-label">{{ languagePack['TIME_POST'] }}</label>
                            <input type="datetime-local" v-model="time_post" class="form-control">
                        </div>
                        <div class="col-md-4" v-else>
                            <label for="validationCustom05" class="form-label">{{ languagePack['TIME_DELAY'] }} ({{
                                languagePack['TIME'] }})</label>
                            <input type="number" v-model="time_delay" class="form-control">
                        </div>
                        <div class="save">
                            <button class="btn btn-outline-primary" @click="save" type="submit">{{ languagePack['SAVE']
                            }}</button>
                            <button class="btn btn-outline-success" @click="run" type="submit">{{ languagePack['RUN']
                            }}</button>
                            <button class="btn btn-outline-warning" @click="stop" type="submit">{{ languagePack['STOP']
                            }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right col-xl-12 col-md-12 col-12">
                <div class="right_content">
                    <span class="loader" v-if="running"></span>
                    <div class="process">
                        <textarea class="form-control notify" v-model="notify" readonly id="validationTextarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from '../../../../languages/index'
import { get_auto_post, save_auto_post } from '../../javascipt/data'
import { feed_group_post, get_fb_dtsg } from '../../javascipt/feed'
import { get_info_facebook, set_token, get_token, get_page_facebook } from '../../javascipt/user'
import { get_token_eaab } from '../../javascipt/request'
import { uploadPost, uploadImages, get_request } from '../../javascipt/post'
// import Swal from 'sweetalert2'

const type = ref(1)
const group_id = ref('')
const group_victim_id = ref('')
const tag_id = ref(10) //null
const type_time = ref(1)  //1 1 ngày // mỗi ngày
const time_post = ref('')
const time_delay = ref(30)
const is_image = ref(true)


const cursor = ref('')
const notify = ref('')
const access_token_global = ref('')
const pages = ref()

const selected_page = ref(0)

const running = ref(false)
onMounted(async () => {
    var setup = await get_auto_post()
    if (setup.type) {
        type.value = setup.type
        group_id.value = setup.group_id
        group_victim_id.value = setup.group_victim_id
        tag_id.value = setup.tag_id
        type_time.value = setup.type_time
        time_post.value = setup.time_post
        time_delay.value = setup.time_delay
    }
    access_token_global.value = await get_token_eaab()
    set_token(access_token_global.value)
    var data = await get_page_facebook()
    pages.value = data.data
})

const save = async () => {
    await save_auto_post(
        type.value,
        group_id.value,
        group_victim_id.value,
        tag_id.value,
        type_time.value,
        time_post.value,
        is_image.value,
        time_delay.value,
    )
    Swal.fire({
        title: languagePack["GOOD"],
        text: languagePack["SAVE_SETTING"],
        icon: "success"
    });
    textNotify(`${languagePack["SAVE_SETTING"]}`)
}
const run = async () => {
    textNotify(languagePack["RUNNING"])
    running.value = true
    cursor.value = ''
    let access_token = access_token_global.value
    console.log(selected_page.value)
    if (selected_page.value != 0) {
        access_token = selected_page.value[1]
        runStatus(access_token, true)
    } else {
        runStatus(access_token)
    }
}
const runStatus = async (access_token, isProfile = false) => {
    var fb_dtsg = await get_fb_dtsg()
    if (type.value == 2) {
        var lst = await autoClarmGroup(fb_dtsg)
        for (const item_post of lst) {
            textNotify(`${languagePack["CHECK_POST"]} ${item_post.post_id}`)
            console.log(item_post)
            if (item_post.reaction_count > tag_id.value) {
                textNotify(`${languagePack["FIND_POST"]} ${item_post.post_id}`)
                var pst = item_post
                var photos = []
                try {
                    if (pst.attachments.hasOwnProperty('count')) {
                            for (const node of pst.attachments.nodes) {
                                var id_photo = await uploadImages(node.media.image.uri, group_id.value, access_token)
                                photos.push(id_photo)
                            }
                        }
                    if (isProfile) {
                        var id_photo = await uploadImages(node.media.image.uri, group_id.value, access_token,pst.message)
                    }
                    else {
                        if (pst.attachments.hasOwnProperty('count')) {
                            for (const node of pst.attachments.nodes) {
                                var id_photo = await uploadImages(node.media.image.uri, group_id.value, access_token)
                                photos.push(id_photo)
                            }
                        }
                        if (pst.message != null && pst.message.length > 3) {
                            var res = await uploadPost(pst.message, photos, access_token, group_id.value)
                            textNotify(`${languagePack["UPLOAD_POST"]} ${res}`)
                        } else {
                            textNotify(`${languagePack["NOT_SUP"]} ${res.post_id}`)
                        }
                    }
                } catch (error) {
                    textNotify(`${languagePack["NOT_SUP"]} ${item_post.post_id}`)
                }
            }
        }
        //scan bài viết-----------
    } else {
        var lst = await autoUploadGroup(fb_dtsg)
    }
    for (let index = 0; index < time_delay.value; index++) {
        var delay = time_delay.value - index
        var munite = parseInt(delay / 60)
        var second = delay % 60
        textNotify(`${languagePack["SLEEP"]}: ${munite} ${languagePack["MINUTE"]} ${second} ${languagePack["SECOND"]}`, false)
        await sleep(1000)
    }
}
const autoClarmGroup = async (fb_dtsg) => {
    var id_user = await get_info_facebook()
    textNotify(`${languagePack["RUN"]} ${id_user}`)
    textNotify(`${languagePack["LOAD_FEED"]}! ${group_victim_id.value}`)
    let lst = []
    for (let index = 0; index < 7; index++) {
        var posts = await feed_group_post(id_user, group_victim_id.value, fb_dtsg, cursor.value)
        posts = posts.split('\n')
        for (const item of posts) {
            var temp_new = JSON.parse(item)
            var temp = temp_new.data.node
            if (temp) {
                if (temp.hasOwnProperty('post_id')) {
                    var post_id = temp.post_id
                    var story = temp.comet_sections.content.story
                    var feedback = temp.comet_sections.feedback
                    var post_info = {
                        post_id: post_id,
                        message: story.message,
                        attachments: story.attachments,
                        actors: story.actors,
                        id: story.id,
                        reaction_count: 0
                    }
                    if (story.message) {
                        post_info.message = story.message.text
                    }
                    if (story.attachments) {
                        if (story.attachments.length > 0) {
                            if (story.attachments[0].styles.attachment.hasOwnProperty("all_subattachments")) {
                                var attachments = story.attachments[0].styles.attachment.all_subattachments
                                var lst_photo = []
                                var nodes = attachments.nodes
                                for (const item of nodes) {
                                    lst_photo.push({
                                        media: {
                                            image: item.media.image,
                                            id: item.media.id
                                        }
                                    })
                                }
                                post_info.attachments = {
                                    count: attachments.count,
                                    nodes: lst_photo
                                }
                                console.log(post_info)
                            } else {
                                post_info.attachments = {
                                    count: 1,
                                    nodes: [{
                                        media: {
                                            image: story.attachments[0].styles.attachment.media.photo_image,
                                            id: story.attachments[0].styles.attachment.media.id
                                        }
                                    }]
                                }
                            }
                        }
                    }
                    post_info.reaction_count = feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer.feedback.reaction_count.count
                    lst.push(post_info)
                } else {
                    // console.log(temp)
                }
            } else {
                if (temp_new.data.hasOwnProperty("page_info")) {
                    if (temp_new.data.page_info.has_next_page) {
                        cursor.value = temp_new.data.page_info.end_cursor
                    }
                } else {
                    // console.log(temp_new)
                }
            }
        }
    }
    return lst
}
const autoUploadGroup = async (fb_dtsg) => {

}
const stop = async () => {
    Swal.fire({
        title: `${languagePack["ARE_YOU_SURE"]}?`,
        text: `${languagePack["ARE_YOU_SURE"]}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `${languagePack["YES_STOP"]}!`
    }).then((result) => {
        if (result.isConfirmed) {
            textNotify(`${languagePack["STOP_PROCESS"]}!`)
            running.value = false
            Swal.fire({
                title: "Stopped!",
                text: `${languagePack["STOP_PROCESS"]}!`,
                icon: "success"
            });
        }
    });
}
const textNotify = async (text, sleep = true) => {
    var array = notify.value.split('\n')
    if (sleep) {
        if (array > 300) {
            notify.value = ''
        }
        notify.value = `> ${text}` + "\n" + notify.value
    } else {
        array.shift()
        notify.value = `> ${text}` + "\n" + array.join('\n')
    }

}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

</script>