<!-- 角色管理-->
<template>
    <div>
        <h2>角色管理页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to=>角色管理</el-breadcrumb-item>
        </el-breadcrumb>
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
h2{
    margin-bottom: 20px;
}
</style>