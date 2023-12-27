<style scoped>
.wrapper {
    background-color: white;
    min-height: 92vh;
}

.left {
    background-color: #fc816b;
    min-height: 92vh;
}

.right {
    min-height: 92vh;
}
</style>
<template>
    <div class="body" v-if="main">
        <div class="wrapper" v-if="isLogin">
            <HeaderTop />
            <div class="container-fluid">
                <div class="row">
                    <div class="left col-2">
                        <LeftTop :dataFromChild="receivedData" @update:dataFromChild="updateReceivedData" />
                    </div>
                    <div class="right col-10">
                        <Home v-if="receivedData == 'HOME'" />
                        <Utilities v-if="receivedData == 'UTILITIES'" />
                        <Store v-if="receivedData == 'STORE'" />
                        <Product v-if="receivedData == 'CONTACT'" />
                        <Setup v-if="receivedData == 'SETUP'" />
                    </div>
                </div>
            </div>
        </div>
        <div class="login-form" v-else>
            <Login />
        </div>
    </div>
    <Loadding v-else />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import {
    languagePack
} from '../../../languages/index';
import HeaderTop from './Layouts/Header'
import LeftTop from './Left'
import Home from './Right/Home'
import Product from './Right/Product'
import Setup from './Right/Setup'
import Store from './Right/Store'
import Utilities from './Right/Utilities'
import Login from './Login'
import { get_key, set_key } from '../javascipt/user'
import Loadding from '../components/Layouts/Loadding'
import request from '../utils/request.js';
// import Loadding_1 from '../components/Layouts/Loadding_1'
const main = ref(false)

const isLogin = ref(false)

const receivedData = ref('HOME')
function updateReceivedData(newData) {
    receivedData.value = newData;
}
onMounted(async () => {
    var auth = await get_key('auth')
    var user = await info(auth.auth)
    if (user.status) {
        set_key(JSON.stringify(user.user), 'user')
        isLogin.value = true
        document.title = languagePack["LOGIN_TITLE"];
    } else {
        localStorage.getItem('user')
        localStorage.getItem('auth')
    }

    setTimeout(() => {
        main.value = true
    }, 2000)
})
const info = async () => {
    return new Promise(async (resolve, reject) => {
        await request.post('/user/info', {})
        .then((response) => {
            resolve(response.data)
        })
        .catch((e) => {
            resolve(false)
        });
    });
}

</script>