<!--  -->
<template>
    <div>
        <h2>数据可视区</h2>
        <div id="container" style="width:500px;height:200px"></div>
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

    mounted(){
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('container'));
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },

    methods: {}
}

</script>
<style  scoped>
</style>