<!--  -->
<template>
    <div class="box">
        <div class="wrap">
            <h1>欢迎来到后台管理系统</h1>
            <el-form label-width="80px" class="loginform" :model="dl" :rules="rules" ref="toLogin">
                <el-form-item label="用户名" class="formbox">
                    <el-input style="width:300px" placeholder="请输入用户名" v-model="dl.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" class="formbox">
                    <el-input type="password" style="width:300px" placeholder="请输入密码" v-model="dl.password"></el-input>
                </el-form-item>
                <el-button type="primary" class="btn">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dl:{
                username:"",
                password:""
            },
            rules:{}
                username:{}
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