<!--  -->
<template>
    <div>
        <h2>角色{{headtitle}}页面</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right"  class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/role'}">角色管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="80px" style="width:500px" :model="roleinfor" :rules="rules" ref="roleinfors">
        <el-form-item label="角色名称" prop="rolename">
            <el-input v-model="roleinfor.rolename"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <!-- 引用树形控件 -->
            <!-- data:展示的内容 -->
            <!-- props:展示的形式 -->
            <!-- show-checkbox:复选框 -->
            <!-- node-key:选中节点的value值 即哪个字段 -->
            <!-- ref:操作DOM元素 -->
            <!-- default-expanded-keys:默认展开的节点的 key 的数组 -->
            <el-tree 
            :data="rolearr"   
            :props="defaultProps" 
            show-checkbox  node-key="id" 
            ref="rolearr"
            :default-expanded-keys="showarr"
            ></el-tree>
        </el-form-item>
        <el-form-item label="角色状态">
            <el-switch v-model="roleinfor.status" :active-value="1" :inactive-value="2"></el-switch>
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
            roleinfor:{
                rolename:"",
                menus:"",
                status:1
            },
            rules:{
                rolename:[
                    {
                    required: true, message: '请输入活动名称', 
                }
                ]
            },
            defaultProps:{
                children: 'children',
                label: 'title'
            },
            rolearr:[],
            showarr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        /* 角色详情页面在挂在完成后，根据是否有数据判断是添加页面还是挂载页面 */
        if(this.$route.params.edit){
            this.headtitle="编辑"
            /* 请求数据，根据id传值 */
            axios.get('/api/roleinfo',{params:{id:this.$route.params.edit}}).then((res)=>{
                /* 将得到的数据重新赋值给之前定义的roleinfor */
                this.roleinfor = res.data.list
            })
        }
        /* 请求菜单数据，分配权限 */
        axios.get("/api/menulist",{params:{istree:true}}).then((res)=>{
            /* 将数据赋值给定义的数据rolearr */
            this.rolearr = res.data.list
            console.log(this.rolearr);
            /* 角色权限展开需要是数组形式， */
            this.showarr = this.roleinfor.menus.split(",").map((d)=>parseInt(d))
            this.$refs.rolearr.setCheckedKeys(this.showarr)
            console.log(arr);
        })  
    },

    methods: {
        /* 提交数据 */
        submit(){
            console.log(this.$refs.rolearr.getCheckedKeys().join(","));
            /* 调取验证方法validate */
                this.$refs['roleinfors'].validate((val)=>{
                    /*判断条件：验证通过并且状态已经启用 */
                if(val && this.roleinfor.status==1){
                    /* 定义路由。决定是添加还是编辑 */
                    var ly = "/api/roleadd"
                    /* 如果有数据，说明此时是要编辑 */
                    if(this.$route.params.edit){
                        ly = "/api/roleedit"
                        /* 给roleinfor添加一个属性，让其等于对应的数据 */
                        this.roleinfor.id = this.$route.params.edit
                    }
                    /* 提交之前的时候开通角色权限 ----menus角色权限 字符串 */
                    this.roleinfor.menus = this.$refs.rolearr.getCheckedKeys().join(",")
                    /* 添加情况 */
                    axios.post(ly,this.roleinfor).then((res)=>{
                        /* 判断，根据响应值判断 */
                        if(res.data.code == 500){
                            alert(res.data.msg)
                        }else{
                            alert("添加成功")
                            this.$router.push("/role")
                        }
                        // console.log(res);
                    })
                    console.log("验证成功");
                }
            });
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