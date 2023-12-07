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
}

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
                    <h4>{{ languagePack["AUTO_GROUP_POST"] }}</h4>
                    <div class="AUTO_GROUP_POST_CONTENT">
                        <div class="row">
                            <div class="left col-xl-9 col-md-9 col-12">
                                <div class="left_content">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="validationCustom04" class="form-label">State</label>
                                            <select class="form-select" id="validationCustom04" required>
                                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                                <option value="1">{{ languagePack['AUTO_GROUP_POST_1'] }}</option>
                                                <option value="2">{{ languagePack['AUTO_GROUP_POST_2'] }}</option>
                                            </select>

                                        </div>
                                        <div class="col-md-4">
                                            <label for="validationCustom01" class="form-label">First name</label>
                                            <input type="text" class="form-control" id="validationCustom01" value="Mark"
                                                required>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="validationCustom02" class="form-label">Last name</label>
                                            <input type="text" class="form-control" id="validationCustom02" value="Otto"
                                                required>
                                        </div>
                                        <div class="col-md-3">
                                            <label for="validationCustomUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" class="form-control" id="validationCustomUsername"
                                                    aria-describedby="inputGroupPrepend" required>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="validationCustom03" class="form-label">City</label>
                                            <input type="text" class="form-control" id="validationCustom03" required>

                                        </div>
                                        <div class="col-md-3">
                                            <label for="validationCustom05" class="form-label">Zip</label>
                                            <input type="text" class="form-control" id="validationCustom05" required>

                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck"
                                                    required>
                                                <label class="form-check-label" for="invalidCheck">
                                                    Agree to terms and conditions
                                                </label>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit">{{ languagePack['SAVE']
                                            }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right col-xl-3 col-md-3 col-12">
                                <div class="right_content">
                                    <div class="process">
                                        <textarea class="form-control" readonly id="validationTextarea" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="AUTO_GROUP_MANAGER" v-else>
                    <h4>{{ languagePack["AUTO_GROUP_MANAGER"] }}</h4>
                    <div class="AUTO_GROUP_MANAGER_CONTENT">
                        <div class="row">
                            <div class="left col-xl-9 col-md-9 col-12">
                                <div class="left_content">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="validationCustom04" class="form-label">State</label>
                                            <select class="form-select" id="validationCustom04" required>
                                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                                <option value="1">{{ languagePack['AUTO_GROUP_POST_1'] }}</option>
                                                <option value="2">{{ languagePack['AUTO_GROUP_POST_2'] }}</option>
                                            </select>

                                        </div>
                                        <div class="col-md-4">
                                            <label for="validationCustom01" class="form-label">First name</label>
                                            <input type="text" class="form-control" id="validationCustom01" value="Mark"
                                                required>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="validationCustom02" class="form-label">Last name</label>
                                            <input type="text" class="form-control" id="validationCustom02" value="Otto"
                                                required>
                                        </div>
                                        <div class="col-md-3">
                                            <label for="validationCustomUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" class="form-control" id="validationCustomUsername"
                                                    aria-describedby="inputGroupPrepend" required>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="validationCustom03" class="form-label">City</label>
                                            <input type="text" class="form-control" id="validationCustom03" required>

                                        </div>
                                        <div class="col-md-3">
                                            <label for="validationCustom05" class="form-label">Zip</label>
                                            <input type="text" class="form-control" id="validationCustom05" required>

                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck"
                                                    required>
                                                <label class="form-check-label" for="invalidCheck">
                                                    Agree to terms and conditions
                                                </label>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit">{{ languagePack['SAVE']
                                            }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right col-xl-3 col-md-3 col-12">
                                <div class="right_content">
                                    <div class="process">
                                        <textarea class="form-control" readonly id="validationTextarea" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
} from '../../../../languages/index';
import { ref, onMounted } from 'vue';
import Loadding from '../Layouts/Loadding'
import Box from '../Item/Box.vue'
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