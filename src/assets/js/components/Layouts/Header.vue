<style scoped>
.header{
    background-color: #f84c2f;
    min-height: 70px;
    width: 100%;
    padding:0 20px;
    color: white;
    text-align: center;
}
h1{
    text-transform: uppercase;
    font-size: 1.2em;
    margin: 0;
    padding-top: 15px;
}
</style>
<template>
    <div class="header">
        <h1><i class='bx bxs-face-mask' ></i> Kizoo Group</h1> 
        <span> --------- <i class='bx bx-shield-alt-2'></i> --------- </span>
    </div>
</template>
<script setup>
    const click = () => {
        alert("Xin chao")
    }
</script>