<template>
    <div>
        <div class="functionArea-title"><i class="el-icon-back" @click="FunctionAreaHandle"></i>功能区</div>
        <div class="function-container">
            <div>注册码:</div>
            <div>有效期:</div>
            <div>使用者:</div>
            <div>版本号:</div>
            <div>关于:</div>
            <div>默认区域:</div>
            <div>默认流域:</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            FunctionAreaHandle(){
                this.$router.push({
                    name:'Home'
                })
            }
        }
    }
</script>

<style scoped>
.function-container{
    padding: 0.2rem;
    font-size: 0.28rem;
    font-family: "Arial Normal", Arial;
    font-weight: 400;
    font-style: normal;
}
.functionArea-title{
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #2b53d9;
    color: white;
    font-size: 0.33rem;
}
.functionArea-title .el-icon-back{
    position: absolute;
    left: 0;
    line-height: 1rem;
}
</style>