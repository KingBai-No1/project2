<!--  -->
<template>
    <div>
        <h2>菜单表单页面</h2>
        <el-form style="width:500px;margin-top:30px" label-width="100px">
            <el-form-item label="上级菜单">
                <el-select>
                    <el-option label="顶级菜单"></el-option>
                    <el-option label="次级菜单"></el-option>
                </el-select>                
            </el-form-item>
            <el-form-item label="菜单名称">
                <el-input placeholder="请输入菜单名称"></el-input>
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group>
                    <el-radio>目录</el-radio>
                    <el-radio>菜单</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单图标">
                <el-input placeholder="请输入菜单图标"></el-input>
            </el-form-item>
            <el-form-item label="菜单地址">
                <el-input placeholder="请输入菜单地址"></el-input>
            </el-form-item>
            <el-form-item label="即时状态">
                <el-switch v-mo></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
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
                type:"1",
                icon:"",
                url:""
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
</style>