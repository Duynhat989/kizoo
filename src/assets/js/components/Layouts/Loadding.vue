<style scoped>
.loadding{
    padding: 10px;
    color: rgb(75, 75, 75);
    min-height: 90vh;
    /* background-color: black; */
    background-color: white;
}
.loadding_content{
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

}
/* loader */
.loader {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  left: -100px;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 orangered, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 orangered, 100px 0 orangered, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 orangered, 110px 0 orangered, 100px 0 orangered, 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 orangered, 120px 0 orangered, 110px 0 orangered, 100px 0 orangered;
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 orangered, 120px 0 orangered, 110px 0 orangered;
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 orangered, 120px 0 orangered;
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 orangered;
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
      
</style>
<template>
    <div class="loadding">
        <div class="loadding_content">
            <span class="loader"></span>
        </div>
    </div>
</template>
<script setup>
    
</script>