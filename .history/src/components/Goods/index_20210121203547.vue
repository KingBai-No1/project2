<!-- 商品管理页面 -->
<template>
    <div>
        <h2>商品管理页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/goods/add')">添加商品</el-button>
        <el-table style="width: 100%">
            <el-table-column label="一级分类" ></el-table-column>
            <el-table-column label="二级分类"></el-table-column>
            <el-table-column label="商品分类"></el-table-column>
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

    mounted(){
        this.axios.get("/api/goodslist").thne((res)=>{
            console.log(res);
        })
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
.lead{
    margin-bottom: 10px;
}
</style>