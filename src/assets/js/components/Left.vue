<style scoped>
.slider {
    min-height: 50px;
    padding: 10px;
}

.btn {
    background-color: #fd6044;
    box-shadow: 0 2px 3px 0 #e9e9e991, 0 2px 4px rgba(233, 233, 233, 0.514)e9;
    border-radius: 7px;
    width: 100%;
    height: 55px;
    color: white;
    margin-top: 5px;
    text-align: start;
    padding: 0 30px;
}
.img-data{
    object-fit: cover;
    width: 100%;
    height: 150px;
}
.img{
    text-align: center;
    margin: 10px 0px;
    margin-bottom: 0;
}
.logo{
    
    padding: 0 10px;
}
</style>
<template>
    <div class="logo">
        <div class="img">
            <img class="img-data" src="../../images/logo.jpg" alt="">
        </div>
    </div>
    <div class="slider">
        <button class="btn" @click="changeValueAndEmit('HOME')">
            <i class='bx bx-home-alt-2'></i> {{  languagePack["HOME"] }}
        </button>
        <!-- Phần auto -->
        <button class="btn" @click="changeValueAndEmit('UTILITIES')">
            <i class='bx bx-git-compare' ></i> {{  languagePack["UTILITIES"] }}
        </button>
        <!-- Phần tool nhanh -->
        <button class="btn" @click="changeValueAndEmit('STORE')">
            <i class='bx bxs-network-chart' ></i> {{  languagePack["ORTHER"] }}
        </button>
        <!--  -->
        <button class="btn" @click="changeValueAndEmit('CONTACT')">
            <i class='bx bxs-contact' ></i> {{  languagePack["CONTACT"] }}
        </button>
        <button class="btn" @click="changeValueAndEmit('SETUP')">
            <i class='bx bx-cog' ></i> {{  languagePack["SETUP"] }}
        </button>
        <button class="btn" @click="language()">
            <i class='bx bx-world' ></i> {{  languagePack["LANGUAGE"] }}
        </button>
    </div>
</template>
<script setup>

import { ref } from 'vue';
const emit = defineEmits(); // Import emit từ defineEmits
const childData = defineProps({
    dataFromChild: String, // Định nghĩa prop có tên là dataFromChild kiểu String
})
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from '../../../languages/index'
const someValue = ref('');
const setLang = ref(false);



function changeValueAndEmit(route) {
    someValue.value = route;
    emit('update:dataFromChild', someValue.value);
}
const language = async () => {
    setLang.value = true
}
</script>