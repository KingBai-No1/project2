<!-- 商品管理页面 -->
<template>
    <div>
        <h2>商品管理页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/goods/add')">添加商品</el-button>
        <el-table style="width: 100%" :data="goodsarr">
            <el-table-column label="编号" prop="pid" ></el-table-column>
            <el-table-column label="一级分类" prop="firstcatename" ></el-table-column>
            <el-table-column label="二级分类" prop="secondcatename"></el-table-column>
            <el-table-column label="商品名称" prop="goodsname"></el-table-column>
            <el-table-column label="商品价格(元)" prop="price"></el-table-column>
            <el-table-column label="市场价格(元)" prop="market_price"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            goodsarr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        this.axios.get("/api/goodslist").then((res)=>{
            console.log(res);
            this.goodsarr = res.data.list
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