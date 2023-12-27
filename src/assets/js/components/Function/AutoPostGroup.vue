<style scoped>
.btns {
    min-width: 150px;
    margin-right: 5px;
}

.btn-page {
    /* width: 50px; */
    margin-right: 1px;
}

.btn-groups {
    text-align: center;
    margin-bottom: 7px;
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

.fixed-postion {
    position: fixed;
    top: 5%;
    left: 0;
    width: 100%;
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
    <h4>{{ languagePack["AUTO_POST_GROUP"] }}</h4>
    <div class="AUTO_GROUP_POST_CONTENT">
        <div class="row">
            <div class="left col-xl-12 col-md-12 col-12">
                <div class="save">
                    <button class="btn btns btn-outline-primary" @click="add" type="submit">{{ languagePack['NEW']
                    }}</button>
                    <button class="btn btns btn-outline-success" @click="manager" type="submit">{{ languagePack['MANAGER']
                    }}</button>
                    <button class="btn btns btn-outline-warning" @click="history" type="submit">{{ languagePack['HISTORY']
                    }}</button>
                </div>
            </div>
            <div class="center col-xl-12 col-md-12 col-12">
                <div class="table-responsive">
                    <table class="table table-bordered" style="font-size: 13px;">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>{{ languagePack["TABLE_UID_GROUP"] }}</th>
                                <th>{{ languagePack["TABLE_TIME_START"] }}</th>
                                <th>{{ languagePack["TABLE_TIME_END"] }}</th>
                                <th>{{ languagePack["TABLE_TIME_UPLOAD"] }}</th>
                                <th>{{ languagePack["TABLE_CONTENT"] }}</th>
                                <th>{{ languagePack["FACEBOOK"] }}</th>
                                <th>{{ languagePack["TABLE_UID_UPLOAD"] }}</th>
                                <th>{{ languagePack["TABLE_UID_STATUS"] }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of posts">
                                <td>{{ index }}</td>
                                <td>
                                    <h6>{{ item.uid }}</h6>
                                </td>
                                <td>{{ item.start }}</td>
                                <td>{{ item.end }}</td>
                                <td>{{ item.time }}</td>
                                <td style="width: 300px;"><textarea style="width: 100%;">{{ item.text }}</textarea></td>
                                <td>
                                    <div class="fb">
                                        {{ item.face }}
                                    </div>
                                    <div class="name">Hoang Van Phú</div>
                                </td>
                                <td>{{ item.upload }}</td>
                                <td>{{ item.status == 1 ? "On" : "Off" }}</td>
                                <td>
                                    <button type="submit" class="btn btn-primary btn-sm"><i
                                            class='bx bx-edit-alt'></i></button>.
                                    <button type="submit" class="btn btn-danger btn-sm"><i class='bx bx-trash'></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="btn-groups">
                <button type="button" class="btn btn-page btn-outline-warning btn-sm">1</button>
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
        <div class="fixed-postion">
            <Add v-if="isShowAdd" @update:isShowAdd="isShow" :type="'group'" />
            <Update v-if="isShowUpdate" @update:isShowAdd="isShow" :type="'group'" />
            <History v-if="isShowHistory" @update:isShowAdd="isShow" :type="'group'" />
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
import { add_model, manager_model, history_model } from '../../javascipt/api'
import { get_key, get_info_facebook, set_token, get_token, get_page_facebook } from '../../javascipt/user'
import request from "../../utils/request.js";
import Add from '../Layouts/Add'
import Update from '../Layouts/Update'
import History from '../Layouts/History'
var env = require('../../config/env.js')
// import Swal from 'sweetalert2'


const cursor = ref('')
const notify = ref('')
const access_token_global = ref('')



const isShowAdd = ref(false)
const isShowUpdate = ref(false)
const isShowHistory = ref(false)


const running = ref(false)

const posts = ref({})

onMounted(async () => {
    await loadPosts()
})
const loadPosts = async () => {
    var res = await isLoadFirtData()
    posts.value = res.posts
}
const isLoadFirtData = async () => {
    var res = await request.post('/post/list', {
        type: 'group'
    })
    res = await res.data
    return res
}


const isShow = async () => {
    isShowAdd.value = false
    isShowUpdate.value = false
    isShowHistory.value = false
}

const add = async () => {
    isShowAdd.value = true
    var act = await add_model('group')
}
const manager = async () => {
    isShowUpdate.value = true
    var act = await manager_model('group')
}
const history = async () => {
    isShowHistory.value = true
    var act = await history_model('group')
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