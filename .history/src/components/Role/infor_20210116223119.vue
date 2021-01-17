<!--  -->
<template>
    <div>
        <h2>角色添加页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right"  class="lead">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/role'}">角色管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色添加</el-breadcrumb-item>
</el-breadcrumb>
        <el-form label-width="80px" style="width:500px">
        <el-form-item label="角色名称">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <el-switch></el-switch>
        </el-form-item>
        <
        <el-button type="primary">提交</el-button>
        </el-form>
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
.lead{
    margin-bottom: 10px;
}
</style>