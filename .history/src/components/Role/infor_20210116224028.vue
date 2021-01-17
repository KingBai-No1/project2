<!--  -->
<template>
    <div>
        <h2>角色添加页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right"  class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/role'}">角色管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="80px" style="width:500px" :model="roleinfor" :rules="rules" ref="roleinfor">
        <el-form-item label="角色名称" prop="rolename">
            <el-input v-model="roleinfor.rolename"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <el-input v-model="roleinfor.menus"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <el-switch v-model="roleinfor.status"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">提交</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            roleinfor:{
                rolename:"",
                menus:"",
                status:1
            },
            rules:{
                rolename:{
                    required: true, message: '请输入活动名称', 
                },
                menus:{
                    required: true, message: '请输入活动名称', 
                },
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
h2{
    margin-bottom: 20px;
}
.lead{
    margin-bottom: 10px;
}
</style>