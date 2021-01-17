<!--  -->
<template>
<!-- 外部容器 -->
    <el-container>
        <el-header style="height:80px">head</el-header>
        <el-aside>Aside</el-aside>
        <el-footer>foot</el-footer>
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
}
.el-header{
    background-color: skyblue;
}
.el-footer{
    
}
</style>