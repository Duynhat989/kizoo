<style scoped>
.btn {
    min-width: 150px;
    margin-right: 10px;
}

.save {
    padding: 15px;
}

textarea {
    min-height: 150px;
}
</style>
<template>
    <h4>{{ languagePack["AUTO_GROUP_MANAGER"] }}</h4>
    <div class="AUTO_GROUP_MANAGER_CONTENT">
        <div class="row">
            <div class="left col-xl-12 col-md-12 col-12">
                <div class="left_content">
                    <div class="row">
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" v-model="check_1" id="myCheck" name="remember"
                                required>
                            <label class="form-label" for="myCheck">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_APPROVE']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type_1">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <br>
                            <div v-if="type_1 == 1">
                                <label for="" class="form-label">{{ languagePack['LIST_KEYWORD'] }}</label>
                                <textarea type="date" class="form-control" id="" v-model="keyword_1"></textarea>
                            </div>
                            <div v-else>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_SPAM']
                                    }}.</label>
                                </div>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_LIVESTREAM']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_PHONE']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_WARP']
                                    }}.</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" v-model="check_2" id="myCheck2" name="remember"
                                required>
                            <label class="form-label" for="myCheck2">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_MEMBER']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type_2">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <br>
                            <div v-if="type_2 == 1">
                                <label for="" class="form-label">{{ languagePack['LIST_KEYWORD'] }}</label>
                                <textarea type="date" class="form-control" id="" v-model="keyword_2"></textarea>
                            </div>
                            <div v-else>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['BLOCK_TIME']
                                    }}.</label>
                                </div>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['BLOCK_SPAM']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['BLOCK_FALSE']
                                    }}.</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" v-model="check_3" id="myCheck3" name="remember"
                                required>
                            <label class="form-label" for="myCheck3">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_COMMENT']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type_3">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <br>
                            <div v-if="type_3 == 1">
                                <label for="" class="form-label">{{ languagePack['LIST_KEYWORD'] }}</label>
                                <textarea type="date" class="form-control" id="" v-model="keyword_3"></textarea>
                            </div>
                            <div v-else>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_SPAM']
                                    }}.</label>
                                </div>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_LIVESTREAM']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_PHONE']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_WARP']
                                    }}.</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">{{ languagePack['TIME_DELAY'] }}</label>
                            <input type="number" v-model="count_delay" class="form-control" id="">
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">{{ languagePack['APPROVAL_NUMBER'] }}</label>
                            <input type="number" v-model="count_pending" class="form-control" id="">
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">{{ languagePack['LIST_UID'] }}</label>
                            <textarea type="date" class="form-control" id="" v-model="lst_group"></textarea>
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
                    <div class="process">
                        <textarea class="form-control" v-model="notify" id="validationTextarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { languagePack } from '../../../../languages/index';
import { save_auto_approve, get_auto_approve } from '../../javascipt/data'
import { load_pending_post, load_pending_member, select_delete_comment, load_comment_post } from '../../javascipt/group'
import { feed_group_post, get_fb_dtsg } from '../../javascipt/feed'
import { get_info_facebook, set_token, get_token, get_page_facebook } from '../../javascipt/user'



//setup 

const check_1 = ref(false) //phần phê duyệt bài đăng
const check_2 = ref(false) //phần phê duyệt member
const check_3 = ref(true) //phần phê duyệt bình luận

const type_1 = ref(1) //phần phê duyệt bài đăng
const type_2 = ref(1) //phần phê duyệt member
const type_3 = ref(1) //phần phê duyệt bình luận


const keyword_1 = ref('')
const keyword_2 = ref('')
const keyword_3 = ref('')


const lst_group = ref('')
const count_delay = ref(5)
const count_pending = ref(10)



const notify = ref('')


