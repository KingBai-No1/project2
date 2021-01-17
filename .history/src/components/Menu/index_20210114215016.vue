<!--  -->
<template>
    <div>
        <h2>菜单管理页面</h2>
        <el-table :data="arr">
            <el-table-column label="编号" prop="id"></el-table-column>
            <el-table-column label="菜单标题" prop="title"></el-table-column>
            <el-table-column label="菜单类型">
                <template slot-scope="item">
                    <el-tag v-if="item.row.type"></el-tag>
                </template>
            </el-table-column>
            <el-table-column label="菜单图标" prop="icon"></el-table-column>
            <el-table-column label="菜单地址" prop="url"></el-table-column>           
            <el-table-column label="状态" prop="status"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            arr:[]
    };
    },

    components: {},

    computed: {},

    mounted(){
        axios.get("/api/menulist").then((res)=>{
            // console.log(res);拿到了数据
            this.arr = res.data.list
            console.log(this.arr);
        })
    },

    methods: {}
}

</script>
<style  scoped>
</style>