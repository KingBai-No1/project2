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
            <el-form-item label="菜单名称">
                <el-input placeholder="请输入菜单名称" v-model="infor.title"></el-input>
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group v-model="infor.type">
                    <el-radio :label="1">目录</el-radio>
                    <el-radio :label="2">菜单</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单图标">
                <el-input placeholder="请输入菜单图标"  v-model="infor.icon"></el-input>
            </el-form-item>
            <el-form-item label="菜单地址" >
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
                
            }
    };
    },

    components: {},

    computed: {},

    mounted(){},

    methods: {
        submit(){

        }
    }
}

</script>
<style  scoped>
</style>