<!--  -->
<template>
    <div>
        <h2>商品添加页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/cate'}">商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="100px" style="width:500px">
            <el-form-item label="上级分类">
            <el-select placeholder="请选择上级分类">
                <el-option label="顶级分类"></el-option>
            </el-select> 
        </el-form-item>
            <el-form-item label="商品名称">
            <el-input></el-input>
            </el-form-item>
        </el-form>
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

    mounted(){},

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
</style>