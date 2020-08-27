<template>
	<main>
	   <div class="header_one">
	   <div class="headerq"><img src="../assets/image/xiao3.png" alt="" @click="back()"></div>
	   <div class="headera"> <h4>基本信息</h4><h4>商品详情</h4><h4>用户评价</h4></div>
	     <p>	     
	     <img src="../assets/image/xiao1.png" alt="">	
	     </p>	     	
 </div>	 
 <div class="big">
   <img src="../assets/image/s5.jpg" alt="">
   </div>
 <div class="nav">
      <h5>雪国之劫</h5>
      <p>日本上市首月卖光一百万册，创造东野作品销售速度记录！“为了阻止犯人，我必须成为更狡猾的罪犯。”【随书附赠可动滑雪书签一款】</p>
      <div>
      <h3>￥28.4</h3>
      <i>￥45.0</i>
      <span>6.32折</span>

      </div>

      <p class="navp"><i>作者：(日)</i>
      <span>东野圭吾</span></p>
      <p><i>出版社：</i>
      <span>北京联合出版社</span></p>

 </div>

<img src="../assets/image/lao.jpg" alt="" class="lao">

	<div class="center">
       <img src="../assets/image/buy1.png" alt="" class="buy1">
       <h6>文轩现货</h6>
       <p>70%城市次日达，电子发票</p>

	</div>
<div class="footer">
	<p>购书卡  政企书目服务专线：028-83157118（10:00-17:00）</p>
	<div class="xianshi">
	<span>限时抢购</span>	
    </div>

  <div class="huikui">
    <li class="ter">❤文轩图书惠</li>
    <li class="foo">❤老客户回馈，积分换礼券，购书更实惠?大陆非新疆西藏地区包邮，新疆西藏运费每单20元</li>
   </div>  
</div>

	<div class="shuliang">
	<i>数量：</i>
	<div><span>-</span></div>
	<b>1</b>
    <div><span>+</span></div>

	</div>

<div class="pingjia">
	<h2>商品评价</h2>
	<div>查看评价<span>></span></div>

</div>
<div class="xiangqing">
	<h2>商品详情</h2>
	<div>查看评价<span>></span></div>

</div>
<div class="shuoming">
	<h2>价格说明</h2>
	<p>划线价：</p>
	<p>商品展示的划横线价格为出版社全国统一定价：</p>
	<p>折扣：</p>
	<p>页面显示的折扣数（如6.0折），是以定价为基础的价格折扣：</p>
	<p>受系统缓存影响，商品的最终售价以订单结算页价格为准</p>

</div>
<div class="shengming">
	<h2>关于新广告法声明</h2>
	<p>新广告法规定所有页面信息中不得出现绝对化用词和功能性用词。</p>
	<p>本店非常支持新广告法，但为了不影响消费者正常购买，页面明显趋于本店已经在排查修改，对于不明显区域本店已经在排查修改，我们在此郑重声明：</p>
	<p>本店所有页面上的绝对化用词与功能性用词在此声明全部失效，不作为赔付理由。涉及教育部声明中的商品，均不代表教育部指定、推荐的具体版本，仅代表该商品的内容为指定、推荐书目</p>
	<p>因极限因极限用词引起的任何形式的商品赔付，本店不接受且不妥协。希望消费者理解并欢迎联系客服帮助完善，也请职业打假人士高抬贵手。</p>
	

</div>

<div class="jio">
	<ul>
	   <li> <img src="../assets/image/shouye.png" alt=""><br>首页</li>
	   <li>&nbsp&nbsp❤<br>收藏</li>
	   <li> <img src="../assets/image/gouwuche.png" alt=""><br>购物车</li>
	</ul>
	
	<div>立即购买</div>
    <div>加入购物车</div>

</div>

	   <router-view></router-view>
	</main>
</template>

<script>
     export default{
            methods: {
                    back(){
                this.$router.go(-1)
                }
            },
            mounted(){
                document.documentElement.scrollTop = document.body.scrollTop = '0px';
            }
    }
</script>

<style scoped>
.header_one{
	height:7vh;
	background-color:#fbfbfb;
}		
.headerq{
	float:left;
}
.headera{
	float:left;
	text-align:center;
}
p>img{
	float:right;
}
.headera h4{
	float:left;
	line-height:7vh;
	font-size:14px;
	margin-right:12px;

}

.big img{
	height:35vh;
	margin-left:74px;
	margin-top:10px;
	margin-bottom:10px;

}

