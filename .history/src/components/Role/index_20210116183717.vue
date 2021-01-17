<!-- 角色管理-->
<template>
    <h2>角色管理</h2>
    <el-form  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
    </el-form>
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