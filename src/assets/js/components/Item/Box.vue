<style>
/* box */
.box {
    padding: 5px;
}

.box_content {
    background-color: tomato;
    background: linear-gradient(-45deg, #ee7752, tomato, #82dcfd);
    animation: gradient 15s ease infinite;
    min-height: 100px;
    cursor: pointer;
    border-radius: 6px;
    padding: 20px;
    color: white;
    text-align: center;
    border-radius: 7px;
    transition: all 0.5;
    box-shadow: 2px 2px 1px rgb(128 128 128 / 31%);
}
.box_content:hover{
    transform: scale(1.01);
}
</style>

<template>
    <div class="box col-xl-3 col-md-6 col-12">
        <div class="box_content">
            <h5><i class='bx bx-time bx-tada bx-flip-vertical'></i> {{ props.title }}</h5>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps(['title']);
</script>