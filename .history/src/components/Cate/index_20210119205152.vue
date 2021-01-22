<!--  -->
<template>
    <div>
        <h2>商品管理列表</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/cate/add')">添加商品</el-button>
            <el-table style="width: 100%" :data="catearr" row-key="id">
                <el-table-column label="编号" prop="id"></el-table-column>
                <el-table-column label="分类名称" prop="catename"></el-table-column>
                <el-table-column label="商品图片" ></el-table-column>
                <el-table-column label="状态" >
                    <template slot-scope="item">
                        <el-tag v-if="item.row.status==1">启用</el-tag>
                        <el-tag v-else>禁用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="item">
                        <el-button size="mini" type="primary" @click="$router.push('cate/'+item.row.id)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="del(item)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            catearr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        this.axios.get("/api/catelist",{data:{istree:true}}).then((res)=>{
            console.log(res.data.list);
            this.catearr = res.data.list
        })
    },

    methods: {
        del(item){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
            }).then(() => {
            this.$message({
            type: 'success',
            message: '删除成功!'
            });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
          });          
        }
    }
}

</script>
<style  scoped>
h2{
    margin-bottom: 20px;
}
.lead{
    margin-bottom: 10px;
}
.addbtn{
    margin-top: 20px;
}
</style>