<!--  -->
<template>
    <div class="box">
        <div class="wrap">
            <h1>欢迎来到后台管理系统</h1>
            <el-form label-width="80px" class="loginform">
            <el-form-item label="用户名">
                <el-input style="width:300px"></el-input>
            </el-form-item>
            <el-form-item label="密码" class="">
                <el-input type="password" style="width:300px"></el-input>
            </el-form-item>
            <el-button type="primary" style="width:300px">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
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
    width: 500px;
    border: 1px solid black;
    text-align: center;
}

</style>