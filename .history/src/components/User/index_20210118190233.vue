<!-- 管理员管理 -->
<template>
    <div>
        <h2>管理员管理页面</h2>
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/user/add')">添加管理员</el-button>
        <el-table style="width: 100%" :data="userarr">
            <el-table-column label="编号" prop="id"></el-table-column>
            <el-table-column label="所属角色" prop="rolename"></el-table-column>
            <el-table-column label="管理员名称" prop="username" ></el-table-column>
            <el-table-column label="状态">
                <template slot-scope="useritem">
                    <el-tag v-if="useritem.row.status==1">启用</el-tag>
                    <el-tag v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="useritem">
                    <el-button type="primary" size="mini" @click="$router.push('/user/'+useritem.row.uid)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="del(useritem)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 引入分页组件
        background：背景色
        layout：显示的按钮，左侧，中间数字按钮，右侧
        
        -->
        <el-pagination
            background
            layout="prev, pager, next"
            :total="11">
        </el-pagination>
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
        axios.get("/api/userlist").then((res)=>{
            console.log(res);
            this.userarr = res.data.list
        })
    },
    methods:{
        /* 删除 */
        del(obj){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios.post("/api/userdelete",{uid:obj.row.uid}).then((res)=>{
                    if(res.data.code==200){
                        this.userarr = res.data.list
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
            });
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