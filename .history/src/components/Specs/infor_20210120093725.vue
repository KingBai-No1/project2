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
            <el-form-item label="规格名称" v-model="infor.specsname">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="规格属性" >
                <div class="attrs">
                    <el-input></el-input>
                    <el-button type="primary" style="margin-left:10px">添加属性</el-button>
                </div>
            </el-form-item>
            <el-form-item>
                <el-switch
                :active-color="1"
                :inactive-color="2">
            </el-switch>
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
            }
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