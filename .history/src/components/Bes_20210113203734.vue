<!--  -->
<template>
<!-- 外部容器 -->
    <el-container class="box">
        <el-header>head</el-header>
        <el-container class="pag">
            <el-aside style="width:200px">Aside</el-aside>
            <el-main>main</el-main>
        </el-container>    
        <el-footer>@bxc版权所有</el-footer>
    </el-container>
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
}
.el-header{
    background-color: skyblue;
}
.pag{
    background-color: gray;
}
.el-footer{
    text
    background-color: #B3C0D1;
}
.el-main{
    background-color: #fff;
}
</style>