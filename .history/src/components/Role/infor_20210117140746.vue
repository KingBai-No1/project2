<!--  -->
<template>
    <div>
        <h2>角色添加页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right"  class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/role'}">角色管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="80px" style="width:500px" :model="roleinfor" :rules="rules" ref="roleinfors">
        <el-form-item label="角色名称" prop="rolename">
            <el-input v-model="roleinfor.rolename"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <el-input v-model="roleinfor.menus"></el-input>
        </el-form-item>
        <el-form-item label="角色状态">
            <el-switch v-model="roleinfor.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data () {
        return {
            roleinfor:{
                rolename:"",
                menus:"",
                status:1
            },
            rules:{
                rolename:{
                    required: true, message: '请输入活动名称', 
                },
            }
    };
    },

    components: {},

    computed: {},

    mounted(){
        if(this.$route.params.edit){
            this.headtitle="编辑"
            axios.get('/api/roleinfo',{id:$route.row.id}).then((res)=>{
                this.
            })
        }
        axios.get("/api/rolelist").then((res)=>{
            console.log(res);
        })
    },

    methods: {
        /* 提交数据 */
        submit(){
                this.$refs['roleinfors'].validate((val)=>{
                if(val && this.roleinfor.status==1){
                    axios.post("/api/roleadd",this.roleinfor).then((res)=>{
                        if(res.data.code == 500){
                            alert(res.data.msg)
                        }else{
                            alert("添加成功")
                            this.$router.push("/role")
                        }
                        // console.log(res);
                    })
                    console.log("验证成功");
                }
            });
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