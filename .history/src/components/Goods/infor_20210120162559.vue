<!--  -->
<template>
    <div>
        <h2>商品管理详情</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/goods'}">商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="80px" style="width:500px" :model="infor" :rules="rules" ref="goodsinfor">
            <el-form-item label="一级分类" prop="first_cateid">
                <el-select v-model="infor.first_cateid" @change="changeSecond">
                    <el-option v-for="(item,index) in cate1" :key="index" :label="item.catename" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类" prop="second_cateid">
                <el-select v-model="infor.second_cateid">
                    <el-option v-for="(item,index) in cate2" :key="index" :label="item.catename" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品名称" prop="goodsname">
                <el-input v-model="infor.goodsname" placeholder="请填写商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input type="number" v-model="infor.price"></el-input>
            </el-form-item>
            <el-form-item label="市场价格">
                <el-input type="number" v-model="infor.market_price"></el-input>
            </el-form-item>
            <el-form-item label="商品规格">
                <el-select>
                    
                </el-select>
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
                second_cateid:"",
                goodsname:"",
                price:"",
                market_price:"",
                specsid:'',
                specsattr:"",
                img:"",
                description:"",
                isnew:"",
                ishot:"",
                status:""

            },
            rules:{
                first_cateid:[
                    {required:true,message:"请选择一级分类"}
                ],
                second_cateid:[
                    {required:true,message:"请选择二级分类"}
                ],
                goodsname:[
                    {required:true,message:"请填写商品名称"}
                ]
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
            this.axios.get("/api/catelist?pid="+n).then((res)=>{
            this.cate2 = res.data.list
        })
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