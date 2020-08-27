<template>
     <main>
         <p class="p1"><img src="../assets/image/login.png" alt="" @click="back()"></p>
         <div class="d1">
             <img src="../assets/image/logo.png" alt="" class="one_i">
         </div>
        <div>
            <div class="d2">
                <input type="text" name="account" placeholder="请输入手机号/用户名/邮箱" class="accountVerify formInput">
            </div>
            <div class="d3">
                <input type="password" name="password" placeholder="请输入密码" class="formInput">
                <span><img src="../assets/image/eye_close.png" alt="">  |  忘记密码</span>
            </div>
        </div>
        <button class="login">登录</button>
        <div class="d4">
            <span class="s1">短信登录</span>
            <router-link :to="{path:'register'}" class="s2">立即注册</router-link>
        </div>
        <p class="title">快捷登录</p>
        <div class="d5">
            <a href="https://passport.winxuan.com/auth/qq?returnUrl="><img src="../assets/image/login_logo.png" alt=""></a>
            <a href="https://passport.winxuan.com/auth/weibo?returnUrl="><img src="../assets/image/login_logo1.png" alt=""></a>
        </div>
     </main>
</template>


<script>
    export default{
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
    main{
        width: 100%;
    }
    .p1{
        width: 95%;
        margin-top: 3%;
        margin-left: 5%;
    }
    .d1{
        height: 200px;
    }
    .one_i{
        width: 70%;
        margin-top: 10%;
        margin-left: 15%;
        margin-right: 15%;
    }
    .d2{
        width: 100%;
        margin-bottom: 30px;
    }
    .d2 input{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        font-size: 20px;
        margin-bottom: 10px;
        line-height: 60px;
        border-bottom: 1px solid gray;
    }
    .d3 input{
        position: relative;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        font-size: 20px;
        line-height: 60px;
        border-bottom: 1px solid gray;
    }
    .d3 span{
        position: absolute;
        right: -146px;
        bottom: 348px;
        font-size:20px;
        color: gray;
    }
    .d3 span img{
        width: 10%;
        height: 40px;
    }
    .login{
        width: 90%;
        height: 40px;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 20px;
        border: none;
        color: gray;
        font-size:20px;
        border-radius: 10px;
    }
    .d4{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 20px;
        margin-bottom: 100px;
    }
    .d4 .s1{
        float: left;
        font-size: 16px;
    }
    .d4 .s2{
        float: right;
        font-size: 16px;
        color: gray;
    }
    .title{
        text-align: center;
        font-size: 16px;
        color: gray;
    }
    .d5{
        margin-top: 15px;
        text-align: center;
    }
    .d5 img{
        margin-right: 12px;
        margin-left: 12px;
    }
</style>