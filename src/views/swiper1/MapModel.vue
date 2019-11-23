<template>
    <div>
        <div class="map-title"><i class="el-icon-back" @click="TableBackHandle"></i>地图模式</div>
        <div id="myChartChina" :style="{width: '500px', height: '10rem'}"></div>
<!--        <div v-for="item in mapData" :key="item.value">{{item.name}}</div>-->
        <div class="checking-city">选取城市:{{checkCity}}</div>
        <div class="other-message">
            <div>所属单位:XX队</div>
            <div>水尺度数:50m</div>
            <div>零点高程:97.65m</div>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'real-time-data',
        data: function() {
            return {
                nameColor: 'rgb(55, 75, 113)',
                name_fontFamily: '等线',
                name_fontSize: 50,
                mapName: 'heilongjiang',
                geoCoordMap: {
                    "齐齐哈尔":[123.97,47.33],

                },
                checkCity:"",
                mapData: [{
                    name: '哈尔滨',
                    value: 177
                },
                    {
                        name1: '伊春',
                        value: 42
                    },
                    {
                        name: '大庆',
                        value: 102
                    },
                    {
                        name: '鸡西',
                        value: 81
                    },
                    {
                        name: '鹤岗',
                        value: 47
                    },
                    {
                        name: '佳木斯',
                        value: 67
                    },
                    {
                        name: '齐齐哈尔',
                        value: 82
                    },
                    {
                        name: '双鸭山',
                        value: 66
                    },
                    {
                        name: '牡丹江',
                        value: 24
                    },
                    {
                        name: '大兴安岭',
                        value: 92
                    },
                    {
                        name: '绥化',
                        value: 114
                    },
                    {
                        name: '黑河',
                        value: 109
                    }
                ]
            }
        },
        mounted() {
            this.getGeoCoordMap()
            this.drawLine()

        },
        methods: {
            TableBackHandle(){
                this.$router.push({
                    name:'Table'
                })
            },
            getGeoCoordMap() {
                var that = this
                var mapFeatures = this.$echarts.getMap(this.mapName).geoJson.features
                mapFeatures.forEach(function(v) {
                    // 地区名称
                    var name = v.properties.name
                    // 地区经纬度
                    that.geoCoordMap[name] = v.properties.cp
                })
            },
            convertData(data) {
                var res = []
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = this.geoCoordMap[data[i].name]
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        })
                    }
                }
                return res
            },
            drawLine() {
                let that = this
                let myChartContainer = document.getElementById('myChartChina')
                let resizeMyChartContainer = function() {
                    myChartContainer.style.width = (document.body.offsetWidth ) + 'px'
                }
                resizeMyChartContainer()
                let myChartChina = that.$echarts.init(myChartContainer)

                // 绘制图表
                let optionMap = {
                    title: {
                        x: 'center',
                        textStyle: {
                            color: that.nameColor,
                            fontFamily: that.name_fontFamily,
                            fontSize: that.name_fontSize
                        },
                        subtextStyle: {
                            fontFamily: that.name_fontFamily
                        }
                    },
                    tooltip: {

                    },
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 200,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        seriesIndex: [1],
                        inRange: {
                            color: ['#00b7f1'] // 浅蓝
                        }
                    },
                    geo: {
                        show: true,
                        map: this.mapName,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#3B5077'
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        }
                    },
                    series: [{
                        name: '普通',
                        type: 'effectScatter',
                        coordinateSystem: 'bmap',
                        data: that.convertData(that.mapData),
                        symbolSize: function(val) {
                            return val[2] / 10
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                // color: '#00ff00'
                            }
                        }
                    },
                        {
                            type: 'map',
                            map: that.mapName,
                            geoIndex: 0,
                            aspectScale: 1, // 长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#3B5077'
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: that.mapData
                        },
                        {
                            name: '假货灾区',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: that.convertData(that.mapData.sort(function(a, b) {
                                return b.value - a.value
                            }).slice(0, 5)),
                            symbolSize: function(val) {
                                return val[2] / 10
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'red',
                                    // shadowBlur: 10,
                                    // shadowColor: 'red'
                                }
                            },
                            zlevel: 1
                        },
                        {
                            name: '假货预警',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: that.convertData(that.mapData.sort(function(a, b) {
                                return b.value - a.value
                            }).slice(5, 10)),
                            symbolSize: function(val) {
                                return val[2] / 20
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    shadowBlur: 10,
                                    shadowColor: 'yellow'
                                }
                            },
                            zlevel: 1
                        }
                    ]
                }

                myChartChina.setOption(optionMap)
                myChartChina.on("click",function (e) {
                   window.console.log(e)
                    that.checkCity = e.name;
                })
                window.onresize = function() {
                    resizeMyChartContainer()
                    myChartChina.resize()
                }
            }
        }
    }
</script>

<style scoped>
    .map-title{
        text-align: center;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #2b53d9;
        color: white;
        font-size: 0.33rem;
    }
    .map-title .el-icon-back{
        position: absolute;
        left: 0;
        line-height: 1rem;
    }
    .checking-city{
        font-size: 0.3rem;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
        padding-left: 0.3rem;
    }
    .other-message{
        font-size: 0.3rem;
    }
    .other-message div{
        padding: 0.1rem 0 0 0.3rem;
    }
</style>
