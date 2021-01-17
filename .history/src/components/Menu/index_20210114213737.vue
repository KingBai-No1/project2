<!--  -->
<template>
    <div>
        <h2>菜单管理页面</h2>
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
        })
    },

    methods: {}
}

</script>
<style  scoped>
</style>