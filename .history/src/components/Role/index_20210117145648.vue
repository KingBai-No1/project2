<!-- 角色管理-->
<template>
    <div>
        <h2>角色管理页面</h2>
        <!-- 引入面包屑层级路径 -->
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >角色管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/role/add')">添加角色</el-button>
        <el-table :data="arr">
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
                <template slot-scope="roleitem">
                    <el-tag v-if="roleitem">启用</el-tag>
                    <el-tag>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="roleitem">
                    <el-button type="primary" size="mini" @click="$router.push('/role/'+roleitem.row.id)">编辑</el-button>
                    <el-button type="danger" @click="del(roleitem)" size="mini">删除</el-button>
                </template>
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
        axios.get("/api/rolelist").then((res)=>{
            console.log(res);
            this.arr = res.data.list
        })
    },

    methods: {
        del(obj){
            console.log(obj);
            /* 调用$confirm 弹框组件 */
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                /* 发送请求，确认删除数据 */
                axios.post("/api/roledelete",{id:obj.row.id}).then((res)=>{
                    if(res.data.code==200){
                        this.arr = res.data.list
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }else{
                        alert(res.data.msg)
                    }
                })
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });  
    })
    }
    }
}

</script>
<style  scoped>
h2{
    margin-bottom: 20px;
}
.addbtn{
    margin-top: 20px;
}
.lead{
    margin-bottom: 10px;
}
</style>