<style scoped>
.btn {
    min-width: 150px;
    margin-right: 10px;
}

.save {
    padding: 15px;
}
</style>
<template>
    <h4>{{ languagePack["AUTO_GROUP_POST"] }}</h4>
    <div class="AUTO_GROUP_POST_CONTENT">
        <div class="row">
            <div class="left col-xl-9 col-md-9 col-12">
                <div class="left_content">
                    <div class="row">
                        <div class="col-md-4">
                            <label for="validationCustom04" class="form-label">{{ languagePack['TYPE_UPLOAD'] }}</label>
                            <select class="form-select" id="validationCustom04" v-model="type">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['AUTO_GROUP_POST_1'] }}</option>
                                <option value="2">{{ languagePack['AUTO_GROUP_POST_2'] }}</option>
                            </select>

                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom01" class="form-label">{{ languagePack['UID_UPLOAD'] }}</label>
                            <input type="text" v-model="group_id" class="form-control" id="validationCustom01">
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom02" class="form-label">{{ languagePack['UID_VICTIM_UPLOAD']
                            }}</label>
                            <input type="text" v-model="group_victim_id" class="form-control" id="validationCustom02">
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom03" class="form-label">{{ languagePack['TAG_UID'] }}</label>
                            <input type="text" v-model="tag_id" class="form-control" id="validationCustom03" >
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom04" class="form-label">{{ languagePack['TYPE_TIME'] }}</label>
                            <select class="form-select" id="validationCustom04" v-model="type_time">
                                <option selected disabled value="">{{ languagePack['AUTO_GROUP_POST_CHOOSE'] }}</option>
                                <option value="1">{{ languagePack['TYPE_TIME_1'] }}</option>
                                <option value="2">{{ languagePack['TYPE_TIME_2'] }}</option>
                            </select>

                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom05" class="form-label">{{ languagePack['TIME_POST'] }}</label>
                            <input type="date" v-model="time_post" class="form-control" id="validationCustom05" >

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
import { ref, onMounted } from 'vue'
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from '../../../../languages/index'
import { get_auto_post,save_auto_post } from '../../javascipt/data'


const type = ref(1)
const group_id = ref('')
const group_victim_id = ref('')
const tag_id = ref('') //null
const type_time = ref(1)  //1 1 ngày // mỗi ngày
const time_post = ref('')
const is_image = ref(true)

onMounted(async ()=>{
    var data = await get_auto_post()
    console.log(data)
})

const save = async () => {
    await save_auto_post(
        type.value,
        group_id.value,
        group_victim_id.value,
        tag_id.value,
        type_time.value,
        time_post.value,
        is_image.value,
    )
}
const run = async () => {
    alert("")
}
const stop = async () => {
    alert("")
}

</script>