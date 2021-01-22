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
            <el-form-item label="商品价格" prop="price">
                <el-input type="number" v-model="infor.price"></el-input>
            </el-form-item>
            <el-form-item label="市场价格" prop="market_price">
                <el-input type="number" v-model="infor.market_price"></el-input>
            </el-form-item>
            <el-form-item label="商品规格">
                <el-select v-model="infor.specsid" @change="changeAttr">
                    <el-option v-for="specsiditem in specsidarr" :key="specsiditem.id" :label="specsiditem.specsname" :value="specsiditem.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="规格属性">
                <el-select v-model="infor.specsattr" multiple>
                    <el-option v-for="(specsattritem,index) in specsattrarr" :key="index" :label="specsattritem" :value="specsattritem"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图片上传" v-if="infor.pid != 0" prop="img">
                <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                    :on-change="fileChange"
                    :fileList="fileList"
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
                <span class="el-upload-list__item-delete" @click="handlePictureCardDel(file)">
                    <i class="el-icon-delete"></i>
                </span>
                </span>
                </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        </el-form-item>
        <el-form-item label="商品描述">
            <div id="desc"></div>
        </el-form-item>
        <el-form-item label="是否新品">
            <el-switch :active-value="1" :inactive-value="2" v-model="infor.isnew"></el-switch>
        </el-form-item>
        <el-form-item label="是否热搜">
            <el-switch :active-value="1" :inactive-value="2" v-model="infor.ishot"></el-switch>
        </el-form-item>
        <el-form-item label="即时状态">
            <el-switch :active-value="1" :inactive-value="2" v-model="infor.status"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import E from 'wangeditor'
export default {
    data () {
        
        return {
            dialogVisible:false,
            dialogImageUrl:"",
            editor:null,
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
                ],
                price:[
                    {required:true,message:"请输入商品价格"}
                ],
                market_price:[
                    {required:true,message:"请输入商品市场价格"}
                ]
            },
            cate1:[],
            cate2:[],
            specsidarr:[],
            specsattrarr:[],
            fileList:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        this.editor = new E ("#desc")
        this.editor.create()
        this.axios.get("/api/catelist?pid=0").then((res)=>{
            this.cate1 = res.data.list
        }),
        this.axios.get("/api/specslist").then((res)=>{
            console.log(res);
            this.specsidarr = res.data.list
        })
    },

    methods: {
        fileChange(){

        },
        changeSecond(n){
            console.log(n);
            this.axios.get("/api/catelist?pid="+n).then((res)=>{
            this.cate2 = res.data.list
        })
        },
        changeAttr(m){
            console.log(m);
            this.axios.get("/api/specslist?pid="+m).then((res)=>{
                this.specsattrarr = res.data.list[0].attrs
                console.log(res);
            })
        },
        submit(){
            this.infor.description = this.editor.txt.html()
            // console.log(this.editor.txt.html());
            var data = new FormData()
            this.axios.post("/api/goodsadd",this.infor).then((res)=>{
                console.log(res);
            })
        }
    }
}

</script>
<style  scoped>
#desc{
    width: 700px;
}
h2{
    margin-bottom: 20px;
}
.lead{
    margin-bottom: 10px;
}
</style>