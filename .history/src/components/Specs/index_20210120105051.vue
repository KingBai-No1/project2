<!--  -->
<template>
    <div>
        <h2>商品规格管理列表</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品规格管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/specs/add')">添加商品规格</el-button>
        <el-table style="width: 100%" :data="arr" prop="id">
        <el-table-column label="编号" prop="id"></el-table-column>
        <el-table-column label="商品规格名称" prop="specsname"></el-table-column>
        <el-table-column label="商品规格属性" prop="attrs">
            <template slot-scope="itemAttr">
                <el-tag v-for="(item,index) in itemAttr.row.attrs" :key="index" class="bq">{{item}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="状态">
            <template slot-scope="item">
                <el-tag v-if="item.row.status==1">启用</el-tag>
                <el-tag v-else>禁用</el-tag>
            </template>
        </el-table-column>
        <el-table-column   el-table-column label="操作">
            <template slot-scope="item">
                <el-button size="mini" type="primary" @click="$router.push('/specs/'+ item.row.id)">编辑</el-button>
                <el-button size="mini" type="danger" @click="del(item)">删除</el-button>
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
        arr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        this.axios.get('/api/specslist').then((res)=>{
            console.log(res);
            this.arr = res.data.list
        })
    },

    methods: {
        del(){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.axios.post('/api/specsdelete',{id:item.row.id}).then((res)=>{
                    this.arr = res
                })
                this.$message({
                type: 'success',
                message: '删除成功!'
            });
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
.bq{
    margin-right: 5px;
}
</style>