<template>
    <main>
        <p class="p1"><img src="../assets/image/login.png" alt="" @click="back()"></p>
        <h1>验证手机号</h1>
        <p class="p2">输入手机号，进行身份验证</p>
        <div>
            <div class="d11">
                <input type="text" name="account" placeholder="请输入手机号" class="accountVerify formInput">
            </div>
            <div class="d22">
                <input type="password" name="password" placeholder="请输入验证码" class="formInput">
                <span><i class="icon icon-bukejian showPassword"></i>获取验证码</span>
            </div>
        </div>
        <p class="p3">
            <span></span>
            我已阅读并同意<span>《文轩网交易条款》</span>
        </p>
        <button class="register">下一步</button>
        <p class="p4">已有账号？<span>登录</span></p>
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
    .p1{
        width: 95%;
        margin-top: 3%;
        margin-left: 5%;
    }
    h1{
        margin-top: 15%;
        margin-left: 5%;
        font-size: 30px;
    }
    .p2{
        margin-left: 5%;
        margin-bottom: 10%;
    }
    .d11 input{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        font-size: 20px;
        margin-bottom: 10px;
        line-height: 60px;
        border-bottom: 1px solid gray;
    }
    .d22 input{
        position: relative;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        font-size: 20px;
        margin-bottom: 10px;
        line-height: 60px;
        border-bottom: 1px solid gray;
    }
    .d22 span{
        position: absolute;
        right: 22px;
        bottom: 424px;
        font-size:20px;
        color: black;
    }
    .register{
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
    .p3{
        text-align: center;
        font-size: 16px;
        color: black;
    }
    .p3 span{
        float: right;
        margin-right: 5%;
        color: red;
    }
    .p4{
        float: right;
        margin-top: 5%;
        margin-right: 5%;
        font-size:18px;
    }
    .p4 span{
        color: red;
    }
</style>