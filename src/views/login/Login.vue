<template>
    <div>
        <div class="login-container">
            <img class="back-img" src="./1.jpg" alt="">
            <div class="login-content">
                <div class="other-content">
                    <div class="sign-info">Sign in</div>
                    <img class="login-img" src="./2.jpg" alt="">
                </div>

                <input class="username" type="text" placeholder="Username" v-model="usernameMessage">
                <div>
                    <input class="password" type="password" placeholder="Password" v-model="passwordMessage">
                </div>
                <el-button class="login-btn" type="warning" :loading="loading" @click="loginHandle">登陆</el-button>
            </div>
        </div>

    </div>
</template>



<script>

    export default {

        data() {
            return {
                loading:false,
                usernameMessage:"",
                passwordMessage:""

            }
        },
        methods:{
            loginHandle(){
                this.loading =true;
                if (this.usernameMessage == 'abc'&&this.passwordMessage == '123'){
                    this.loading = false
                    this.$router.push({
                        name:"Home"
                    })
                }
                else{
                    this.loading = false
                    window.console.log("error")
                }
            }
        }



    }
</script>
<style scoped>
body{
    width: 100vw;
    height: 100%;
    background: gray;
}

.back-img{
    width: 100vw;
    height: 13rem;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);

}
.other-content{
    position: relative;
}
.login-img{
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 8%;
    top:  58%;
}
.login-content{
    width: 80vw;
    height: 10rem;
    margin: 1rem auto;
    background: #0b0c11;
    position: absolute;
    bottom: 10%;
    left: 10%;

}
.sign-info{
    font-family:  Tahoma,Helvetica,Arial,"\5b8b\4f53",sans-serif;
    font-size: 0.6rem;
    color: gray;
    padding-left: 0.5rem;
    padding-top: 1.5rem;
    margin-bottom: 0.8rem;
}
.username,.password,.login-btn{
    width: 4.95rem;
    height: 0.8rem;
    margin-left: 0.5rem;
}
.login-btn{
    width: 5rem;
}
</style>
