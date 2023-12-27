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
                    <p class="detail">{{ languagePack["WEBSITE"] }} <a target="_blank" :href="env.domain">{{ env.site }}</a>
                    </p>
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
    languagePack
} from '../../../languages/index'
import { set_key } from '../javascipt/user'
import request from '../utils/request.js';
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
        res = await info()
        if (res.status) {
            Swal.fire({
                title: "Good job!",
                text: languagePack["LOGIN_SUCCESS"],
                icon: "success"
            });
            setTimeout(() => {
                location.reload()
            }, 2000)
        } else {
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
    return new Promise(async (resolve, reject) => {
        var userInfo = {
            username: userName.value.trim(),
            password: passWord.value.trim(),
        }
        await request.post('/user/login', userInfo)
            .then((response) => {
                set_key(JSON.stringify(response.data), 'auth')
                resolve(response.data)
            })
            .catch((e) => {
                resolve(false)
            });
    });

}
const info = async () => {
    return new Promise(async (resolve, reject) => {
        const token = JSON.parse(localStorage.getItem("auth") || "{}");
        const refreshToken = token.auth;
        request.defaults.headers.common["Authorization"] = `Bearer ${refreshToken}`;
        await request.post('/user/info', {})
            .then((response) => {
                set_key(JSON.stringify(response.data.user), 'user')
                resolve(response.data)
            })
            .catch((e) => {
                resolve(false)
            });
    });
}
</script>