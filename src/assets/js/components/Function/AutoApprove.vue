<style scoped>
.btn {
    min-width: 150px;
    margin-right: 10px;
}

.save {
    padding: 15px;
}

textarea {
    min-height: 150px;
}
</style>
<template>
    <h4>{{ languagePack["AUTO_GROUP_MANAGER"] }}</h4>
    <div class="AUTO_GROUP_MANAGER_CONTENT">
        <div class="row">
            <div class="left col-xl-12 col-md-12 col-12">
                <div class="left_content">
                    <div class="row">
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" v-model="check_1" id="myCheck" name="remember" required>
                            <label class="form-label" for="myCheck">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_APPROVE']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type_1">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <br>
                            <div v-if="type_1 == 1">
                                <label for="" class="form-label">{{ languagePack['LIST_KEYWORD'] }}</label>
                                <textarea type="date" class="form-control" id="" v-model="keyword_1"></textarea>
                            </div>
                            <div v-else>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_SPAM']
                                    }}.</label>
                                </div>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_LIVESTREAM']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_PHONE']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_WARP']
                                    }}.</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" v-model="check_2" id="myCheck2" name="remember" required>
                            <label class="form-label" for="myCheck2">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_MEMBER']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type_2">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <br>
                            <div v-if="type_2 == 1">
                                <label for="" class="form-label">{{ languagePack['LIST_KEYWORD'] }}</label>
                                <textarea type="date" class="form-control" id="" v-model="keyword_2"></textarea>
                            </div>
                            <div v-else>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['BLOCK_TIME']
                                    }}.</label>
                                </div>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['BLOCK_SPAM']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['BLOCK_FALSE']
                                    }}.</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <input class="form-check-input" type="checkbox" v-model="check_3" id="myCheck3" name="remember" required>
                            <label class="form-label" for="myCheck3">&ensp; {{ languagePack['AUTO_GROUP_MANAGER_COMMENT']
                            }}.</label>
                            <!-- <label for="validationCustom04" class="form-label">{{ languagePack['CLASSIFY'] }}</label> -->
                            <select class="form-select" id="validationCustom04" v-model="type_3">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['MANUAL'] }}</option>
                                <option value="2">{{ languagePack['AUTO'] }}</option>
                            </select>
                            <br>
                            <div v-if="type_3 == 1">
                                <label for="" class="form-label">{{ languagePack['LIST_KEYWORD'] }}</label>
                                <textarea type="date" class="form-control" id="" v-model="keyword_3"></textarea>
                            </div>
                            <div v-else>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_SPAM']
                                    }}.</label>
                                </div>

                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_LIVESTREAM']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_PHONE']
                                    }}.</label>
                                </div>
                                <div class="form-input">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-label">&ensp; {{ languagePack['DELETE_WARP']
                                    }}.</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">{{ languagePack['TIME_DELAY'] }}</label>
                            <input type="number" value="10" class="form-control" id="">

                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">{{ languagePack['LIST_UID'] }}</label>
                            <textarea type="date" class="form-control" id="" v-model="lst_group"></textarea>
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
            <div class="right col-xl-12 col-md-12 col-12">
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
import {save_auto_approve,get_auto_approve} from '../../javascipt/data'
import { load_pending_post } from '../../javascipt/group'



//setup 

const check_1 = ref(false) //phần phê duyệt bài đăng
const check_2 = ref(false) //phần phê duyệt member
const check_3 = ref(true) //phần phê duyệt bình luận

const type_1 = ref(1) //phần phê duyệt bài đăng
const type_2 = ref(1) //phần phê duyệt member
const type_3 = ref(1) //phần phê duyệt bình luận


const keyword_1 = ref('')
const keyword_2 = ref('')
const keyword_3 = ref('')


const lst_group = ref('')


onMounted(async ()=>{
    var data = await get_auto_approve()
    
})
const save = async () => {
    save_auto_approve(
        type_1,
        type_2,
        type_3,
        keyword_1,
        keyword_2,
        keyword_3        
    )
    Swal.fire({
        title: "Good job!",
        text: "Save settings!",
        icon: "success"
    });
}

const run = async () => {
    var fb_dtsg = await get_fb_dtsg()
    //loading 
    for(const group_id of lst_group.split('\n')){
        if(group_id.length > 4){
            if(check_1.value){

            }
        }
    }
    //quay lại từ đầu
    // nghỉ bao nhiêu thời gian đó
}
const pending = async (fb_dtsg) => {
    var id_user = await get_info_facebook()
    var data = await load_pending_post(fb_dtsg,id_user)
}
const stop = async () => {
    
}
</script>