<style scoped>
.btn {
    min-width: 150px;
    margin-right: 10px;
}

.save {
    padding: 15px;
}

textarea {
    min-height: 200px;
}
</style>
<template>
    <h4>{{ languagePack["AUTO_GROUP_MANAGER"] }}</h4>
    <div class="AUTO_GROUP_MANAGER_CONTENT">
        <div class="row">
            <div class="left col-xl-9 col-md-9 col-12">
                <div class="left_content">
                    <div class="row">
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                            <label class="form-label" for="myCheck">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_APPROVE']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type" @change="changeAutoPendingPost">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <div v-if="autoPendingPost">
                                <label for="validationCustom05" class="form-label">{{ languagePack['LIST_UID'] }}</label>
                                <textarea type="date" class="form-control" id="validationCustom05"></textarea>
                            </div>
                            <div v-else>
                                <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                                <label class="form-label" for="myCheck">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_APPROVE']
                                }}.</label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                            <label class="form-label" for="myCheck">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_MEMBER']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <label for="validationCustom05" class="form-label">{{ languagePack['LIST_UID'] }}</label>
                            <!-- //Yêu cầu khi tham gia nhóm -->
                            <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                            <label class="form-label" for="myCheck">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_APPROVE']
                            }}.</label>
                        </div>
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                            <label class="form-label" for="myCheck">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_COMMENT']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <label for="validationCustom05" class="form-label">{{ languagePack['LIST_UID'] }}</label>
                            <textarea type="date" class="form-control" id="validationCustom05"></textarea>
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom05" class="form-label">{{ languagePack['TIME_POST'] }}</label>
                            <input type="date" class="form-control" id="validationCustom05" required>

                        </div>
                        <div class="save">
                            <button class="btn btn-outline-primary" @click="save" type="submit">{{ languagePack['SAVE']
                            }}</button>
                            <button class="btn btn-outline-success" @click="run" type="submit">{{ languagePack['RUN']
                            }}</button>
                            <button class="btn btn-outline-warning" @click="stop" type="submit">{{ languagePack['STOP']
                            }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right col-xl-3 col-md-3 col-12">
                <div class="right_content">
                    <div class="process">
                        <textarea class="form-control" readonly id="validationTextarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from '../../../../languages/index';

const autoPendingPost = ref(false)
const autoPendingMember = ref(false)
const autoPendingComment = ref(false)

//setup 


const type = ref(false)

const changeAutoPendingPost = async () => {
    if(type.value == 1){
        autoPendingPost.value = true
    }else{
        autoPendingPost.value = false
    }
}
</script>