.headera h4:nth-of-type(1){
	color:red;
	background-color:#ffffff;
	border-bottom:2px red solid;
}


.nav{
    
	background:#fbfbfb;
}
.nav h3{
	float:left;
	color:red;
	font-size:18px;
	font-weight:bold;
	padding-left:20px;
}
.nav h5{
	font-size:14px;
	line-height:28px;
	padding-left:20px;
}
.nav>p{
	color:red;
	padding-left:15px;
	padding-right:15px;
	margin-bottom:10px;
}
.nav>div>i{
	text-decoration:line-through;
	margin-left:30px;
}
.nav>div>span{
	margin-left:30px;
	color:#ffffff;
	background-color:red;
	border-radius:5px;
	line-height:20px;
}
.navp{
	margin-top:20px;
}
.nav>p>span{
	color:blue;
}
.lao{
	width:100%;
}
.center{
	padding-left:10px;
	padding-top:10px;
	border-bottom:4px #eeeeee solid;
	background-color:#fbfbfb;
}
.buy1{
	width:20px;
	float:left;
	margin-right:10px;
}
.center>h6{
	float:left;
	font-weight:bold;
	font-size:16px;
	color:#000000;
	margin-right:10px;
}
.center>p{
	font-size:14px;
	line-height:20px;
}
.footer{
	padding-top:10px;
	background-color:#fbfbfb;
	height:15vh;
	border-bottom:4px #eeeeee solid;

}
.footer>p{
	color:red;
	padding-left:15px;
	padding-right:15px;
	margin-bottom:10px;
}
.xianshi{
	float:left;

}
.footer span{
	color:red;
	width:30px;
	height:35px;
	border:1px red solid;
	font-size: 8px;
	float:left;
	margin-left:10px;
}
.huikui{
	float:right;
	width:85%;
}
.foo{
	color:blue;
	float:left;
	margin-top:10px;
	
}
.ter{
	float:left;
}
.shuliang{
    height:5vh;
	border-bottom:4px #eeeeee solid;
	padding-top:5px;
	padding-left:10px;

}
.shuliang span{
	
	font-size:25px;
}


.shuliang i{
float:left;
margin-top:10px;
}
	


.shuliang b{
	font-size:15px;
	float:left;
	margin-left:10px;
	margin-right:10px;
	margin-top:5px;
}
.shuliang>div{
	background-color:#eeeeee;
	width:25px;
	height:25px;
	float:left;
	text-align:center;
}
.pingjia,.xiangqing{
	border-bottom:4px #eeeeee solid;
	height:6vh;
	padding-left:10px;
	padding-top:10px;
}
.pingjia h2,.xiangqing h2{
	font-weight:bold;
	float:left;
	font-size:16px;
}
.pingjia div,.xiangqing div{
	float:right;
}
.pingjia div span,.xiangqing div span{
	color:red;
	font-size:20px;
}
.shuoming{
	border-bottom:4px #eeeeee solid;
	padding-left:10px;
	padding-top:10px;
	padding-right:10px;
}
.shuoming h2{
	font-weight:bold;
	font-size:16px;
}
.shuoming p{
	font-size:14px;
}
.shuoming p:nth-of-type(2n-1){
	margin-top:10px;
}
.shengming{
	border-bottom:4px #eeeeee solid;
	padding-left:10px;
	padding-top:10px;
	padding-right:10px;
    height: 50vh;
}
.shengming h2{
	font-weight:bold;
	font-size:16px;
}
.shengming p{
	font-size:14px;
	margin-top:10px;
	text-indent:2em;
}
.shengming p:nth-of-type(3){
	color:red;
}
.jio div:nth-of-type(2){
	color:#ffffff;
	background-color:#000000;
	float:right;
	width:25%;
	height:7vh;
	font-size:16px;
	line-height:7vh;
	position:fixed;
    bottom:0vh;
    right:25%;
    text-align: center;
}

.jio div:nth-of-type(1){
	color:#ffffff;
	background-color:red;
	float:right;
	width:25%;
	height:7vh;
	font-size:16px;
	line-height:7vh;
	text-align:center;
	 position:fixed;
    bottom:0vh;
    right:0px;
}
.jio{
	height:6vh;
    position:fixed;
    bottom:1vh;
    background-color:#ffffff;
    width:60%;
}
.jio li{
	width:20%;
	height:7vh;
	float:left;
}
.jio li img{
	width:20px;
}
.jio li:nth-of-type(2){
	font-size:14px;

}
</style>
