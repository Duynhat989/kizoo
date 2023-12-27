<style scoped>
.pop-language {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    color: aliceblue;
}

.pop-language_content {
    width: 550px;
    margin: auto;
    background-color: tomato;
    margin-top: 4%;
    border-radius: 8px;
    padding: 15px;
    overflow-y: auto;
    max-height: 87vh;
}

.pop-language_content::-webkit-scrollbar {
    width: 5px;
    height: 0px;
    color: white;
    background-color: orangered;
    border-radius: 13px;
    cursor: pointer;
}

.pop-language_content::-webkit-scrollbar-thumb {
    background-color: rgb(209, 208, 208);
    cursor: pointer;
    border-radius: 13px;
}

.list-img {
    overflow-x: auto;
}

.list-img::-webkit-scrollbar {
    width: 0px;
    height: 9px;
    color: white;
    background-color: orangered;
    border-radius: 2px;
    cursor: pointer;
}

.list-img::-webkit-scrollbar-thumb {
    background-color: rgb(209, 208, 208);
    cursor: pointer;
    border-radius: 2px;
}

.btn {
    min-width: 130px;
    margin-right: 10px;
    color: aliceblue;
}

.flex {
    display: flex;
}

.datetime {
    width: 45%;
}

.title {
    text-align: center;
    text-transform: uppercase;
}

.line {
    display: flex;
}

.list-img {
    display: flex;
}

.list-img .img {
    object-fit: cover;
}

.img {
    position: relative;
    margin-right: 2px;
}

.close {
    position: absolute;
    top: 4px;
    left: 4px;
    cursor: pointer;
}
</style>
<template>
    <div class="pop-language">
        <div class="pop-language_content">
            <div class="title mb-3">
                <h5>{{ languagePack["TITLE_FACEBOOK"] }}</h5>
            </div>
            <div class="mb-3">
                <h2>{{ languagePack["LIST_FACEBOOK"] }}</h2>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">{{ languagePack["SELECT_TIME"] }}: </label>
                <div class="line">
                    <input type="date" v-model="start_time" class="form-control datetime">
                    <div class="div" style="line-height: 37px;">&emsp;To&emsp;</div>
                    <input type="date" v-model="end_time" class="form-control datetime">
                </div>
            </div>
            <div class="btn">
                <button type="submit" class="btn btn-primary btn-sm" @click="save()">{{ languagePack["SAVE"]
                }}</button>
                <button type="submit" class="btn btn-danger btn-sm" @click="closeAdd()">{{ languagePack["CLOSE"]
                }}</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import {
    languagePack
} from '../../../../languages/index';
import { list, register, update } from '../../javascipt/img';
import { get_key } from '../../javascipt/user'

const emit = defineEmits(); // Import emit từ defineEmits
const { type } = defineProps(['type']);
function closeAdd() {
    // Sử dụng $emit để gửi dữ liệu qua cho cha thông qua sự kiện custom
    emit('update:isShowAdd');
}
onMounted(() => {
    load_img()
})
// danh sách biến 

const group_id = ref('')
const start_time = ref('')
const end_time = ref('')
const time = ref('')
const content_text = ref('')
const facebook = ref('')
const imgs = ref([])



const loading_img = ref(false)

const load_img = async () => {
    // imgs.value.push(item)
}

const save = () => {
    var draft = {
        group_id: group_id.value,
        start_time: start_time.value,
        end_time: end_time.value,
        time: time.value,
        content_text: content_text.value,
        facebook: facebook.value,
        imgs: imgs.value,
    }
    //upload lên nếu muốn
}
</script>