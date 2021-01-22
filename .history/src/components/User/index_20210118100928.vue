<!-- 管理员管理 -->
<template>
    <div>
        <h2>管理员管理</h2>
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table style="width: 100%">
            <el-table-column label="编号" width="180" ></el-table-column>
            <el-table-column label="管理员名称" width="180" ></el-table-column>
            <el-table-column label="所属角色" width="180" ></el-table-column>
            <el-table-column label="状态" width="180" ></el-table-column>
            <el-table-column label="操作" width="180" >
                el-
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infor:{
                roleid:"",
                username:"",
                password:"",
                status:""
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
    margin-bottom: 20px;
}
</style>