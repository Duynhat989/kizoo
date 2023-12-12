<style scoped>
.home {
    padding: 10px;
    color: rgb(75, 75, 75);
    position: relative;
}

.banner {
    width: 100%;
    height: 300px;
}

.banner-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.avata {
    width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 50%;
    position: absolute;
    top: 150px;
    left: 40px;

}

.avata-img {
    width: 100%;
    border-radius: 50%;
}

.infomation {
    padding: 20px;
    padding-top: 60px;
}
h6{
    margin-bottom: 15px;
}
h6 span{
    color: orangered;
}
.access-token{
    width: 70%;
    border: none;
    padding: 5px 10px;
    outline: none;
    font-size: 15px;
    color: orangered;
}
/* box */
</style>
<template>
    <div class="content">
        <div class="home" v-if="main">
            <div class="banner">
                <img class="banner-img" src="../../../images/banner.jpg" alt="banner people">
            </div>
            <div class="avata">
                <img class="avata-img" src="../../../images/avata.jpg" alt="avata people">
            </div>
            <div class="infomation">
                <h4>Thông tin tài khoản</h4>
                <hr>
                <h6>Tên tài khoản: <span>{{ user_access.fullname }}</span></h6>
                <hr>
                <h6>Email: <span>{{ user_access.email }}</span></h6>
                <hr>
                <h6>Điện thoại: <span>{{ user_access.phonenumber }}</span></h6>
                <hr>
                <h6>Trạng thái tài khoản: <span>{{ user_access.verify }}</span></h6>
                <hr>
                <h6>Access token: <input class="access-token" type="text" :value="user_access.access_token" placeholder="Access token"></h6>
            </div>
        </div>
        <Loadding v-else />
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue';
import Loadding from '../Layouts/Loadding'
import { get_key, set_key } from '../../javascipt/user'
const env = require('../../config/env.js');
const main = ref(false)

const user_access = ref({})

onMounted(async () => {
    var res = await get_key('auth')
    var in4 = await info(res.auth)
    if (in4.status) {
        console.log(in4.user)
        user_access.value = in4.user
    }
    main.value = true
})
const info = async (access_token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bear ${access_token}`);
    var urlencoded = new URLSearchParams();
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    var reponsive = await fetch(`${env.domain}/api/user/info`, requestOptions)
    var text = await reponsive.text()
    var res = JSON.parse(text)
    return res
}
</script>