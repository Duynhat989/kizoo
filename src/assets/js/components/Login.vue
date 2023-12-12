<style scoped>
.login {
    color: rgb(0, 0, 0);
    min-height: 90vh;
    /* background-color: black; */
    background-color: white;
}

.login_content {
    position: fixed;
    top: 10%;
    width: 100%;
    z-index: 0;
}

.form-login {
    width: 400px;
    padding: 20px;
    margin: auto;
    background-color: white;
    border-radius: 15px;
}

.title {
    text-align: center;
}

.backgroup {
    height: 100vh;
}

img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    height: 100vh;
}

.btn {
    min-width: 170px;
}

.button-login {
    text-align: center;
}

.detail {
    font-size: 13px;
    cursor: pointer;
    margin-bottom: 5px;
}
</style>
<template>
    <div class="login">
        <div class="backgroup">
            <img src="../../images/back.jpg" alt="">
        </div>
        <div class="login_content">
            <div class="form-login">
                <div class="title mb-3 mt-3">
                    <h1>Kizoo</h1>
                    <p>{{ languagePack["SLOGAN"] }}</p>
                </div>
                <div class="mb-3 mt-3">
                    <label for="uname" class="form-label">{{ languagePack["USERNAME"] }}:</label>
                    <input type="text" class="form-control" v-model="userName" :placeholder="languagePack['USERNAME']">
                </div>
                <div class="mb-3 mt-3">
                    <label for="uname" class="form-label">{{ languagePack["PASSWORD"] }}:</label>
                    <input type="password" class="form-control" v-model="passWord" :placeholder="languagePack['PASSWORD']">
                </div>
                <div class="mb-3 mt-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                    <label class="form-check-label" for="myCheck">&ensp;{{ languagePack["REMEMBER_PASSWORD"] }}.</label>
                </div>
                <div class="button-login mb-3 mt-3">
                    <a type="button" @click="loginAccount" class="btn btn-primary">{{ languagePack["LOGIN"] }}</a>
                </div>
                <div class="mt-3">
                    <p class="detail">{{ languagePack["WEBSITE"] }} <a target="_blank"
                            :href="env.domain">{{ env.site }}</a></p>
                </div>
                <!-- <div class=""> -->
                    <!-- <p class="detail" @click="language"><i class='bx bx-world'></i> {{ languagePack["LANGUAGE"] }}</p> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>

import { ref } from 'vue';
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
    getLanguage
} from '../../../languages/index'
import { set_key } from '../javascipt/user'
const env = require('../config/env.js')


const userName = ref('');
const passWord = ref('');
const loginAccount = async () => {
    if (userName.value.length == 0 || passWord.value.length == 0) {
        Swal.fire({
            title: "Error!",
            text: languagePack["NOT_USER_PASSWORD"],
            icon: "error"
        });
        return
    }
    var res = await login()
    if (res.status) {
        set_key(JSON.stringify(res),'auth')
        res = await info(res.auth)
        if (res.status) {
            set_key(JSON.stringify(res.user),'user')
            Swal.fire({
                title: "Good job!",
                text: languagePack["LOGIN_SUCCESS"],
                icon: "success"
            });
            setTimeout(()=> {
                location.reload()
            },2000)
        }else{
            Swal.fire({
            title: "Error!",
            text: languagePack["NOT_USER_PASSWORD"],
            icon: "error"
        });
        }
    } else {
        Swal.fire({
            title: "Error!",
            text: languagePack["NOT_USER_PASSWORD"],
            icon: "error"
        });
        return
    }
}
const login = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", userName.value.trim());
    urlencoded.append("password", passWord.value.trim());
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    var reponsive = await fetch(`${env.domain}/api/user/login`, requestOptions)
    var text = await reponsive.text()
    var res = JSON.parse(text)
    return res
}
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