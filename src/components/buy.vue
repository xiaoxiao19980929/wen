<template>
	<main>
         <div class="header_one">
         <div><img src="../assets/image/xiao3.png" alt="" @click="back()"></div>
	     <h3>购物车</h3>
	     <p>
	     <span>编辑</span>	
	     <span>客服</span>	
	     </p>
	     	
	   </div>

	   <div class="nav">
       <div><span>
               <img src="../assets/image/buy1.png" alt="">
            
       </span></div>
	         <p>文轩网图书音像</p>
	   </div>

	   <div class="center">
	     <span>满减</span>
	     <p>以下商品 已购满99元，已减10元现金 再购买活动商品306.00元，可减100元现金</p>

	   </div>

   <div class="footer">
               <ul class="one">
                   <li v-for="(item,index) in list1" class="l1">
                    <div class="left">
                    <div><span><img src="../assets/image/buy1.png" alt=""></span></div>
                        <img :src="item.src" alt="">
                    </div>
                        <div class="right">
                        <div class="prie">
                            <h1>{{item.title}}</h1>
                        </div>
                        <div class="pric"> 
                            <span class="price">{{item.price}}</span>
                            <span class="price1">{{item.price1}}</span>
                            <div>
                               <button id="butone" type="button" @click="minus">-</button>
                               <p>{{result}}</p>  
                               <button id="buttwo" type="button" @click="plus">+</button>
                            </div>
                        </div>      
                        </div>
                   </li>
               </ul>
        </div>
        <div class="h0">
            <div class="h1">
                <p class="h11"><span>合计：</span><u>￥ 105.8</u></p>
                <p class="h12">已优惠：￥ 0</p>
            </div>
            <div class="h2">
                <p>结算</p>
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
 
    export default{
        data(){
            return {
                result: 1,
                list1:[
                    {
                        src:'./src/assets/image/s5.jpg',
                        title:'雪国之劫',
                        
                        price:'￥28.4',
                        price1:'￥45.00'
                    },
                    {
                        src:'./src/assets/image/s6.jpg',
                        title:'还是钟南山',
                      
                        price:'￥43.2',
                        price1:'￥48.00'
                    },
                    {
                        src:'./src/assets/image/s7.jpg',
                        title:'你当像鸟飞往你当山',
                     
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
                ]
            }
        },
        methods: {
            back(){
        this.$router.go(-1)
        },
            minus() {
            this.result--;
            this.$emit('input', {res: this.result, other: '--'})
        },
        plus() {
            this.result++;
            this.$emit('input', {res: this.result, other: '++'})
            }
        }
    }
</script>

<style scoped>
main{
    height: 90vh;
}
.header_one{
	height:10vh;
	width:100%;
	height:48px;
	background-color:#fafafa;
	
}
.header_one div{
	
	width:10%;

	float:left;
	
}
.header_one h3{
	text-align:center;
	
	width:60%;
	float:left;
	font-size:16px;
	line-height:48px;
	height:100%;

}
.header_one p{
    font-size:16px;
	width:30%;
	float:right;
    line-height:48px;
}
.header_one p span{
	
	width:50%;
	height:48px;
	float:left;
	
}

.nav{
	height:5vh;

	width:100%;
}
.nav div{
    width:20%;
    float:left;
    height:100%;
    
}
.nav div span{
    width:30%;
    height:2.7vh;
   margin-top:15%;
   margin-left:50%;
   overflow:hidden;
}

.nav div img{
    width:30%;
    height:2.7vh;
   margin-top:15%;   

}
.nav p{
    height:5vh;
    width:80%;
    line-height:300%;
    float:left;
    font-size:12px;
}

.center{
	background-color: #eeeeee;
    height: 11vh;
    width: 100%;
    font-size: 16px;
}
.center span{
	background-color:red;
	color:#ffffff;
    float:left;
    margin-left: 5%;
    margin-right: 5%;
}
.one{
    height: 100vh;
    width: 100%;
    background-color: #fff;
    }
.l1{
    width: 100%;
    height: 22%;
    float: left;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #eeeeee;
    margin: 10px 0px;

    }
 .left{
        width:35%;
        float:left;
    }
    .left img{
    width:70%;
    margin-top:10px;
    float:right;
    }
  .price1{
  text-decoration:line-through;
  } 
  .right{
  height:70%;
  width: 54%;
  float: right;
  } 
  .prie{
  height:50%;
  }
  .price{
  color:red;
  }
  
  .pric{
  height:50%;
  }
  .pric button{
  width:20px;
  height:20px;
  background-color:#eeeeee;

  }
  .pric p{
  display:inline-block;
  width:15px;
  text-align:center;
  }

  .left div{
    width:30%;
    float:left;
    height:100%;
    
}

.left div img{
    width:50%;
    height:2.7vh;
   margin-top:120%;
   margin-left:50%;
    

}
.h0{
    width: 100%;
    height: 78px;
    position: fixed;
    bottom: 56px;
    background-color: #eeeeee;
}
.h1{
    width:80%;
    height: 68px;
    margin-top: 10px;
    float: left;
    text-align: center;
    background-color: #fff;
}
.h1 p{
    line-height: 30px;
}
.h2{
    width:20%;
    height: 68px;
    margin-top: 10px;
    float: right;
    text-align: center;
    font-size:20px;
    line-height: 68px;
    background-color:red;
}
.h2 p{
    color: white;
}
.h11 u{
    color: red;
    font-size: 18px;
    text-decoration: none;
}
.h12{
    color:gray
}
.footer{
    background-color: gray;
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
