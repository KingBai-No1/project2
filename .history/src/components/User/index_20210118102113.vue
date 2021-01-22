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
            <el-table-column label="编号" prop="uid"></el-table-column>
            <el-table-column label="管理员名称" prop="username" ></el-table-column>
            <el-table-column label="所属角色" prop="roleid"></el-table-column>
            <el-table-column label="状态"></el-table-column>
            <el-table-column label="操作" >
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="danger" size="mini">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            userarr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        axios.get({
            url:"/api/userlist",
            method:"get",
        }).then((res)=>{
            console.log(res);
            this.userarr = res.data.list
        })
    },

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