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
    box-shadow: 2px 2px 3px rgb(128 128 128 / 31%);
    height: 120px;
    align-items: center;
    justify-content: center;
    display: flex;
}

.box_content:hover {
    transform: scale(1.01);
}

h5 {
    text-transform: uppercase;
    font-weight: 400;

}
</style>

<template>
    <div class="box col-xl-2 col-md-3 col-12">
        <div class="box_content">
            <div class="title">
                <h5> {{ props.title }}</h5>
                <h6><i class='bx bx-atom'></i></h6>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps(['title']);
</script>