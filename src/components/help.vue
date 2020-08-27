<template>
	<main>
	   <div class="header_one">
	   <div><img src="../assets/image/xiao3.png" alt="" @click="back()"></div>
	     <h3>帮助中心</h3>
	     <p>
	     
	     <img src="../assets/image/xiao1.png" alt="">	
	     </p>
	     	
	   </div>
  <div class="helpme">

    <img src="../assets/image/helpone.png" alt="">
    <p>若您在文轩网购物过程中有任何不满或疑问，请联系我们的客服，我们将竭诚为您服务！</p>

  </div>

  <ul class="helptwo">
     <li><img src="../assets/image/he3.png" alt="">客服电话：400-072-0808</li>
     <li><img src="../assets/image/he2.png" alt="">工作时间：9:00-22:00</li>
     <li><img src="../assets/image/he1.png" alt="">工作地址：四川省成都市金牛区蓉北商贸大道二段文轩路6号</li>
  </ul>



  <ul class="helpthree">

  <li><p>账户类</p></li>
  <li>订单提交成功后还可以修改收货信息吗？<span>></span></li>
  <li>登录密码忘记了，可以找回么？<span>></span></li>
  <li>为什么收不到密码找回邮件？<span>></span></li>
  <li>如何注销账号呢？<span>></span></li>
  <li><p>购物类</p></li>
  <li>无货商品什么时候可以到货呢？<span>></span></li>
  <li>商品的规格是是什么？有无附件（光盘）<span>></span></li>
  <li>可以拨打热线电话订购商品吗？<span>></span></li>
  <li>如何取消订单？<span>></span></li>
  <li>订单提交成功后商品降价了，可以退给我差价吗？<span>></span></li>
  <li><p>配送类</p></li>
  <li>包邮吗？<span>></span></li>
  <li>订单已经提交，什么时候可以发货？<span>></span></li>
  <li>签收时发现商品包装破损，该如何处理？<span>></span></li>
  <li><p>售后类</p></li>
  <li>收到货多久可以无理由退换货？<span>></span></li>
  <li>贵店的退换货条件及退换货运费规则是什么？<span>></span></li>
  <li>退化货需要注意什么？<span>></span></li>
  <li>退换货怎么操作？<span>></span></li>
  <li>如何退款？<span>></span></li>
  <li><p>暂存款</p></li>
  <li>什么是暂存款<span>></span></li>
  <li>申请暂存款体现仅针对于可以退回到暂存款的资<span>></span></li>
  <li>暂存款退款查询<span>></span></li>
  <li><p>礼券</p></li>
  <li>什么是礼券<span>></span></li>
  <li>如何使用礼券？<span>></span></li>
  <li>如何得到购物礼券？<span>></span></li>
  <li><p>礼品卡</p></li>
  <li>如何购买礼品卡？<span>></span></li>
  <li>购买礼品卡可以开具体发票吗？<span>></span></li>
  <li>如何查询我的礼品卡余额？<span>></span></li>
  <li>礼品卡都可以买什么商品？有最低金额限制吗？<span>></span></li>
  <li>礼品卡有有效期吗？如何查询礼品卡的有效期？<span>></span></li>
  <li>可以同优惠券同时使用吗？一次可以用几张礼品卡？<span>></span></li>
  <li>退货，支付的款项如何退还？<span>></span></li>
  <li><p>畅读卡</p></li>
  <li>购买畅读卡可以开具体发票吗？<span>></span></li>
  <li>使用畅读卡购买商品可以开具体发票吗？<span>></span></li>
  <li>如何使用畅读卡？<span>></span></li>
  <li>畅读卡可以卖什么商品？有最低金额限制吗？<span>></span></li>
  <li>畅读卡有有效期吗？如何查询长度卡的有效期？<span>></span></li>
  <li>畅读卡过期了怎么办？<span>></span></li>
  <li>畅读卡优惠券可以同时使用吗？一次用几张畅读卡？<span>></span></li>
  <li>退货的款项如何退给我？<span>></span></li>
  <li>畅读卡使用不了怎么办？<span>></span></li>
  <li>如何购买畅读卡？<span>></span></li>
  <li>文轩畅读卡可以再实体书店使用吗？<span>></span></li>
  <li><p>电子发票</p></li>
  <li>下单时如何申请发票？<span>></span></li>
  <li>下单未索取发票，如何申请补开？<span>></span></li>
  







  </ul>

  <div class="footer">

  <div>联系客服</div>

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
        }
    }
    
</script>
<style scoped>
*{
	margin:0px;
	padding:0px;
	list-style:none;
}
.header_one{
	height:10vh;
	width:100%;
	height:48px;
	background-color:#fbfbfb;
	
}
.header_one div{
	
	width:10%;

	float:left;
	
}
.header_one h3{
	text-align:center;
	
	width:75%;
	float:left;
	font-size:18px;
	line-height:48px;
	height:100%;

}
.header_one p{
   
	width:15%;
	float:right;
}
.header_one p img{
	
	width:100%;
	height:48px;
	float:left;
	
}
.helpme{
	height:10vh;
	background:url("../assets/image/help.png");
}
.helpme img{
	height:10vh;
	float:left;
}
.helpme p{
	color:#ffffff;
	font-size:16px;
	width:60%;
	float:left;
}
.helptwo img{
	height:3vh;
	margin-left:15px;
	margin-right:10px;
}
.helptwo li{
	font-size:14px;
	margin-top:10px;
	width:100%;
	border-bottom:#eeeeee solid;
}
.helpthree{
	background-color:#eeeeee;
	width:100%;
}
.helpthree li p{
	text-align:center;
}
.helpthree li{
	
	border-bottom:#fbfbfb solid;
	width:100%;
	font-size:14px;
	margin-left:10px;
	position:relative;
	height:4vh;
	line-height:4vh;
}
.helpthree li span{
	color:red;
	float:right;
	position:absolute;
	right:10px;
	font-size:14px;
}
.footer{
	width:100%;
	height:8vh;
	position:fixed;
	bottom:1vh;
	background-color:#ffffff;
}
.footer div{
	width:40%;
	height:5vh;
	color:red;
	border:1px red solid;
	text-align:center;
	line-height:5vh;
	font-size:16px;
	border-radius:10px;
	margin-left:20px;

}
</style>