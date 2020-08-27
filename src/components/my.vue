<template>
    <main>
        <mt-header title="我的文轩" class="mtheader">
            <router-link to="/" slot="left">
                <mt-button icon="back" class="bc"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="my">
            <img src="../assets/image/myphoto.png" alt="">
        </div>
        <div class="d5">
            <div class="myy">
                <div class="my1">
                    <p>0.00</p>
                    <span>暂存款</span>
                    </div>
                <div class="my2">
                    <p>0</p>
                    <span>购书卡</span>
                </div>
                <div class="my3">
                    <p>0</p>
                    <span>礼券</span>
                </div>
            </div>
            <div class="d4">
                <p class="p1"><i>我的订单</i><span>查看全部订单</span></p>
                <ul class="d2">
                    <li v-for="(item,index) in list5">
                        <img :src="item.src" alt="">
                        <p>{{item.con}}</p>
                    </li>
                </ul>
            </div>
            <div class="d3">
                <ul>
                    <li v-for="(item,index) in list4">
                        <img :src="item.src" alt="">
                        <router-link :to="{path:'help'}" class="a1">{{item.con}}</router-link>
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="d6">
            <ul class="lfooter">
                <li v-for="(item,index) in listf">
                    <!-- router-link最终渲染成了a 。但是不能直接书写成a -->
                    <router-link :to="item.path">
                        <img :src="item.src" alt="" class="src">
                        <img :src="item.pic" alt="" class="pic">
                        <p>{{item.con}}</p> 
                    </router-link>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import { Header } from 'mint-ui';
    export default {
        data(){
            return{
                list4:[
                    {
                        src:'./src/assets/image/tubiao_shezhi.png',
                        con:'账号设置',
                        
                    },
                    {
                        src:'./src/assets/image/tubiao_diliweizhi.png',
                        con:'收货地址',
                        
                    },{
                        src:'./src/assets/image/tubiao_lianxikefu.png',
                        con:'联系客服',
                        
                    },
                    {
                        src:'./src/assets/image/tubiao_bangzhuzhongxin.png',
                        con:'帮助中心',
                        
                    }
                ],
                list5:[
                    {
                        src:'./src/assets/image/daizhifu.png',
                        con:'待付款 ',
                        
                    },
                    {
                        src:'./src/assets/image/daizhifu.png',
                        con:'待收货',
                        
                    },{
                        src:'./src/assets/image/shouhou.png',
                        con:'售后/退款',
                        
                    }
                ],
                listf:[
                    {
                        path:'/index',
                        src:'./src/assets/image/home.png',
                        pic:'./src/assets/image/u16.png',
                        con:'首页'

                    },
                    {
                        path:'/ranking',
                        src:'./src/assets/image/danyehuaban.png',
                        pic:'./src/assets/image/u15.png',
                        con:'排行榜'
                    },
                    {
                        path:'/buy',
                        src:'./src/assets/image/cart-Empty.png',
                        pic:'./src/assets/image/u12.png',
                        con:'购物车'
                    },
                    {
                        path:'/my',
                        src:'./src/assets/image/bussiness-man.png',
                        pic:'./src/assets/image/u11.png',
                        con:'我的文轩'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
body{
width:100%;
overflow-x:hidden;
}
    .mtheader{
        background-color: white;
        font-size:16px;
        height: 55px;
        color: black;
    }
    .bc{
        color: red;
    }
    .my{
        height: 124px;
        background: linear-gradient(to right, red 0%,pink 100%);
    }
    .my img{
        width: 414px;
        height: 124px;
    }
    .myy{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 2%;
        text-align: center;
        height: 84px;
        background-color: #ffffff;
        position: fixed;
        top: 150px;
    }
    .myy div{
        float: left;
    }
    .myy p{
        font: 20px bold;
        margin-top: 10%;
        margin-bottom: 5%;
    }
    .my2 p{
        border-left: 1px solid red;
        border-right: 1px solid red;
    }
    .myy span{
        color: gray;
    }
    .my1{
        width: 33.3%;
    }
    .my2{
        width: 33.3%;
    }
    .my3{
        width: 33.3%;
    }
    .a1{
        font-size: 21px;
        margin-left: 5px;
        color: gray;
        display: inline-block;
        margin-top: 4%;
    }
    .d4{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 2%;
        height: 140px;
        background-color: #ffffff;
        position: fixed;
        top: 240px;
    }
    .d4 i{
        font-style: normal;
    }
    .d4 p{
        font-size: 16px;
        margin-top: 5%;
        margin-bottom: 10%;
        width: 90%;
    }
    .p1{
        margin-left: 5%;
        float: left;
    }
    .p1 span{
        margin-right: 5%;
        color: gray;
        float: right;
    }
    .d2 li{
        width: 23%;
        float: left;
        margin-left: 5%;
        margin-right: 5%;
        text-align: center;
    }
    .d2 img{
        width: 30%;
        height: 10%;
    }
    .d3{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 5%;
        background-color: #ffffff;
        position: fixed;
        top: 388px;
    }
    .d3 ul{
        margin-bottom: 5%;
    }
    .d3 ul li{
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
        border-bottom: 1px solid gray;
    }
    .d3 img{
        width: 8%;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 5%;
        margin-top: 5%;
        float: left;
    }
    .d3 p{
        float: left;
        margin-top: 5%;
        font-size: 18px;
    }
    .d3 span{
        float: right;
    }
    .d5{
        background-color: #eeeeee;
        height: 500px;
    }
    .footer{
        width: 100%;
        height: 20vh;
        background-color: #f6f6f6;
    }
    .footer p{
        font-size:12px;
        text-align: center;
        color:#999999;
        margin-bottom: 16px;
    }
    .footer .f2{
        color: #1a66b3;
    }
    .footer .f3{
        font-size:12px;
    }
    .lfooter{
        text-align: center;
        width: 100%;
        height: 10vh;
        line-height: 30px;
        text-align: center;
        position: fixed;
        bottom: 0vh;
        left: 0vh;
        margin-top: 10px;
        border-top: 1px solid gray;
        background-color:white;
    }
    .lfooter p{
        color: gray;
    }
    .lfooter li{
        margin-left: 5%;
        margin-right: 5%;
    }
    .lfooter img{
        width: 28px;
        height: 28px;
    }
    .pic{
        display: none;
    }
    .src{
        display: inline-block;
    }
    .router-link-active .pic{
        display: inline-block;
    }
    .router-link-active .src{
        display: none;
    }
</style>
