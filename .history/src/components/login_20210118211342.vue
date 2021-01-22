<!--  -->
<template>
    <div class="box">
        <div class="wrap">
            <h1>欢迎来到后台管理系统</h1>
            <el-form label-width="80px" class="">
            <el-form-item label="用户名">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password"></el-input>
            </el-form-item>
            <el-button type="primary">登录</el-button>
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
}
</style>