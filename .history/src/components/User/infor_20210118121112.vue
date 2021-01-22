<!--  -->
<template>
    <div>
        <h2>
            角色管理添加页面
        </h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user'}">管理员管理</el-breadcrumb-item>
            <el-breadcrumb-item>管理员添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form style="width:500px;" label-width="100px">
            <el-form-item  label="所属角色"> 
                <el-select>
                    <el-option></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="infor.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="infor.password"></el-input>
            </el-form-item>
            <el-form-item label="即时状态">
                <el-switch v-model="infor.status" :active-value="1" :inactive-value="2"></el-switch>
            </el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infor:{
                roleid:"",
                username:"",
                password:"",
                status:""
            }
    };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        submit(){
            axios.post("/api/useradd",this.infor)
        }
    }
}

</script>
<style  scoped>
h2{
    margin-bottom: 20px;
}
.lead{
    margin-bottom: 10px;
}
</style>