<!--  -->
<template>
    <div>
        <h2>商品规格详情</h2>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lead">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/specs'}">商品规格管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品规格详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form label-width="80px" style="width:500px">
            <el-form-item label="规格名称">
                <el-input  v-model="infor.specsname"></el-input>
            </el-form-item>
            <el-form-item label="规格属性" v-for="(item,index) in attrsArr" :key="index" >
                <div class="attrs">
                    <el-input v-model="item.value"></el-input>
                    <el-button type="primary" style="margin-left:10px" @click="addAttr" v-if="index==0">添加属性</el-button>
                    <el-button type="danger" style="margin-left:10px" @click="delAttr" v-else>删除属性</el-button>
                </div>
            </el-form-item>
            <el-form-item label="即时状态">
                <el-switch :active-value="1" :inactive-value="2" v-model="infor.status"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            infor:{
                specsname:"",
                attrs:"",
                status:1
            },
            attrsArr:[{value:""}]
    };
    },

    components: {},

    computed: {},

    mounted(){
        this.axios({
            url:"/api/specsinfo",
            
        })
    },

    methods: {
        addAttr(){
            this.attrsArr.push({value:""})
        },
        delAttr(index){
            this.attrsArr.splice(index,1)
        },
        submit(){
            /* 接收的attr要求字符串类型，需要转成字符串类型 */
            var temparr = []
            this.attrsArr.map(item=>{
                temparr.push(item.value)
                console.log(temparr);
            })
            this.infor.attrs = temparr.join(",")
            this.axios.post("/api/specsadd",this.infor).then((res)=>{
                console.log(res);
                if(res.data.code==200){
                    alert(res.data.msg)
                    this.$router.push("/specs")
                }
            })
        }
    }
}

</script>
<style  scoped>
h2{
    margin-bottom: 20px;
}
.addbtn{
    margin-top: 20px;
}
.lead{
    margin-bottom: 10px;
}
.attrs{
    display: flex;
}
</style>