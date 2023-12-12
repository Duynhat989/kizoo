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
</template>
<script setup>
import { ref, onMounted } from 'vue';
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from '../../../languages/index';
import HeaderTop from './Layouts/Header'
import LeftTop from './Left'
import Home from './Right/Home'
import Product from './Right/Product'
import Setup from './Right/Setup'
import Store from './Right/Store'
import Utilities from './Right/Utilities'
import Login from './Login'
import { get_key,set_key } from '../javascipt/user'
const main = ref(false)

const isLogin = ref(false)

const receivedData = ref('HOME')
function updateReceivedData(newData) {
    receivedData.value = newData;
}
onMounted(async () => {
    var user = await get_key('user')
    if (user.fullname) {
        isLogin.value = true
        setTimeout(() => {
            main.value = true
        }, 1000)
        document.title = languagePack["LOGIN_TITLE"];
    }else{
        await set_key('','user')
    }
})



</script>