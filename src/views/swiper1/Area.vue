<template>
    <div>
        <div class="area-title"><i class="el-icon-back" @click="AreaBackHandle"></i>区域统计</div>
            <div class="area-container">

                <el-table
                        :data="tableData"
                        style="width: 100%;padding-left: 0.6rem">
                    <el-table-column
                            prop="province"
                            label="全部"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="全部"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="全部">
                    </el-table-column>
                </el-table>
            </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    province: '黑龙江省',
                    city: '哈尔滨市',
                    address: '区（市县）'
                }, {
                    province: '黑龙江省',
                    city: '齐齐哈尔市',
                    address: '区（市县）'
                }, {
                    province: '黑龙江省',
                    city: '牡丹江市',
                    address: '区（市县）'
                }, {
                    province: '黑龙江省',
                    city: '佳木斯市',
                    address: '区（市县）'
                }]
            }
        },
        methods:{
            AreaBackHandle(){
                this.$router.push({
                    name:'Table'
                })
            }

        }
    }
</script>

<style scoped>
.area-container{
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
    font-weight: bold;
    font-style: normal;
    color: #000000;
}
.area-title{
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #2b53d9;
    color: white;
    font-size: 0.33rem;
}
.area-title .el-icon-back{
    position: absolute;
    left: 0;
    line-height: 1rem;
}
</style>