<template >
    <main>
       <div class="box">
           <div class="db">
               <p class="header">
                    <img src="../assets/image/header.png" alt="" class="h1">
                </p>
                <p class="nav">
                    <input type="text" class="it">
                    <img src="../assets/image/search.png" alt="">
                    <router-link :to="{path:'login'}" class="a1">登录</router-link>
                </p>
                <div class="lp">
                    <mt-swipe :auto="3000">
                        <mt-swipe-item>
                            <img src="../assets/image/lp.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../assets/image/lp1.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../assets/image/lp2.jpg" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
           </div>
           <div class="d0">
               <ul class="u1">
                    <li v-for="(item,index) in list">
                        <img :src="item.src" alt="" class="it1">
                    </li>
                </ul>
                <div class="d1">
                    <img src="../assets/image/下载.png" alt="" class="i1">
                    <p class="p1">
                    <b class="b1">七月领劵区</b>先领卷，再下单享优惠
                    <i><img src="../assets/image/wxhot-right-icon.png" alt="" class="im"></i>
                    </p>
                </div>
           </div>
           <div class="d2">
               <h1>
                   <span>文轩秒杀 ></span>
                   <p id="time"></p>
                </h1>
               <mt-swipe :auto="3000">
                    <mt-swipe-item>
                        <img src="../assets/image/lp3.jpg" alt="">
                        <img src="../assets/image/lp4.jpg" alt="">
                        <img src="../assets/image/lp5.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/image/lp6.jpg" alt="">
                        <img src="../assets/image/lp7.jpg" alt="">
                        <img src="../assets/image/lp8.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
           </div>
           <div class="d3">
               <img src="../assets/image/s4.png" alt="" class="mi">
            </div>
           <div class="three">
               <ul class="one">
                   <li v-for="(item,index) in list1" class="l1">
                    <div class="left">
                        <router-link :to="{path:'details'}">
                            <img :src="item.src" alt="">
                        </router-link>
                    </div>
                    <div class="right">
                        <h1>{{item.title}}</h1>
                        <p>{{item.writer}}</p>
                        <span class="s">{{item.price}}</span>
                        <span class="ss">{{item.price1}}</span>
                    </div>
                   </li>
               </ul>
               <p class="two">查看更多<span class="two_one"><img src="../assets/image/jt.png" alt=""></span></p>
           </div>
           <section>
               <div>
                   <ul class="u2">
                        <li v-for="(item,index) in list2" @click="change(item,index)" :class="{current:num==index}">
                            <h1 :class="{current:num==index}">{{item.con}}</h1>
                            <p :class="{current1:num==index}">{{item.xcon}}</p>
                        </li>
                    </ul>
               </div>
           </section>
           <main>
               <div id="din">
                    <ul>
                        <li v-for="(item,index) in list3">
                            <img :src="item.src" alt="">
                            <p class="p111">{{item.title}}</p>
                            <p class="p112">
                                <span class="s111">{{item.price}}</span>
                                <span class="s112">{{item.price1}}</span>
                            </p>
                        </li>
                    </ul>
               </div>
           </main>
           <div class="footer">
               <p class="f1">文轩网，您的网上新华书店</p>
               <p class="f2">关于文轩</p>
               <p class="f3">@ m.winxuan.com</p>
           </div>
       </div>
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
    </main>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return {
                num:0,
                list:[
                    {
                        src:'./src/assets/image/i1.png'
                    },
                    {
                        src:'./src/assets/image/i2.png'
                    },
                    {
                        src:'./src/assets/image/i3.png'
                    },
                    {
                        src:'./src/assets/image/i4.png'
                    },
                    {
                        src:'./src/assets/image/i5.png'
                    },
                    {
                        src:'./src/assets/image/i6.png'
                    },
                    {
                        src:'./src/assets/image/i7.png'
                    },
                    {
                        src:'./src/assets/image/i8.png'
                    }
                ],
                list1:[
                    {
                        src:'./src/assets/image/s5.jpg',
                        title:'雪国之劫',
                        writer:'(日)东野圭吾',
                        price:'￥28.4',
                        price1:'￥45.00'
                    },
                    {
                        src:'./src/assets/image/s6.jpg',
                        title:'还是钟南山',
                        writer:'魏东海',
                        price:'￥43.2',
                        price1:'￥48.00'
                    },
                    {
                        src:'./src/assets/image/s7.jpg',
                        title:'你当像鸟飞往你当山',
                        writer:'(美)塔拉·韦斯特弗(Tara Westover)',
                        price:'￥34.2',
                        price1:'￥59.00'
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
                ],
                list2:[
                    {
                        con:'社科',
                        xcon:'社会科学',
                        id:"sk"
                    },
                    {
                        con:'文教',
                        xcon:'文化教育',
                        id:"wj"
                    },
                    {
                        con:'文学',
                        xcon:'文学精选',
                        id:"wx"
                    },
                    {
                        con:'科技',
                        xcon:'科技求真',
                        id:"kj"
                    },
                    {
                        con:'童书',
                        xcon:'童书焕新',
                        id:"ts"
                    },
                    {
                        con:'大中专教材',
                        xcon:'大中专教材',
                        id:"dz"
                    },
                    {
                        con:'艺术',
                        xcon:'艺术追求',
                        id:"ys"
                    }
                ],
                list3:[
                    {
                        src:'./src/assets/image/s8.png',
                        title:'半小时漫画中国史(4)',
                        price:'￥28.40',
                        price1:'￥49.90'
                    },
                    {
                        src:'./src/assets/image/s9.jpg',
                        title:'高效能人士的七个习惯(钻石版):建构全新的维方式和原则',
                        price:'￥37.50',
                        price1:'￥49.90'
                    },
                    {
                        src:'./src/assets/image/s10.jpg',
                        title:'半小时漫画中国史',
                        price:'￥21.60',
                        price1:'￥39.90'
                    },
                    {
                        src:'./src/assets/image/s11.jpg',
                        title:'半小时漫画中国史(3)',
                        price:'￥21.60',
                        price1:'￥39.90'
                    },
                    {
                        src:'./src/assets/image/s12.jpg',
                        title:'半小时漫画中国史2(2)',
                        price:'￥21.60',
                        price1:'￥39.90'
                    },
                    {
                        src:'./src/assets/image/s13.png',
                        title:'乌合之众',
                        price:'￥9.90',
                        price1:'￥35.00'
                    },
                    {
                        src:'./src/assets/image/s14.jpg',
                        title:'增长黑客',
                        price:'￥42.50',
                        price1:'￥59.00'
                    },
                    {
                        src:'./src/assets/image/s15.jpg',
                        title:'论语译注(简体字本)',
                        price:'￥18.70',
                        price1:'￥26.00'
                    },
                    {
                        src:'./src/assets/image/s16.jpg',
                        title:'非暴力沟通 ',
                        price:'￥34.80',
                        price1:'￥49.00'
                    },
                    {
                        src:'./src/assets/image/s17.jpg',
                        title:'亲密关系 通往灵魂的桥梁 ',
                        price:'￥25.70',
                        price1:'￥45.00'
                    },
                    {
                        src:'./src/assets/image/s19.jpg',
                        title:'习近平新时代中国特色社会主义思想学习纲要(小字本) ',
                        price:'￥15.00',
                        price1:'￥15.00'
                    },
                    {
                        src:'./src/assets/image/s20.jpg',
                        title:'半小时漫画世界史 ',
                        price:'￥21.60',
                        price1:'￥39.90'
                    },
                    {
                        src:'./src/assets/image/s21.png',
                        title:'墨菲定律 每天学点心理学 ',
                        price:'￥9.90',
                        price1:'￥39.80'
                    },
                    {
                        src:'./src/assets/image/s22.jpg',
                        title:'半小时漫画经济学 生活常识篇 ',
                        price:'￥27.90',
                        price1:'￥49.90'
                    },
                    {
                        src:'./src/assets/image/s23.jpg',
                        title:'天才在左,疯子在右（完整版） ',
                        price:'￥31.40',
                        price1:'￥49.80'
                    },
                    {
                        src:'./src/assets/image/s24.jpg',
                        title:'逆商/我们该如何应对坏事件 ',
                        price:'￥56.10',
                        price1:'￥79.00'
                    }
                ]
            }
        },
        methods:{
        
        change(a,b){
            this.num=b;
            this.msg=a.id;
        }
    },
        mounted(){
                var time1=document.getElementById('time');
                setInterval(function(){
                    var now=new Date();
                    var old=new Date('2020,10,1');
                    var t=old.getTime()-now.getTime();
                    // 计算天数
                    
                    // 计算天数剩余ms数
                    var l=t%(24*3600*1000) 
                        // 剩余小时数
                    var h=parseInt(l/(3600*1000))

                    // 计算小时剩余ms
                    var l2=l%(3600*1000)  
                    // 剩余分钟数     
                    var m=parseInt(l2/(60*1000))

                    //计算分钟数后剩余的毫秒数
                    var l3=l2%(60*1000)  
                    // 剩余秒数    
                    var s=parseInt(l3/1000)
                    time1.innerHTML=`距离本场结束${h}：${m}：${s}`
                },0)
        },
    }
