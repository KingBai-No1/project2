<!--  -->
<template>
<!-- 外部容器 -->
    <el-container>
        <el-header>head</el-header>
        <el-container class="pag">
            <el-aside style="width:200px">Aside</el-aside>
        </el-container>    
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
    display: ;
}
.el-header{
    background-color: skyblue;
}
.pag{
    flex: 1;
    background-color: gray;
}
.el-footer{
    background-color: #B3C0D1;
}
</style>