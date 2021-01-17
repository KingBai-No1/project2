<!--  -->
<template>
    <div>
        <h2>菜单表单页面</h2>
        <el-form style="width:500px" label-width="100px">
            <el-form-item label="上级菜单">
                <el-select>
                    <el-option label="顶级菜单"></el-option>
                    <el-option label="次级菜单"></el-option>
                </el-select>                
            </el-form-item>
            <el-form-item label="菜单名称">
                <el-input placeholder="请输入菜单名称"></el-input>
            </el-form-item>
            <el-form
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
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