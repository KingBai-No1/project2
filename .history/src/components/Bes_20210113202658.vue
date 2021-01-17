<!--  -->
<template>
<!-- 外部容器 -->
    <el-container>
        <el-header style="height:80px">head</el-header>
        <el-container>    
        <el-aside style="width:200px">Aside</el-aside>
        <el-footer style="height:80px">foot</el-footer>
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

.el-container{
    width: 100vw;
    height: 100vh;
    display: flex;
}
.el-header{
    background-color: skyblue;
}
.el-aside{
    flex: 1;
    background-color: gray;
}
.el-footer{
    background-color: #B3C0D1;
}
</style>