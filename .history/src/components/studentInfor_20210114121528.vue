<!--  -->
<template>
    <div>
        <el-form  label-width="80px">
            <el-form-item label="姓名">
                <el-input class="no1"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input class="no1"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select  placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    <el-option label="java" value="beijing"></el-option>
                </el-select>
            </el-form-item>
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
.no1{
    width: 300px;
}
</style>