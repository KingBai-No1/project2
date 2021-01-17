<!--  -->
<template>
<!-- 外部容器 -->
    <el-container class="box">
        <el-header>head</el-header>
        <el-container class="pag">
            <el-aside style="width:199px">
                <!-- 1、默认选中第几个 -->
                <!-- 2 -->
                <el-menu
                default-active=""
                class="el-menu-vertical-demo"  
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                >
        <el-submenu  index='1'>
        <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统设置</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/student">学生管理</el-menu-item>
            <el-menu-item index="/course">课程管理</el-menu-item>
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

.box{
    width: 100vw;
    height: 100vh;
}
.el-header{
    background-color: skyblue;
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
</style>