onMounted(async () => {
    setup()
})
const setup = async () => {
    var data = await get_auto_approve()
    check_1.value = data.type_1.check
    check_2.value = data.type_2.check
    check_3.value = data.type_3.check

    type_1.value = data.type_1.type
    type_2.value = data.type_2.type
    type_3.value = data.type_3.type

    keyword_1.value = data.type_1.manual
    keyword_2.value = data.type_2.manual
    keyword_3.value = data.type_3.manual

    count_delay.value = data.count_delay
    count_pending.value = data.count_pending
    lst_group.value = data.lst_group
}
const save = async () => {
    save_auto_approve(
        type_1.value,
        type_2.value,
        type_3.value,
        keyword_1.value,
        keyword_2.value,
        keyword_3.value,
        check_1.value,
        check_2.value,
        check_3.value,
        count_delay.value,
        count_pending.value,
        lst_group.value
    )
    Swal.fire({
        title: "Good job!",
        text: "Save settings!",
        icon: "success"
    });

    textNotify(`${languagePack["SAVE_SETTING"]}`)
}

const run = async () => {
    var fb_dtsg = await get_fb_dtsg()
    // loading post
    var id_user = await get_info_facebook()
    await runStatus(id_user, fb_dtsg)


}

const runStatus = async (id_user, fb_dtsg) => {
    var groups = lst_group.value.split('\n')
    for (var item_id of groups) {
        textNotify(`${languagePack["CHECK_PENGDING"]}`)
        await pending_post(id_user, fb_dtsg, item_id)
        await sleep(3000)
        textNotify(`${languagePack["CHECK_MEMBER_PENDING"]}`)
        await member_post(id_user, fb_dtsg, item_id)
        await sleep(3000)
        textNotify(`${languagePack["CHECK_COMMENT"]}`)
        await comment_post(id_user, fb_dtsg, item_id)
        console.log("Comment")
    }



    //load
}
const pending_post = async (id_user, fb_dtsg, item_id) => {
    if (check_1.value) {
        let cursor = ''
        let indexCount = 0
        for (let index = 0; index < 10; index++) {
            var pengding = await load_pending_post(fb_dtsg, id_user, item_id, cursor)
            var son = JSON.parse(pengding.split('\n')[0])
            let edges = son.data.node
            if (edges.hasOwnProperty('pending_posts_search')) {
                edges = edges.group.pending_posts_search
            } else {
                edges = edges.pending_posts_section_stories
            }
            for (var temp of edges.edges) {
                var message = temp.node.comet_sections.content.story.message
                var text = ''
                if (message != null) {
                    text = message.text
                }
                if (type_1.value == 1) {
                    //thủ công-----------------------

                } else {

                }
                indexCount += 1
                console.log('Message: ', message)
                console.log(count_pending.value)
                if (indexCount === count_pending.value) {
                    console.log("stop")
                    return
                }
            }
            if (edges.page_info.has_next_page == false) {
                break
            } else {
                cursor = edges.page_info.end_cursor
            }
        }
    }
}
const member_post = async (id_user, fb_dtsg, item_id) => {
    if (check_2.value) {
        let cursor = ''
        let indexCount = 0
        for (let index = 0; index < 1; index++) {
            var pengding = await load_pending_member(fb_dtsg, id_user, item_id, cursor)
            var son = JSON.parse(pengding.split('\n')[0])
            let edges = son.data.node
            edges = edges.group_pending_member_profiles
            for (var temp of edges.edges) {
                var account = {
                    info: temp.node,
                    answers: temp.membership_criteria_answers,
                    profile_notice_info_list: temp.profile_notice_info_list,
                    request_time: temp.request_time
                }
                console.log(account)
                if (type_2.value == 1) {
                    //thủ công-----------------------
                    //đây sẽ là câu trả lời có từ khóa nào đó
                } else {

                }
                indexCount += 1
                if (indexCount === count_pending.value) {
                    console.log("stop")
                    return
                }
            }
            if (edges.page_info.has_next_page == false) {
                break
            } else {
                cursor = edges.page_info.end_cursor
            }
        }
    }
}
const comment_post = async (id_user, fb_dtsg, item_id) => {
    if (check_3.value) {
        var access_token = await get_token()
        var data = await load_comment_post(access_token, item_id)
        var json = JSON.parse(data)
        var post = json.data
        for (var item of post) {
            if (item.hasOwnProperty('comments')) {
                var comments = item.comments.data
                for (var temp of comments) {
                    console.log(temp)
                    if (type_3.value == 1) {
                        //thủ công-----------------------
                        //đây sẽ là câu trả lời có từ khóa nào đó
                    } else {

                    }
                }
            }

        }
    }
}
const stop = async () => {

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