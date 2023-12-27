<style scoped>
.pop-language {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
}

.pop-language_content {
    width: 350px;
    margin: auto;
    background-color: tomato;
    margin-top: 10%;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
}
.btn{
    min-width: 130px;
    margin-right: 10px;
    color: aliceblue;
}
.flex{
    display: flex;
}
</style>
<template>
    <div class="pop-language">
        <div class="pop-language_content">
            <div class="form">
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">{{ languagePack["LANGUAGE"] }}: </label>
                    <select class="form-select" v-model="lang">
                        <option value="VN">Vietnamese</option>
                        <option value="US" selected>English</option>
                    </select>
                </div>
                <div class="btn">
                    <button type="submit" class="btn btn-primary btn-sm" @click="setLang()">{{ languagePack["SAVE"] }}</button>
                <button type="submit" class="btn btn-warning btn-sm" @click="closeLanguage()">{{ languagePack["CLOSE"] }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import {
  languagePack,
  setLanguage,
  getLanguage
} from '../../../../languages/index';
const emit = defineEmits(); // Import emit từ defineEmits
const childData = defineProps({
    dataFromChild: String, // Định nghĩa prop có tên là dataFromChild kiểu String
});
function closeLanguage() {
    // Sử dụng $emit để gửi dữ liệu qua cho cha thông qua sự kiện custom
    emit('update:dataFromChild');
}

const lang = ref(getLanguage())
const setLang = () => {
    setLanguage(lang.value)
}
</script>