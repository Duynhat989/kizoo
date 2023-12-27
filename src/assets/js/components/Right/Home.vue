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

textarea {
    min-height: 50vh;
    border: none;
    outline: none;
}

.fixed-postion {
    position: fixed;
    top: 5%;
    left: 0;
    width: 100%;
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
                    <Box :title="languagePack['AUTO_POST_SCHEDULE']" @click="clickItem(3)" />
                    <Box :title="languagePack['AUTO_POST_PAGE']" @click="clickItem(4)" />
                </div>
            </div>
            <div class="history">
                <div class="AUTO_GROUP_POST" v-if="isUpPost == 1">
                    <AutoPost />
                </div>
                <div class="AUTO_GROUP_MANAGER" v-else-if="isUpPost == 2">
                    <AutoApprove />
                </div>
                <div class="AUTO_GROUP_MANAGER" v-else-if="isUpPost == 4">
                    <AutoPostPage />
                </div>
                <div class="AUTO_POST_SCHEDULE" v-else>
                    <AutoPostGroup />
                </div>
            </div>
        </div>
        <Loadding v-else />
        <div class="fixed-postion">
            <Cookie v-if="isShowCookie" @update:isShowAdd="isShow" :type="'group'" />
        </div>
    </div>
</template>

<script setup>
import { languagePack } from '../../../../languages/index'
import { ref, onMounted, watch } from 'vue'
import Loadding from '../Layouts/Loadding'
import Box from '../Item/Box'
import AutoPost from '../Function/AutoPost'
import AutoApprove from '../Function/AutoApprove'
import AutoPostPage from '../Function/AutoPostPage'
import AutoPostGroup from '../Function/AutoPostGroup'
import Cookie from '../Layouts/Cookie'
import { get_key, set_key } from '../../javascipt/user'




const main = ref(false)
const isUpPost = ref(1)


const isShowCookie = ref(false)
onMounted(async () => {
    setTimeout(() => {
        main.value = true
    }, 500)
})
watch(isUpPost, async (newValue, oldValue) => {
    var pic = 5 - isUpPost.value
    if (pic < 3) {
        var sup = await get_key('accept')
        if (sup.active) {
            isShowCookie.value = false
        }
        else {
            isShowCookie.value = true
        }
    }
})
const isShow = async (item) => {
    if (item == 'accept') {
        await set_key('{"active":true}', 'accept')
        isShowCookie.value = false
    } else {
        localStorage.removeItem('accept')
        isUpPost.value = 1
        isShowCookie.value = false

    }
}
const clickItem = async (item) => {
    isUpPost.value = item
}
</script>