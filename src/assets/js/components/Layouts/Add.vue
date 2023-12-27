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
            <div class="form" v-if="type == 'group'">
                <div class="title mb-3">
                    <h5>{{ languagePack["ADD_GROUP_SCHEDULE"] }}</h5>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["UID_GROUP"] }}: </label>
                    <input type="text" class="form-control" v-model="group_id" :placeholder="languagePack['UID_GROUP']">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["SELECT_TIME"] }}: </label>
                    <div class="line">
                        <input type="date" v-model="start_time" class="form-control datetime">
                        <div class="div" style="line-height: 37px;">&emsp;To&emsp;</div>
                        <input type="date" v-model="end_time" class="form-control datetime">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["TIME_POST"] }}: </label>
                    <input type="time" class="form-control" v-model="time">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["CONTENT_TEXT"] }}: </label>
                    <textarea type="text" class="form-control" v-model="content_text"
                        :placeholder="languagePack['CONTENT_TEXT']"></textarea>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["SELECT_FACEBOOK"] }}: </label>
                    <select class="form-select" v-model="facebook">
                        <option selected disabled value="">{{ languagePack['SELECT_FACEBOOK'] }}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["SELECT_IMAGE"] }}: </label>
                    <input type="file" @change="changeImg" class="form-control">
                </div>
                <div class="mb-3">
                    <div class="list-img">
                        <div class="img">
                            <img v-if="loading_img" width="100" height="120"
                                src="https://retchhh.files.wordpress.com/2015/03/loading1.gif" alt="error image">
                        </div>
                        <div class="img" v-for="item of imgs">
                            <img width="100" height="120" :src="item.src" alt="error image">
                            <div class="close" @click="remove_image(item.id)"><i class='bx bx-trash'
                                    style='color:#f71515'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <button type="submit" class="btn btn-primary btn-sm" @click="save()">{{ languagePack["SAVE"]
                    }}</button>
                    <button type="submit" class="btn btn-danger btn-sm" @click="closeAdd()">{{ languagePack["CLOSE"]
                    }}</button>
                </div>
            </div>
            <div class="form" v-else>
                <div class="title mb-3">
                    <h5>{{ languagePack["ADD_PAGE_SCHEDULE"] }}</h5>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["UID_GROUP"] }}: </label>
                    <input type="text" class="form-control" v-model="group_id" :placeholder="languagePack['UID_GROUP']">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["SELECT_TIME"] }}: </label>
                    <div class="line">
                        <input type="date" v-model="start_time" class="form-control datetime">
                        <div class="div" style="line-height: 37px;">&emsp;To&emsp;</div>
                        <input type="date" v-model="end_time" class="form-control datetime">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["TIME_POST"] }}: </label>
                    <input type="time" class="form-control" v-model="time">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["CONTENT_TEXT"] }}: </label>
                    <textarea type="text" class="form-control" v-model="content_text"
                        :placeholder="languagePack['CONTENT_TEXT']"></textarea>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["SELECT_FACEBOOK"] }}: </label>
                    <select class="form-select" v-model="facebook">
                        <option selected disabled value="">{{ languagePack['SELECT_FACEBOOK'] }}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">{{ languagePack["SELECT_IMAGE"] }}: </label>
                    <input type="file" @change="changeImg" class="form-control">
                </div>
                <div class="mb-3">
                    <div class="list-img">
                        <div class="img">
                            <img v-if="loading_img" width="100" height="120"
                                src="https://retchhh.files.wordpress.com/2015/03/loading1.gif" alt="error image">
                        </div>
                        <div class="img" v-for="item of imgs">
                            <img width="100" height="120" :src="item.src" alt="error image">
                            <div class="close" @click="remove_image(item.id)"><i class='bx bx-trash'
                                    style='color:#f71515'></i>
                            </div>
                        </div>
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
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import {
    languagePack
} from '../../../../languages/index';
import { list, register, update } from '../../javascipt/img';
import { get_key } from '../../javascipt/user'
import request from '../../utils/request';

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
const upload = ref('')
const imgs = ref([])



const loading_img = ref(false)

const load_img = async () => {
    // imgs.value.push(item)
}

const save = () => {
    var draft = {
        uid: group_id.value,
        start: start_time.value,
        end: end_time.value,
        time: time.value,
        text: content_text.value,
        face: facebook.value,
        upload: upload.value,
        type: type,
        imgs: imgs.value,
    }
    console.log(draft)
    request.post('/post/register', draft)
        .then((response) => {
            var res = response.data
            console.log(res)


        })
        .catch((e) => {
            
        });
    //upload lên nếu muốn
}
const changeImg = async (event) => {
    loading_img.value = true
    var auth = await get_key('auth')
    const selectedFile = event.target.files[0];
    var base64 = await convertToBase64(selectedFile)
    var data = await uploadImage(base64, '06d555063f673192d9c54dc015b29c5b')
    var res = JSON.parse(data)
    var url_xpath = res.data.url
    var reg = await register(auth.auth, url_xpath)
    if (reg.status) {
        var item = {
            id: reg.store.id,
            src: reg.store.src,
            status: reg.store.status
        }
        imgs.value.push(item)
    }
    else {
        Swal.fire({
            title: "Error!",
            text: languagePack["NOT_IMAGE"],
            icon: "error"
        });
    }

    loading_img.value = false

    // Now, you can do something with the selected file
    console.log('Selected file:', url_xpath);
    // this.$refs.fileInput.value = '';

}
const remove_image = (id) => {
    const indexToRemove = imgs.value.findIndex(item => item.id === id);
    if (indexToRemove !== -1) {
        imgs.value.splice(indexToRemove, 1);
    }
}

const uploadImage = async (base64, access_token) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("image", base64.split(',')[1]);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    var res = await fetch(`https://api.imgbb.com/1/upload?key=${access_token}`, requestOptions)
    return await res.text()

}
const convertToBase64 = (file) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            reject(error);
        }
    });

}


</script>