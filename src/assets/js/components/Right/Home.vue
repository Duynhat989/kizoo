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
        <div class="home" v-if="main">
            <div class="feature">
                <div class="h4">Frequently used feature</div>
                <div class="row">
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">
                            <h4><i class='bx bx-time bx-tada bx-flip-vertical'></i> Schedule a sale hunt</h4>
                        </div>
                    </div>
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">
                            <h4><i class='bx bx-wifi bx-tada bx-flip-vertical'></i> Track item prices</h4>
                        </div>
                    </div>
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">

                        </div>
                    </div>
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">

                        </div>
                    </div>
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">

                        </div>
                    </div>
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">

                        </div>
                    </div>
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">

                        </div>
                    </div>
                    <div class="box col-xl-3 col-md-6 col-12">
                        <div class="box_content">

                        </div>
                    </div>
                </div>
            </div>
            <div class="history">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <Loadding v-else />
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Loadding from '../Layouts/Loadding'
const main = ref(false)
onMounted(() => {
    setTimeout(() => {
        main.value = true
    }, 2000)
})
</script>