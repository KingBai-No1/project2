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
            <el-form-item  label="所属角色" prop="roleid"> 
                <el-select v-model="infor.roleid"  @change="changeEvent">
                    <el-option v-for="item in userarr" :key="item.uid" :label="item.username" :value="username.id"></el-option>
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
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            infor:{
                roleid:"",
                username:"",
                password:"",
                status:""
            },
            userarr:[],
    };
    },

    components: {},

    computed: {},

    mounted(){
        /* 请求数据，得到前方数据 */
        axios.get("/api/userinfo",{params:{id:this.$route.params.id}}).then((res)=>{
            console.log(res);
            this.userarr = res.data.list
        })
    },

    methods: {
        submit(){
            axios.post("/api/useradd",this.infor).then((res)=>{
                console.log(res);
            })
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