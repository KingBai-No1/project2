<!--  -->
<template>
<!-- 外部容器 -->
    <el-container class="box">
        <el-header>
            <h3 style="display:inline-block">小U商城后台管理系统</h3>
            <span>欢迎:{{$store.state.userinfor.username}}</span>
            <el-button type="info" class="exit" @click="outLogin">退出登录</el-button>
        </el-header>
        <el-container class="pag">
            <el-aside style="width:200px">
                <!-- 1、默认选中第几个 -->
                <!-- 2 -->
                <el-menu
                :default-active="defaultActive"
                class="el-menu-vertical-demo"  
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                unique-opened
                >
                <!-- 循环遍历顶级菜单 -->
        <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            首页
        </el-menu-item>
        <!-- 通过仓库中的数据，根据权限实现动态菜单 -->
        <el-submenu  v-for="item in $store.state.userinfor.menus" :key="item.id" :index='item.title'>
        <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
        </template>
        <!-- 子循环，循环次级菜单 -->
        <el-menu-item-group v-for="itemagain in item.children" :key="itemagain.id">
            <el-menu-item :index="itemagain.url">{{itemagain.title}}</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>    
        <el-footer>@bxc版权所有</el-footer>
    </el-container>
</template>

<script>
/* 引入axios */
// import axios from "axios"
export default {
    data () {
        return {
        menuarr:[],
        defaultActive:""
    };
    },

    components: {},

    computed: {},

    mounted(){
        console.log(this.$route.meta);//拿去fullPath
        // 通过元信息获得路径
        this.defaultActive = this.$route.meta.selected
        console.log(this.defaultActive);
        /* 挂载完成再次请求数据，并将数据添加到data中定义的menuarr 实现左侧动态菜单 */
        // axios.get("/api/menulist",{params:{istree:true}}).then((res)=>{
        //     console.log(res);
        //     this.menuarr = res.data.list
        //     console.log(this.menuarr);
        // })
    },

    methods: {
        outLogin(){
            this.$store
        }
    },
    watch:{
        $route(newValue,oldValue){
            console.log(newValue,oldValue);
            this.defaultActive = newValue.meta.selected
        }
    }
}

</script>
<style  scoped>

.box{
    width: 100vw;
    height: 100vh;
}
.el-header{
    line-height: 60px;
    background-color: skyblue;
    position: relative
}
.el-header h3{
    position: absolute;
    left: 20px;
}
.el-header span{
    position: absolute;
    right: 150px;
}
.pag{
    background-color: gray;
}
.el-footer{
    text-align: center;
    background-color: #B3C0D1;
    line-height: 60px;
    color: white;
}
.el-main{
    background-color: #fff;
}
.el-menu{
    border: none;
}
.exit{
    position: absolute;
    right: 20px;
    top: 10px;
}
</style>