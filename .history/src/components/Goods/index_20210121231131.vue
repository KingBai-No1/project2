<!-- 商品管理页面 -->
<template>
    <div>
        <h2>商品管理页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/goods/add')">添加商品</el-button>
        <el-table  :data="goodsarr">
            <el-table-column label="编号" prop="id" fixed="left"></el-table-column>
            <el-table-column label="一级分类" prop="firstcatename" ></el-table-column>
            <el-table-column label="二级分类" prop="secondcatename"></el-table-column>
            <el-table-column label="商品名称" prop="goodsname"></el-table-column>
            <el-table-column label="商品价格(元)" prop="price"></el-table-column>
            <el-table-column label="市场价格(元)" prop="market_price"></el-table-column>
            <el-table-column label="是否新品">
                <template slot-scope="item">
                    <el-tag effect="dark"  v-if="item.row.isnew==1">是</el-tag>
                    <el-tag effect="dark" type="danger" v-else>否</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="是否热卖" width="200">
                <template slot-scope="item">
                    <el-tag effect="dark"  v-if="item.row.ishot==1">是</el-tag>
                    <el-tag effect="dark" type="danger" v-else>否</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="状态" width="200">
                <template slot-scope="item">
                    <el-tag effect="dark"  v-if="item.row.status==1">启用</el-tag>
                    <el-tag effect="dark" type="danger" v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="200" fixed="right">
                <template slot-scope="item">
                    <el-button type="primary" size="mini" @click="$router.push('goods/'+item.row.id)">编辑</el-button>
                    <el-button type="danger" size="mini">删除</el-button>
                </template>
            </el-table-column>
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