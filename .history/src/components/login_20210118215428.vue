<!--  -->
<template>
    <div class="box">
        <div class="wrap">
            <h1>欢迎来到后台管理系统</h1>
            <el-form label-width="80px" class="loginform" :model="dl" :rules="rules" ref="toLogin">
                <el-form-item label="用户名" class="formbox" prop="username">
                    <el-input style="width:300px" placeholder="请输入用户名" v-model="dl.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" class="formbox" prop="password">
                    <el-input type="password" style="width:300px" placeholder="请输入密码" v-model="dl.password"></el-input>
                </el-form-item>
                <el-button type="primary" class="btn" @click="Login">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            dl:{
                username:"",
                password:""
            },
            rules:{
                username:[
                    {required:true,message:"请输入用户名"}
                ],
                password:[
                    {required:true,message:"请输入密码"},
                    {min:2,max:20,message:"密码长度在2-20位之间"}
                ]
            }
    };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        Login(){
            this.$refs["toLogin"].validate((val)=>{
                /* 请求数据，进行数据验证 */
                axios.post("/api/userlogin",this.dl).then((res)=>{
                    if(res.data.code==200){
                        /* 通过mutations改变仓库中的数据 */
                        $
                    }
                })
            })
        }
    }
}

</script>
<style  scoped>
.box{
    width: 100vw;
    height: 100vh;
    background-image: url("http://dev.mcloudlife.com/img/site/login_backgound.jpg");
    background-size: cover;
    display: flex;
}
h1{
    display: inline-block;
    margin-top: 20px;
}
.wrap{
    width: 500px;
    height: 300px;
    background-color: #fff;
    margin: 150px auto;
    border-radius: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.loginform{
    height: 200px;
    width: 400px;
}
.btn{
    width:350px;
    margin-left: 40px;
    
}
</style>