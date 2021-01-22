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
        totle：总条数，默认为每页10条数据，totle=11 则分为两页
        -->
        <el-pagination
            background
            layout="prev, pager, next"
            :total=total
            @current-change="pageChange"
            :page-size="2"
            >
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            userarr:[],
            total:0
    };
    },

    components: {},

    computed: {},

    mounted(){
        /* 分页请求数据，获取数据总量 */
        axios.get("/api/usercount").then((res)=>{
            console.log(res);
            /* 将获取的总数据赋值给定义的total */
            this.total = res.data.list[0].total
        })
        /* 再起请求数据传入参数，进行分页每1页显示两条数据 */
        axios.get("/api/userlist",{params:{size:"2",page:"1"}}).then((res)=>{
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
        },
        pageChange(n){
            getuserList(){
                
            }
            console.log(n);
            axios.get("/api/usercount").then((res)=>{
                console.log(res);
                axios.get("/api/userlist",{params:{size:2,page:n}}).then((res)=>{
                console.log(res);
                this.userarr = res.data.list
            })
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