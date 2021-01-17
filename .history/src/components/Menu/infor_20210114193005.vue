<!--  -->
<template>
    <div>
        <h2>菜单表单页面</h2>
        <el-form style="width:500px;" label-width="100px" :model="infor" :rules="rules" ref="menuform">
            <el-form-item label="上级菜单" prop="pid" >
                <el-select v-model="infor.pid">
                    <el-option label="顶级菜单" :value="1"></el-option>
                    <el-option label="次级菜单" :value="2"></el-option>
                </el-select>                
            </el-form-item>
            <el-form-item label="菜单名称" prop="title">
                <el-input placeholder="请输入菜单名称" v-model="infor.title"></el-input>
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group v-model="infor.type">
                    <el-radio :label="1">目录</el-radio>
                    <el-radio :label="2">菜单</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单图标" prop="icon">
                <el-input placeholder="请输入菜单图标"  v-model="infor.icon"></el-input>
            </el-form-item>
            <el-form-item label="菜单地址" prop="url">
                <el-input placeholder="请输入菜单地址" v-model="infor.url"></el-input>
            </el-form-item>
            <el-form-item label="即时状态">
                <el-switch v-model="infor.status"></el-switch>
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
                title:"",
                type:1,
                icon:"",
                url:"",
                status:"1"
            },
            rules:{
                pid:[
                    {required:true,message:"请选择上级菜单"}
                ],
                title:[
                    {required:true,message:"请输入菜单名称"}
                ],
                icon:[
                    {required:true,message:"请输入菜单图标"}
                ],
                url:[
                    {required:true,message:"请输入菜单地址"}
                ]
            }
    };
    },

    components: {},

    computed: {},

    mounted(){
        console.log();
    },

    methods: {
        submit(){
            this.$refs["menuform"].validate((val)=>{
                console.log(val);
                if(val){
                    alert("添加成功")
                }
            })
            console.log(this.$refs);
        }
    }
}

</script>
<style  scoped>
</style>