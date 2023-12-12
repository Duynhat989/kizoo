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
    min-width: 170px;
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
                <button type="submit" class="btn btn-primary" @click="setLang()">{{ languagePack["SAVE"] }}</button>
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
} from '../../../../languages/index';
const lang = ref(getLanguage())
const setLang = () => {
    setLanguage(lang.value)
}
</script>