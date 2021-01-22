<!--  -->
<template>
    <div>
        <h2>商品管理列表</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/cate/add')">添加商品</el-button>
        <template>
            <el-table style="width: 100%" :data="">
                <el-table-column label="编号" ></el-table-column>
                <el-table-column label="分类名称" ></el-table-column>
                <el-table-column label="商品图片" ></el-table-column>
                <el-table-column label="状态" ></el-table-column>
                <el-table-column label="操作">
                    <template>
                        <el-button size="mini" type="primary">编辑</el-button>
                        <el-button size="mini" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
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
        this.axios({
            url:"/api/catelist",
            params:{istree:true}
        }).then((res)=>{
            this.catearr = res.data.list
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
    margin-bottom: 10px;
}
.addbtn{
    margin-top: 20px;
}
</style>