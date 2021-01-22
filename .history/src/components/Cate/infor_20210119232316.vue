<!--  -->
<template>
    <div>
        <h2>商品{{headtitle}}页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/cate'}">商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品{{headtitle}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="100px" style="width:500px" :model="infor" :rules="rules" ref="cateform">
            <el-form-item label="上级分类" prop="pid">
                <el-select placeholder="请选择上级分类" v-model="infor.pid">
                    <el-option label="顶级分类" :value="0"></el-option>
                    <el-option v-for="item in arr" :key="item.id"
                    :label="item.catename"
                    :value="item.id"
                    ></el-option>
                </el-select> 
            </el-form-item>
            <el-form-item label="分类名称" prop="catename">
                <el-input v-model="infor.catename"></el-input>
            </el-form-item>
            <el-form-item label="图片上传" v-if="infor.pid != 0">
                <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                    :on-change="fileChange"
                    fileList="fileList"
                    >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in"></i>
                </span>
                <span>
                    <i class="el-icon-delete"></i>
                </span>
                </span>
                </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
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
import axios from 'axios';
export default {
    data () {
        return {
            dialogVisible:false,
            dialogImageUrl:"",
            headtitle:"添加",
            infor:{
                pid:"",
                catename:"",
                status:1,
                img:""
            },
            rules:{
                catename:[
                    {required:true,message:"请输入分类名称"},
                    {min:2,max:10,message:"商品名称应为2-5个字符"}
                ]
            },
            arr:[],
            fileList:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        if(this.$route.params.edit){
            this.headtitle="编辑"
            this.axios.get("/api/cateinfo",{params:{id:this.$route.params.edit}}).then((res)=>{
                this.infor = res.data.list
            })
        }
        this.axios.get("/api/catelist?pid=0").then((res)=>{
            this.arr = res.data.list
        })
    },

    methods: {
        handlePictureCardPreview(){

        },
        fileChange(file){
            this.infor.img = file.raw
        },
        submit(){
            this.$refs["cateform"].validate((val)=>{
                if(val&&this.infor.status==1){
                    var ly = "/api/cateadd"
                    if(this.$route.params.edit){
                        ly = "/api/cateedit"
                        this.infor.id = this.$route.params.edit
                    }
                    var data = new FormData()
                    for(let i in this.infor){
                        data.append(i,this.infor[i])
                    }
                    this.axios.post(ly,data).then((res)=>{
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
.el-form-item{
    margin-bottom: 16px;
}
</style>