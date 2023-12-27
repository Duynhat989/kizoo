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
.btns {
    min-width: 50px;
    margin-right: 5px;
}

.btn-page {
    /* width: 50px; */
    margin-right: 1px;
}
</style>
<template>
    <div class="pop-language">
        <div class="pop-language_content">
            <div class="form" v-if="type == 'group'">
                <div class="title mb-3">
                    <h5>{{ languagePack["HISTORY_GROUP_SCHEDULE"] }}</h5>
                </div>
                <!-- <p>The .table-striped class adds zebra-stripes to a table:</p> -->
                <table class="table table-striped">
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
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn-groups">
                    <button type="button" class="btns btn-page btn-outline-warning btn-sm"><i class='bx bx-left-arrow-alt' ></i></button>
                    <button type="button" class="btns btn-page btn-outline-warning btn-sm"><i class='bx bx-right-arrow-alt' ></i></button>
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
                    <h5>{{ languagePack["HISTORY_PAGE_SCHEDULE"] }}</h5>
                </div>
                <!-- <p>The .table-striped class adds zebra-stripes to a table:</p> -->
                <table class="table table-striped">
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
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn-groups">
                    <button type="button" class="btns btn-page btn-outline-warning btn-sm"><i class='bx bx-left-arrow-alt' ></i></button>
                    <button type="button" class="btns btn-page btn-outline-warning btn-sm"><i class='bx bx-right-arrow-alt' ></i></button>
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