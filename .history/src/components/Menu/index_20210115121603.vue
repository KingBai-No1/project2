<!--  -->
<template>
    <div>
        <h2>菜单管理页面</h2>
        <el-button @click="$router.push('/menu/add')" type="primary" class="addbtn">添加菜单</el-button>
        <el-table :data="arr">
            <el-table-column label="编号" prop="id"></el-table-column>
            <el-table-column label="菜单标题" prop="title"></el-table-column>
            <el-table-column label="菜单类型">
                <template slot-scope="item">
                    <el-tag v-if="item.row.type==1">目录</el-tag>
                    <el-tag v-else>菜单</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="菜单图标">
                <template slot-scope="item">
                    <i :class="item.row.icon"></i>
                </template>
            </el-table-column>
            <el-table-column label="菜单地址" prop="url">
                <template slot-scope="item">
                    <el-tag v-if="item.row.status==1">启用</el-tag>
                    <el-tag v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="item">
                    <el-button type="primary" size="mini" @click="$router.push('menu/'+item.row.id)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="del(item)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            arr:[],
    };
    },

    components: {},

    computed: {},

    mounted(){
        console.log(this.$router.params.id);
        axios.get("/api/menulist").then((res)=>{
            console.log(res);//拿到了数据
            this.arr = res.data.list
            console.log(this.arr);
        })
    },

    methods: {
        // del(index,row){
        //     // this.obj.key=arr.id
        //     console.log(this.arr);
        //     axios.post("/api/menudelete",{id:row.id}).then((res)=>{
        //         console.log(res);
        //         if(res.data.code==200){
        //             this.arr.splice(index,1)
        //         }else{
        //             alert(res.data.msg)
        //         }
                
        //     })
        // },
        del(obj){
            console.log(obj);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios.post("/api/menudelete",{id:obj.row.id}).then((res)=>{
                if(res.data.code===200){
                    this.arr = res.data.list
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }else{
                    alert(res.data.msg)
                }
                })
            }).catch(() => {
                this.$message({
                type: 'info',
                message: '已取消删除'
            });          
        });
        }

        // del(obj){
        //     console.log(obj);
        // }  //row
    }
}

</script>
<style  scoped>
.addbtn{
    margin-top: 20px;
}
</style>