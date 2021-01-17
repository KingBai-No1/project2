<!--  -->
<template>
    <div>
        <h2>角色{{headtitle}}页面</h2>
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
            <el-tree :data="roleinfor" prop="defaultProps"></el-tree>
            
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
            headtitle:"添加",
            roleinfor:{
                rolename:"",
                menus:"",
                status:1
            },
            rules:{
                rolename:[
                    {
                    required: true, message: '请输入活动名称', 
                }
                ]
            },
            defaultProps:{
                children: 'children',
                label: 'label'
            }
    };
    },

    components: {},

    computed: {},

    mounted(){
        /* 角色详情页面在挂在完成后，根据是否有数据判断是添加页面还是挂载页面 */
        if(this.$route.params.edit){
            this.headtitle="编辑"
            /* 请求数据，根据id传值 */
            axios.get('/api/roleinfo',{params:{id:this.$route.params.edit}}).then((res)=>{
                /* 将得到的数据重新赋值给之前定义的roleinfor */
                this.roleinfor = res.data.list
            })
        }
    },

    methods: {
        /* 提交数据 */
        submit(){
            /* 调取验证方法validate */
                this.$refs['roleinfors'].validate((val)=>{
                    /*判断条件：验证通过并且状态已经启用 */
                if(val && this.roleinfor.status==1){
                    /* 定义路由。决定是添加还是编辑 */
                    var ly = "/api/roleadd"
                    /* 如果有数据，说明此时是要编辑 */
                    if(this.$route.params.edit){
                        ly = "/api/roleedit"
                        /* 给roleinfor添加一个属性，让其等于对应的数据 */
                        this.roleinfor.id = this.$route.params.edit
                    }
                    /* 添加情况 */
                    axios.post(ly,this.roleinfor).then((res)=>{
                        /* 判断，根据响应值判断 */
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