<style scoped>
.wrapper {
    background-color: white;
    min-height: 100vh;
}
.left{
    background-color: #fc816b;
    min-height: 100vh;
}
.right{
    min-height: 100vh;
}
</style>
<template>
    <div class="wrapper">
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
</template>
<script setup>
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
import { ref,onMounted } from 'vue';

const { get_token_eaab,get_fb_dtsg } = require('../javascipt/request')
const { set_token,get_token } = require('../javascipt/data')
const { load_pending } = require('../javascipt/group')


const main = ref(false)
const receivedData = ref('HOME')
function updateReceivedData(newData) {
  receivedData.value = newData;
}
onMounted(async ()=>{
    setTimeout(()=>{
        main.value = true
    },1000)
    document.title = languagePack["LOGIN_TITLE"];
    // const token = await get_token_eaab()
    // set_token(token)
    // var fb_dtsg = await get_fb_dtsg()
    // load_pending(fb_dtsg,"100042254226138")
})



</script>