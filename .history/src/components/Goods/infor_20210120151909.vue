<!--  -->
<template>
    <div>
        <h2>商品管理详情</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/goods'}">商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-form-item label="一级分类">
                <el-select v-model="infor.first_cateid" @change="changeSecond">
                    <el-option v-for="(item,index) in cate1" :key="index" :label="item.catename" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类">
                <el-select v-model="infor.second_cateid"></el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infor:{
                first_cateid:"",
                second_cateid:""
            },
            cate1:[],
            cate2:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        this.axios.get("/api/catelist?pid=0").then((res)=>{
            this.cate1 = res.data.list
        })
    },

    methods: {
        changeSecond(n){
            console.log(n);
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
</style>