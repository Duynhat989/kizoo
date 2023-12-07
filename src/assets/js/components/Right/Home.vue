<style scoped>
.home {
    padding: 10px;
    color: rgb(75, 75, 75);
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
/* box */

.history {
    padding-top: 30px;
}
textarea{
    min-height: 50vh;
    border: none;
    outline: none;
}
</style>

<template>
    <div class="content">
        <div class="home" v-if="main">
            <div class="feature">
                <div class="h4">{{ languagePack["USED_FEATURE"] }}</div>
                <div class="row">
                    <Box :title="languagePack['AUTO_GROUP_POST']" @click="clickItem(1)" />
                    <Box :title="languagePack['AUTO_GROUP_MANAGER']" @click="clickItem(2)" />
                </div>
            </div>
            <div class="history">
                <div class="AUTO_GROUP_POST" v-if="isUpPost == 1">
                    <AutoPost />
                </div>
                <div class="AUTO_GROUP_MANAGER" v-else>
                    <AutoApprove />
                </div>
            </div>

        </div>
        <Loadding v-else />
    </div>
</template>

<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from '../../../../languages/index'
import { ref, onMounted } from 'vue'
import Loadding from '../Layouts/Loadding'
import Box from '../Item/Box'
import AutoPost from '../Function/AutoPost'
import AutoApprove from '../Function/AutoApprove'




const main = ref(false)
const isUpPost = ref(1)
onMounted(() => {
    setTimeout(() => {
        main.value = true
    }, 2000)
})
console.log(languagePack)
const clickItem = async (item) => {
    isUpPost.value = item
}
</script>