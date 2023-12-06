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
}
</style>
<template>
    <div class="slider">
        <button class="btn" @click="changeValueAndEmit('HOME')">
            HOME
        </button>
        <button class="btn" @click="changeValueAndEmit('UTILITIES')">
            UTILITIES
        </button>
        <button class="btn" @click="changeValueAndEmit('STORE')">
            STORES
        </button>
        <button class="btn" @click="changeValueAndEmit('CONTACT')">
            Contact
        </button>
        <button class="btn" @click="changeValueAndEmit('SETUP')">
            SETUP
        </button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(); // Import emit từ defineEmits
const childData = defineProps({
    dataFromChild: String, // Định nghĩa prop có tên là dataFromChild kiểu String
});

// Sử dụng ref để theo dõi sự thay đổi trong component con
const someValue = ref('');

// Function để thay đổi giá trị và gửi qua cho cha
function changeValueAndEmit(route) {
    someValue.value = route;
    // Sử dụng $emit để gửi dữ liệu qua cho cha thông qua sự kiện custom
    emit('update:dataFromChild', someValue.value);
}
</script>