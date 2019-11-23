<template>
    <div>
        <div class="Statistics-title"><i class="el-icon-back" @click="StatisticsBackHandle"></i>
            <el-input
                    placeholder="查找测站"
                    v-model="input"
                    clearable
                    style="width: 5rem ;margin-left: 1rem;"  >
            </el-input>
            <el-button type="primary" style="background: #2b53d9 ; border: 0">搜索</el-button></div>

        <div class="map-model">地图模式：行政边界·河流·市·县·</div>
        <div class="water-station">站点:</div>
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            data : ['不超限', '超警', '超保', '超历史', '快涨', '快落'],
                            "axisLabel":{interval:0},
                            "axisTick":{       //y轴刻度线
                                "show":false
                            },

                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            "splitLine":{ show:false},
                            "axisTick":{       //y轴刻度线
                                "show":false
                            },
                            "axisLabel" : {
                                formatter: function(){
                                    return "";
                                }
                            },

                        }
                    ],
                    series: [{
                        name: '水位高度',
                        type: 'bar',
                        data: [800, 900, 1000, 1100, 1000, 900],
                        //设置柱子的宽度
                        barWidth : 20,
                        barGap:50,
                        //配置样式
                        itemStyle: {
                            //通常情况下：
                            normal:{
                                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                color: function (params){
                                    let colorList = ['#008000','#FFFF00','#FF0000','#990000',"#0033FF","#00CCFF"];
                                    return colorList[params.dataIndex];
                                }
                            },
                            //鼠标悬停时：
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }],
                });


            },
            StatisticsBackHandle(){
                this.$router.push({
                    name:"Table"
                })
            }

        }

    }
</script>

<style scoped>
.map-model,.water-station{
    font-size: 0.3rem;
}
.map-model{
    margin: 0.5rem 0 0.3rem 0.2rem;
}
.water-station{
    margin-left: 0.2rem;
}
#myChart{
    margin: 1rem 0 0 0.2rem;

}
.Statistics-title{
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #2b53d9;
    color: white;
    font-size: 0.33rem;
}
.Statistics-title .el-icon-back{
    position: absolute;
    left: 0;
    line-height: 1rem;
}
</style>