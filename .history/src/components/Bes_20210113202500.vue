<!--  -->
<template>
<!-- 外部容器 -->
    <el-container>
        <el-header style="height:80px">head</el-header>
        <el-aside style="width:300px">Aside</el-aside>
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
    background-color: #fff;
}
.el-footer{
    background-color: grey;
}
</style>