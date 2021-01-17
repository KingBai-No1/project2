<!-- 角色管理-->
<template>
    <div>
        <h2>角色管理页面</h2>
        <!-- 引入面包屑层级路径 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >角色管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn">添加角色</el-button>
        <el-table :data="tableData">
            <el-table-column
                prop="id"
                label="编号">
        </el-table-column>
        <el-table-column
                prop="title"
                label="角色名称">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址">
    </el-table-column>
    </el-table>
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
.addbtn{
    margin-top: 20px;
}
</style>