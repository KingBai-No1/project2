<!--  -->
<template>
    <div>
        <h2>商品添加页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/cate'}">商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="100px" style="width:500px" :model="infor" :rules="rules" ref="cateform">
            <el-form-item label="上级分类" prop="pid">
                <el-select placeholder="请选择上级分类" v-model="infor.pid">
                    <el-option label="顶级分类" :value="0"></el-option>
                    <el-option v-for="item in catearr" :key="item.id"
                    :label="item."
                    ></el-option>
                </el-select> 
            </el-form-item>
            <el-form-item label="分类名称" prop="catename">
                <el-input v-model="infor.catename"></el-input>
            </el-form-item>
            <el-form-item label="即时状态">
                <el-switch v-model="infor.status" :active-value="1" :inactive-value="2"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infor:{
                pid:"",
                catename:"",
                status:1
            },
            rules:{
                catename:[
                    {required:true,message:"请输入分类名称"},
                    {min:2,max:10,message:"商品名称应为2-5个字符"}
                ]
            }
    };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        submit(){
            this.$refs["cateform"].validate((val)=>{
                if(val&&this.infor.status==1){
                    var data = new FormData()
                    for(let i in this.infor){
                        data.append(i,this.infor[i])
                    }
                    this.axios.post("/api/cateadd",data).then((res)=>{
                        alert(res.data.msg)
                        this.$router.push("/cate")
                    console.log(res);
                })
                }
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