<!--  -->
<template>
    <div>
        <h2>商品管理页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
        <template>
        <el-table style="width: 100%">
        <el-table-column label="编号" width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
        </el-table-column>
        <el-table-column label="分类名称" width="180">
            <template>
            <el-popover trigger="hover" placement="top">
                <p>姓名:</p>
                <p>住址:</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium"></el-tag>
                </div>
            </el-popover>
        </template>
    </el-table-column>
    <el-table-column label="操作">
        <template>
        <el-button size="mini">编辑</el-button>
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