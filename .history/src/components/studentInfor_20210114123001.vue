<!--  -->
<template>
    <div>
        <el-form  label-width="80px">
            <el-form-item label="姓名" >
                <el-input class="no1" v-model="infor.name"></el-input>
            </el-form-item>
            <el-form-item label="所学科目">
                <el-select  placeholder="请输入所选课程" v-model="infor.xueke" multiple>
                    <el-option label="web前端" value="web前端"></el-option>
                    <el-option label="UI" value="UI"></el-option>
                    <el-option label="java" value="java"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infor:{
                name:"123",
                xueke:"web前端"
            }
    };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {}
}

</script>
<style  scoped>
.no1{
    width: 300px;
}
</style>