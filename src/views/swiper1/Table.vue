<template>
    <div>
        <div class="form-title"><i class="el-icon-back" @click="TableBackHandle"></i>统计表模式</div>
        <div  @click="TableInfoHandle">
        <el-table
                class="table-message"
                :data="tableData"
                border
                height="230"
                style="width: 100%">
            <el-table-column
                    prop="chartName"
                    label="时/天"

                    >
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="当天">
            </el-table-column>
            <el-table-column
                    prop="time1"
                    label="近三天">
            </el-table-column>
            <el-table-column
                    prop="time2"
                    label="近七天">
            </el-table-column>

        </el-table>
        </div>
        <div class="collected-time">
            统计截至:2019 年 7 月 20 日 16 : 20 分
        </div>
        <div class="table-function">
            <div class="map-model" @click="MapHandle">地图模式</div>
            <div class="area-model" @click="AreaHandle">区域统计</div>
            <div class="water-model" @click="StatisticsHandle">流域统计</div>
        </div>
    </div>
</template>

<script>

    export default {
            data() {
                return {
                    tableData: [{
                        chartName: '超历史',
                        time: '1',
                        time1: '234',
                        time2: '3.2'
                    }, {
                        chartName: '超保证',
                        time: '2',
                        time1: '165',
                        time2: '4.43'
                    }, {
                        chartName: '超警戒',
                        time: '3',
                        time1: '324',
                        time2: '1.9'
                    }, {
                        chartName: '快涨',
                        time: '7',
                        time1: '1',
                        time2: '2'
                    }]
                };
            },
            methods: {
                TableBackHandle(){
                    this.$router.push({
                        name:'Home'
                    })
                },
                MapHandle(){
                  this.$router.push({
                      name:"MapModel"
                  })
                },
                AreaHandle(){
                    this.$router.push({
                      name:'Area'
                  })
                },
                StatisticsHandle(){
                    this.$router.push({
                        name:"Statistics"
                    })
                },
                TableInfoHandle(){
                    this.$router.push({
                        name:"TableInfo"
                    })
                }

            }

    }
</script>

<style scoped>
.table-message,.form-title{
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
    font-style: normal;
    font-size: 0.3rem;
    color: #000000;
}
.form-title{
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #2b53d9;
    color: white;
    font-size: 0.33rem;
}
.form-title .el-icon-back{
    position: absolute;
    left: 0;
    line-height: 1rem;
}
.collected-time{
    width: 100%;
    height: 0.8rem;
    font-size: 0.3rem;
    border: 1px solid #EBEEF5;
    border-top: none;
    padding:0.4rem 0 0.15rem 0.17rem;
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
    font-style: normal;
}
.table-function{
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: 0.3rem;

}
.table-function div{
    display: inline-block;
    padding: 0.6rem ;
    border-top: 1px solid #cbcecd;
    border-bottom: 1px solid #cbcecd;

}
.map-model,.area-model{
    border-right: 1px  solid  #cbcecd ;
}
.map-model,.area-model,.water-model{

}
</style>