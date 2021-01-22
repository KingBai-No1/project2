<!--  -->
<template>
    <div>
        <h2>菜单{{headtitle}}页面</h2>
        <!-- 引用面包屑层级路径 -->
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/menu'}">菜单管理</el-breadcrumb-item>
            <el-breadcrumb-item>菜单{{headtitle}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form style="width:500px;" label-width="100px" :model="infor" :rules="rules" ref="menuform">
            <el-form-item label="上级菜单" prop="pid" >
                <el-select v-model="infor.pid" @change="changeEvent">
                    <el-option label="顶级菜单" :value="0"></el-option>
                    <el-option v-for="item in menuarr" :key="item.id" 
                    :label="item.title" :value="item.id">
                    </el-option>
                </el-select>                
            </el-form-item>
            <el-form-item label="菜单名称" prop="title">
                <el-input placeholder="请输入菜单名称" v-model="infor.title"></el-input>
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group v-model="infor.type">
                    <el-radio :label="1" >目录</el-radio>
                    <el-radio :label="2" >菜单</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单图标" prop="icon" v-show="infor.type==1">
                <el-input placeholder="请输入菜单图标"  v-model="infor.icon" ></el-input>
            </el-form-item>
            <el-form-item label="菜单地址" prop="url" v-show="infor.type==2">
                <el-input placeholder="请输入菜单地址" v-model="infor.url" ></el-input>
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
import axios from "axios"
export default {
    data () {
        return {
            headtitle:"添加",
            infor:{
                pid:"",
                title:"",
                type:1,
                icon:"",
                url:"",
                status:1
            },
            rules:{
                pid:[
                    {required:true,message:"请选择上级菜单"}
                ],
                title:[
                    {required:true,message:"请输入菜单名称"},
                    {min:3,max:20,message:"输入的菜单应在3-20个字符之间"}
                ]
            },
            // 接收挂载之后的数据
            menuarr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        console.log(this.infor.title);
        if(this.$route.params.edit){
            this.headtitle="编辑"
            axios.get("/api/menuinfo",{params:{id:this.$route.params.edit}}).then((res)=>{
                console.log(res);
                this.infor = res.data.list
            })
        }
        /* 再添加页面再次请求数据 */
        axios.get("/api/rolelist?pid=0").then((res)=>{
            // 将请求的数据添加到data中定义的menuarr
            this.menuarr = res.data.list
            console.log(this.menuarr);
        })
    },

    methods: {
        submit(){
            this.$refs["menuform"].validate((val)=>{
                // console.log(val);
                if(this.infor.status==1 && val){
                    // 声明变量，三木判断路由
                    var ly = "/api/menuadd"
                    console.log(ly);
                    if(this.$route.params.edit){
                        ly = "/api/menuedit"
                        this.infor.id = this.$route.params.edit
                    }
                    axios.post(ly,this.infor).then((res)=>{
                        console.log(res);
                        if(res.data.code==500){
                            alert(res.data.msg)
                        }else{
                            alert("添加成功")
                            this.$router.push("/menu")
                        }
                    })
                    
                }
            })
            
        },
        changeEvent(n){
            console.log(n);
            // 通过选择菜单层级，动态改变选项：目录或者菜单
            this.infor.type=n==0?1:2
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