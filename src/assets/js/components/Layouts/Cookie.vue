<style scoped>
.pop-language {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    color: aliceblue;
    text-align: center;
}

.pop-language_content {
    width: 550px;
    margin: auto;
    background-color: tomato;
    margin-top: 12%;
    border-radius: 8px;
    padding: 15px;
    overflow-y: auto;
    max-height: 87vh;
    box-shadow: 3px 3px 3px rgba(128, 128, 128, 0.295);
    /* text-align: center; */
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

.group-btn{
    text-align: center;
}
</style>
<template>
    <div class="pop-language">
        <div class="pop-language_content">
            <div class="title mb-3">
                <h5><i class='bx bxs-radiation'></i> {{ languagePack["NOTIFY"] }}</h5>
            </div>
            <div class="mb-3">
                <p>{{ languagePack["COOKIE_NOTIFY"] }}</p>
            </div>
            <div class="btn group-btn">
                <button type="submit" class="btn btn-primary btn-sm" @click="ACCEPT('accept')">{{ languagePack["ACCEPT"]
                }}</button>
                <button type="submit" class="btn btn-danger btn-sm" @click="CANCEL('cancel')">{{ languagePack["CANCEL"]
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

const emit = defineEmits(); // Import emit từ defineEmits
const { type } = defineProps(['type']);
onMounted(() => {
    // load_img()
})

const ACCEPT = async (item) => {
    // imgs.value.push(item)
    emit('update:isShowAdd',item);
}

const CANCEL = (item) => {
    emit('update:isShowAdd',item);
    //upload lên nếu muốn
}
</script>