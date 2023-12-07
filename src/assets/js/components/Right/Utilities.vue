<style scoped>
.home {
    padding: 10px;
    color: rgb(75, 75, 75);
}

/* box */

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
</style>
<template>
    <div class="content">
        <div class="home"  v-if="main">
            <div class="feature">
                <div class="h4">Frequently used feature</div>
                <div class="row">
                    <Box :title="languagePack['AUTO_GROUP_POST']" @click="clickItem(1)" />
                </div>
            </div>
            <div class="history">
                
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
import { ref,onMounted } from 'vue';
import Loadding from '../Layouts/Loadding'
import Box from '../Item/Box'
const main = ref(false)
onMounted(()=>{
    setTimeout(()=>{
        main.value = true
    },1000)
})
</script>