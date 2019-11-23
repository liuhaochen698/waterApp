<template>
    <div class="Home-Container">
        <div class="inner-container">
        <div class="scroll1">
            <span @click="TableHandle">超历史最高测站1个；超保证水位测站1个；超警戒水位测站1个</span>
        </div>
        <div class="scroll2">
            <span>超历史：站名水位置</span>
        </div>
        <div class="scroll3">
            <span>故障站共1个</span>
        </div>
        </div>
        <div class="container">
            <div id="part1" @click="part1Handle">
               <div class="station">站名</div>
                <div class="station-value">{{HomeList[0].number}}</div>

                <div class="station-function">  <i class="el-icon-top"></i>警戒 {{HomeList[0].number2}}</div>
            </div>
            <div id="part2" @click="part1Handle">
                <div class="station">站名</div>
                <div class="station-value">{{HomeList[1].number}}</div>
                <div class="station-function"><i class="el-icon-right"></i>保证 {{HomeList[1].number2}}</div>
            </div>
            <div id="part3" @click="part1Handle">
                <div class="station">站名</div>
                <div class="station-value">{{HomeList[2].number}}</div>
                <div class="station-function"><i class="el-icon-bottom"></i>历史 {{HomeList[2].number2}}</div>
            </div>
            <div id="part4">
                <div class="more-station">更多测站</div>
            </div>
        </div>
        <div class="function-setting"  @click="moreStationHandle">功能设置区</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
    data(){
      return{
         HomeList:[
             {
                 number:0,
                 number2:0
             },
             {
                 number:0,
                 number2:0
             },
             {
                 number:0,
                 number2:0
             }

         ],
         numberList:""
      }
    },
    methods:{
        part1Handle(){
            this.$router.push({name:"Message"})
        },
        TableHandle(){
            this.$router.push({name:"Table"})
        },
        moreStationHandle(){
            this.$router.push({name:"FunctionArea"})
        },
        getData(){
            axios.get("https://api.myjson.com/bins/f1wqu").then((res)=>{
                window.console.log(res);
                this.HomeList = res.data.list;



            })
        }
    },
    created() {
        this.getData()
    },

    }
</script>

<style scoped>
.Home-Container{
    width: 100%;
    height: 100%;
    background: #cbcecd;
}

@keyframes myMove {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
.scroll1{
    width: 100%;
    height: 1.2rem;
    border-top: 1px solid #cbcecd;
    background: white;

}
.scroll2{
    width: 100%;
    height: 1.2rem;
    background: red;

}
.scroll3{
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid #cbcecd;
    background: white;

}
.scroll1 span,.scroll2 span,.scroll3 span{
    display: block;
    height: 1.2rem;
    line-height: 1.2rem;
    color: #333333;
    font-size: 0.27rem;
    font-family: 'Arial Normal', 'Arial';
    font-weight: bold;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    animation: myMove 8s linear infinite;
    animation-fill-mode: forwards;


}
.scroll2 span{
    color: white;

}

#part1 {
    width: 50vw;
    height: 50vw;
    border-right: 1px solid #cbcecd;
    border-top: 1px solid #cbcecd;
    position: absolute;




}
#part2 {
    width: 50vw;
    height: 50vw;
    position: absolute;
    border-top: 1px solid #cbcecd;
    left: 50%;




}
#part3{
    width: 50vw;
    height: 50vw;
    border-top: 1px solid #cbcecd;
    border-right: 1px solid #cbcecd;
    border-bottom: 1px solid #cbcecd;
    position: absolute;
    margin-top: 50vw;


}
#part4 {
    width: 50vw;
    height: 50vw;
    border-top: 1px solid #cbcecd;
    border-bottom: 1px solid #cbcecd;
    position: absolute;
    left: 50%;
    margin-top: 50vw;



}
.station{
    padding: 0.2rem;
    font-weight: normal;
    font-size: 0.3rem;
}
.station-value{
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.more-station{
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.station-function{
    position: absolute;
    bottom: 0%;
    margin: 0 0 0.2rem 0.2rem;
    font-size: 0.25rem;
    font-family:'Arial Normal', 'Arial' ;
    font-weight: normal;
}
.container{
    position: relative;
    font-size: 0.35rem;
    color: #333333;
    font-family: 'Arial Normal', 'Arial';
    font-weight: bold;
    font-style: normal;
    height: 100vw;
    background: white;
    margin: 0.2rem 0 0.2rem 0;

}
.function-setting{
    padding-left: 0.2rem;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.35rem;
    color: #333333;
    font-family: 'Arial Normal', 'Arial';
    font-weight: bold;
    font-style: normal;
    background: white;
}
.el-icon-top,.el-icon-right,.el-icon-bottom{
    font-size: 0.3rem;
    margin-right: 0.15rem;
    font-weight: bold;
}

</style>