<!--  -->
<template>
    <div>
        <h2>
            管理员{{headtitle}}页面
        </h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user'}">管理员管理</el-breadcrumb-item>
            <el-breadcrumb-item>管理员{{headtitle}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form style="width:500px;" label-width="100px" :model="infor" ref="useradds" :rules="rules">
            <el-form-item  label="所属角色" prop="roleid"> 
                <el-select v-model="infor.roleid">
                    <el-option v-for="item in userarr" :key="item.id" :label="item.rolename" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="infor.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="infor.password"></el-input>
                <span v-if="$route.params.edit">密码留空则不修改</span>
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
// import axios from 'axios';
export default {
    data () {
        return {
            headtitle:"添加",
            infor:{
                roleid:"",
                username:"",
                password:"",
                status:""
            },
            userarr:[],
            rules:{
                roleid:[{
                    required:true,message:"请选择所属角色"
                }],
                username:[
                    {required:true,message:"请输入管理员名称"},
                    {min:3,max:15,message:"管理员名称应在3-15位之间"}
                    ],
            },
            userinofrarr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        /* 点击编辑获取前方数据 */
        if(this.$route.params.edit){
            this.headtitle='编辑'
            this.axios.get("/api/userinfo",{params:{uid:this.$route.params.edit}}).then((res)=>{
                console.log(res);
                this.infor = res.data.list
                this.infor.password = ""
            })
        }
        /* 请求数据，得到前方数据 */
        this.axios.get("/api/rolelist").then((res)=>{
            console.log(res);
            this.userarr = res.data.list
        })
        
    },

    methods: {
        submit(){
            console.log(this.infor);
            this.$refs["useradds"].validate((val)=>{
                if(val&&this.infor.status==1){
                    var ly = "/api/useradd"
                    if(this.$route.params.edit){
                        ly = "/api/useredit"
                        /* 给roleinfor添加一个属性，让其等于对应的数据 */
                        this.infor.id = this.$route.params.edit
                    }
                    this.axios.post(ly,this.infor).then((res)=>{
                    if(res.data.code==200){
                        alert(res.data.msg)
                        this.$router.push("/user")
                    }
                })
                }
            })
        },
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