<!--  -->
<template>
    <div>
        <h2>商品规格管理列表</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品规格管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="addbtn" @click="$router.push('/specs/add')">添加商品规格</el-button>
        <el-table style="width: 100%">
        <el-table-column label="编号"></el-table-column>
    <el-table-column label="商品规格名称"></el-table-column>
    <el-table-column label="商品规格属性"></el-table-column>
    <el-table-column label="操作">
            <template>
                <el-button size="mini" >编辑</el-button>
                <el-button size="mini" type="danger" >删除</el-button>
            </template>
        </el-table-column>
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
        this.axios.get('/api/specslist
')
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