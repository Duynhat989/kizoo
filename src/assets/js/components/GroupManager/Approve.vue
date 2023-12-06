<style scoped>
.home {
    padding: 10px;
    color: rgb(75, 75, 75);
}

/* box */
.box {
    padding: 5px;
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

.box_content {
    background-color: tomato;
    background: linear-gradient(-45deg, #ee7752, tomato, #82dcfd);
    animation: gradient 15s ease infinite;
    min-height: 100px;
    cursor: pointer;
    border-radius: 6px;
    padding: 10px;
    color: white;
    text-align: center;
}
</style>
<template>
    <div class="content">
        <div class="home"  v-if="main">
            <div class="setting">
                <div class="h4">Group management</div>
            </div>
            <div class="history">

            </div>

        </div>
        <Loadding v-else />
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import Loadding from '../Layouts/Loadding'
const main = ref(false)
onMounted(()=>{
    setTimeout(()=>{
        main.value = true
    },1000)
})
</script>