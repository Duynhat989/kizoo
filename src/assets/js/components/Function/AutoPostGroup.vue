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
    <h4>{{ languagePack["AUTO_POST_PAGE"] }}</h4>
    <div class="AUTO_GROUP_POST_CONTENT">
        <div class="row">
            <div class="left col-xl-12 col-md-12 col-12">
                <div class="save">
                    <button class="btn btn-outline-primary" @click="add" type="submit">{{ languagePack['NEW']
                    }}</button>
                    <button class="btn btn-outline-success" @click="manager" type="submit">{{ languagePack['MANAGER']
                    }}</button>
                    <button class="btn btn-outline-warning" @click="history" type="submit">{{ languagePack['HISTORY']
                    }}</button>
                </div>
            </div>
            <div class="center col-xl-12 col-md-12 col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Sex</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Anna</td>
                                <td>Pitt</td>
                                <td>35</td>
                                <td>New York</td>
                                <td>USA</td>
                                <td>Female</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
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


const cursor = ref('')
const notify = ref('')
const access_token_global = ref('')
const pages = ref()


const running = ref(false)
onMounted(async () => {
    var data = await get_page_facebook()
    pages.value = data.data
})

const add = async () => {


}
const manager = async () => {
    
}
const history = async () => {
    
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