<!-- 角色管理-->
<template>
    <div>
        <h2>角色管理页面</h2>
        <!-- 引入面包屑层级路径 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >角色管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/role/add')">添加角色</el-button>
        <el-table>
            <el-table-column
                prop="id"
                label="编号">
            </el-table-column>
            <el-table-column
                prop="rolename"
                label="角色名称">
            </el-table-column>
            <el-table-column
                prop="menus"
                label="角色权限">
            </el-table-column>
            <el-table-column
                label="状态">
            </el-table-column>
            <el-table-column
                label="操作">
            </el-table-column>
    </el-table>
    </div>
    
    
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            arr:[],
    };
    },

    components: {},

    computed: {},

    mounted(){
        axios.get("/api/rolelist",{params:{istree:true}}).then(res)
    },

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