<!--  -->
<template>
    <div>
        <h2>商品规格详情</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/specs'}">商品规格管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品规格详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="80px" style="width:500px">
            <el-form-item label="规格名称">
                <el-input  v-model="infor.specsname"></el-input>
            </el-form-item>
            <el-form-item label="规格属性" >
                <div class="attrs">
                    <el-input v-model="infor.attrs"></el-input>
                    <el-button type="primary" style="margin-left:10px" @click="">添加属性</el-button>
                </div>
            </el-form-item>
            <el-form-item label="即时状态">
                <el-switch :active-color="1" :inactive-color="2" v-model="infor.status"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infor:{
                specsname:"",
                attrs:"",
                status:1
            },
            specsArr:[]
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
.addbtn{
    margin-top: 20px;
}
.lead{
    margin-bottom: 10px;
}
.attrs{
    display: flex;
}
</style>