</script>


<style scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    .current{
        color: red;
    }
    .current1{
        width: 65px;
        height: 25px;
        line-height: 25px;
        border-radius: 10px;
        background-color:red;
        color: white;
    }
    .db{
         background: linear-gradient(to bottom, red 0%,pink 100%);
    }
    .header{
        text-align: center;
    }
    .h1{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 50%;
    }
    .nav{
        margin-top: -1px;
    }
    .nav img{
        width: 23px;
        height: 21px;
        position: absolute;
        top: 76px;
        left: 27px;
    }
    .a1{
        font-size: 21px;
        margin-left: 17px;
        color: white;
    }
    .it{
        width: 75%;
        height: 40px;
        margin-left:20px;
        border-radius: 15px;
        margin-bottom: 15px;
    }
    .lp{
        margin-bottom: -20px;
    }
    .d0{
        background-color:#eaeaea;
    }
    .d1{
        height: 80px;
        background-color: #fff;
    }
    .i1{
        float: left;
        width: 30%;
        margin: 2% auto;
        line-height: 20px;
        margin-right: 20px;
    }
    .p1{
        line-height: 70px;
        margin-top: 5%;
        font-size:12px;
    }
    .b1{
        color: red;
        border:1px solid red;
        font-size:18px;
    }
    .im{
        width: 10%;
        margin-top: 24px;
        height: 24px;
        float:right;
    }
    .mi{
        width: 100%;
        background-color: gray;
    }
    .d2{
        float: left;
        width: 100%;
        background-color: #f6f6f6;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .d2 h1{
        margin-top: 15px;
        margin-bottom: 15px;
        margin-right: 5%;
    }
    .d2 p{
        display: inline;
        float: right;
        color: gray;
    }
    .d2 span{
        margin-left: 16px;
        font-size: 16px;
    }
    .d3{
        height: 264px;
        background-color:#eaeaea;
    }
    .u1{
        width: 100%;
        background-color: #eaeaea;
        margin-top: 18px;
        margin-bottom: 30px;
    }
    .u1 li{
        width: 20%;
    }
    .u1 li img{
        background-color: #eaeaea;
    }
    .it1{
        width: 100%;
    }
    .l1{
        width: 100%;
        height: 140px;
        margin-top: 8px;
        float: left;
        border-bottom:1px solid #eaeaea;
    }
    .left{
        float: left;
        margin-right: -60px;
    }
    .right{
        font-size:16px;
        margin-top: 24px;
        float: left;
        color:black;
    }
    .right h1{
        font-size:18px;
        margin-bottom: 10px;
    }
    .right p{
        font-size:12px;
        margin-bottom: 30px;
        color:#999999;
    }
    .right .s{
        color: red;
    }
    .right .ss{
        color:#999999;
        text-decoration: line-through;
    }
    .three{
        height: 484px;
    }
    .one{
        height: 416px;
    }
    .one img{
        width: 50%;
        margin-top: 25px;
    }
    .two{
        margin-top: 10px;
        line-height: 40px;
        font-size:16px;
        text-align: center;
        color:#999999;
    }
    section{
        width: 100%;
        height: 76px;
        background-color: #eeeeee;
        overflow: auto;
    }
    .u2{
        width: 177vw;
        margin-top: 12px;
        overflow: auto;
    }
    .u2 li{
        font-size: 16px;
        margin-left: 4%;
        margin-right: 2%;
        height: 60px;
        text-align: center;
    }
    .u2 h1{
        font-size:20px;
        font-weight: bold;
    }
    .u2 p{
        font-size: 12px;
    }
    #din ul{
        width: 100%;
        background-color: #eeeeee;
        list-style-type: none;
        margin: 0px;
    }
    #din li{
        width: 41%;
        height: 265px;
        margin-left: 6%;
        background-color: white;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    #din li:nth-of-type(2n){
        margin-right: 6%;
    }
    #din img{
        margin-top: 15px;
        margin-bottom: 10px;
    }
    #din p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 行数 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        /* text-align: center; */
        font-size: 16px ;
        height: 40px;
        margin-left: 8px;
    }
    .p112{
        margin-top: 10px;
    }
    .s111{
        font-size:18px;
        color: red;
    }
    .s112{
        color:#999999;
        text-decoration: line-through;
    }
    .footer{
        width: 100%;
        height: 24vh;
        background-color: #eeeeee;
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

<style>
    .lp img{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        border-radius: 15px;
    }
    .lp .mint-swipe-items-wrap{
        margin-bottom: 10px;
        margin-top: 10px;
        padding-bottom: 47.5%;
    }
    .d2 img{
        margin-left: 5%;
        margin-right: 5%;
        width: 20%;
    }
    .d2 .mint-swipe-items-wrap{
        padding-bottom: 25%;
    }
</style>



