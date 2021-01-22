<!--  -->
<template>
    <div>
        <h2>
            角色管理添加页面
        </h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user'}">管理员管理</el-breadcrumb-item>
            <el-breadcrumb-item>管理员添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-select
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