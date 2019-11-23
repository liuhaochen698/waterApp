<template>
    <div>

        <div class="message-container">
            <div class="message-title"><i class="el-icon-back" @click="MessageBack"></i>单位水位信息</div>
            <div class="other-message">
                <div>站名:123</div>
                <div>识别水位:11</div>
                <div>水尺编号:1111</div>
                <div>零点高程:111</div>
                <div>水位状态:警戒-1.25m</div>
            </div>

            <div class="picker-message">
                <div>采集日期:2018-09-05</div>
                <div>采集时间:2018-09-05</div>
            </div>
            <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
        </div>

    </div>
</template>
<script>
    export default {
       data(){
          return{

          }

       },
        mounted(){
            this.drawLine();
        },
        methods: {
            backHandle(){
              this.$router.push({
                  name:"Home"
              })
            },
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
                            type : 'category',
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','8aaa','9aaa','10aaa','11ddd','1dd2','1dd3'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                });


            },
            MessageBack(){
                this.$router.push({
                    name:"Home"
                })
            }

        }

    }
</script>
<style scoped>
    .message-title{
        text-align: center;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #2b53d9;
        color: white;
        font-size: 0.33rem;
    }
    .message-title .el-icon-back{
        position: absolute;
        left: 0;
        line-height: 1rem;
    }

    .message-container{
        width: 100%;
        height: 3rem;
        font-size: 0.26rem;
        position: relative;
        font-weight: 400;
        font-style: normal;
    }
    .other-message{
        margin: 0.3rem;
    }
    .picker-message{
      position: absolute;
      left: 60%;
      top: 43%;

    }
    #myChart{
        margin-top: 0.8rem;
        margin-left: 1rem;
    }


</style>