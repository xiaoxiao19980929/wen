<template>
	<main>
	   <div class="header_one">
	   <div><img src="../assets/image/xiao3.png" alt="" @click="back()"></div>
	     <h3>排行榜</h3>
	     <p>
	     <img src="../assets/image/xiao2.png" alt="">
	     <img src="../assets/image/xiao1.png" alt="">	
	     </p>
	     	
	   </div>

<div class="nav">
       
	   <ul>
	   
	   <li v-for="(item,index) in list">
                <router-link :to="item.path">
                    
                 
                    <span class="bang">{{item.con}}</span>
                </router-link>

	   </li>
	   <img src="../assets/image/xiao5.png" alt="" class="xiao5" @click="open()" v-show="num!=true">

	   </ul>



	   <div class="yincang" v-show="num==true" :class="{'con2':n==true}">


	   <div class="jingxuan">为你精选以下标签
<img src="../assets/image/xiao5.png" alt="" class="xiao6" @click="close()" v-show="num==true">
	   </div>

       <ul>
	   <li v-for="(item,index) in list">
                <router-link :to="item.path">
                    
                 
                    <span class="bang">{{item.con}}</span>
                </router-link>

	   </li>
	   </ul>

	   </div>
</div>


	<h5>热销排名依据销量计算·每天零点更新榜单</h5>
	<div class="three">
               <ul class="one">
                   <li v-for="(item,index) in list1" class="l1">
                    <span class="lt">1</span>
                    <div class="left">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="right">
                            <h1>{{item.title}}</h1>
                            <p>{{item.writer}}</p>
                            <div class="rt">
                                <span class="s">{{item.price}}</span>
                                <span class="s0">{{item.discount}}</span>
                                <span class="ss">{{item.price1}}</span>
                                <img :src="item.pic1" alt="" class="sss">
                            </div>
                    </div>
                   </li>
               </ul>
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
	   <router-view></router-view>


	</main>

</template>

<script>
	export default{
         data(){
              return{
              num:'',
            n:'',
              list:[
                  {
                          con:'总榜',
                          path:'/ranking',
                          


                  },
                  {
                          con:'新书榜',
                          path:'/list_of_new_books'
                  },
                  {
                             con:'童书\育儿',
                            path:'/childrens_books'
                    },
                    {
                            con:'文学\小说',
                            path:'/literature'
                    },
                    {
                            con:'社科\经管',
                            path:'/social_sciences'
                    },
                    {
                            con:'行业\职业',
                            path:'/trade'
                    },
                    {
                            con:'教材\教辅',
                            path:'/teaching_aids'
                    },
                    {
                          con:'生活\艺术',
                          path:'/life'
                  }
			  ],
			  list1:[
				  {
                        src:'./src/assets/image/s5.jpg',
                        title:'雪国之劫',
                        writer:'(日)东野圭吾',
                        price:'￥28.4',
                        discount:'7.21折',
                        price1:'￥45.00',
                        pic1:'./src/assets/image/u12.png'
                    },
                    {
                        src:'./src/assets/image/s6.jpg',
                        title:'还是钟南山',
                        writer:'魏东海',
                        price:'￥43.2',
                        discount:'7.21折',
                        price1:'￥48.00',
                        pic1:'./src/assets/image/u12.png'
                    },
                    {
                        src:'./src/assets/image/s7.jpg',
                        title:'你当像鸟飞往你当山',
                        writer:'(美)塔拉·韦斯特弗(Tara Westover)',
                        price:'￥34.2',
                        discount:'7.21折',
                        price1:'￥59.00',
                        pic1:'./src/assets/image/u12.png'
					},
					{
                        src:'./src/assets/image/s7.jpg',
                        title:'你当像鸟飞往你当山',
                        writer:'(美)塔拉·韦斯特弗(Tara Westover)',
                        price:'￥34.2',
                        discount:'7.21折',
                        price1:'￥59.00',
                         pic1:'./src/assets/image/u12.png'
					},
					{
                        src:'./src/assets/image/s7.jpg',
                        title:'你当像鸟飞往你当山',
                        writer:'(美)塔拉·韦斯特弗(Tara Westover)',
                        price:'￥34.2',
                        discount:'7.21折',
                        price1:'￥59.00',
                        pic1:'./src/assets/image/u12.png'
					},
					{
                        src:'./src/assets/image/s7.jpg',
                        title:'你当像鸟飞往你当山',
                        writer:'(美)塔拉·韦斯特弗(Tara Westover)',
                        price:'￥34.2',
                        discount:'7.21折',
                        price1:'￥59.00',
                        pic1:'./src/assets/image/u12.png'
					},
					{
                        src:'./src/assets/image/s7.jpg',
                        title:'你当像鸟飞往你当山',
                        writer:'(美)塔拉·韦斯特弗(Tara Westover)',
                        price:'￥34.2',
                        discount:'7.21折',
                        price1:'￥59.00',
                        pic1:'./src/assets/image/u12.png'
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
         methods:{
	    back(){
			  this.$router.go(-1)
		},
        open(){
            this.num=true;
            this.n=false;
        },
        close(){
            this.n=true;
            this.num=false;
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
main{
    height: 200vh;
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
	
	width:60%;
	float:left;
	font-size:18px;
	line-height:48px;
	height:100%;

}
.header_one p{
   
	width:30%;
	float:right;
}
.header_one p img{
	
	width:50%;
	height:48px;
	float:left;
	
}
.nav{
	height:5vh;
	width:100%;
	position:relative;


}
.nav ul{
	height:100%;
	width:100%;
	position:relative;
overflow:hidden;	

}
.nav ul li{
	float:left;	
	width:20%;
	text-align:center;
	line-height:5vh;

}


h5{
	height:5vh;
	background:#eeeeee;
	text-align:center;
	line-height:5vh;
}
.xiao5{
	width:10%;
	position:absolute;
	right:0px;
	height:5vh;
}

.yincang{
	height:20vh;
	position:absolute;
	background-color:#ffffff;
	top:0px;



}


.yincang ul li{
	float:left;	
	width:25%;
	text-align:center;
	line-height:5vh;

}
.xiao6{
	width:10%;
	top:0vh;

	position:absolute;
	right:0px;
	height:5vh;
}

.jingxuan{
	height:5vh;
	line-height:5vh;
	position:relative;
}
.bang{
    color: black;
}
.lt{
    top: 10px;
    position: relative;
    left:-145px;
    color:white;
}
.left{
        float: left;
        margin-left: 2%;
        margin-right: -96px;
    }
    .right{
        font-size:16px;
        width: 60%;
        margin-top: 16px;
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
        font-size: 20px;
        color: red;
        margin-right: 20px;
    }
    .right .s0{
        color: red;
    }
    .right .ss{
        color:#999999;
        text-decoration: line-through;
    }
    .right .sss{
        width: 38px;
        height: 38px;
        float: right;
        position: relative;
        top:-38px;
        right:-24px;
    }
    .three{
        height: 132vh;
    }
    .one{
        height: 200%;
        overflow: hidden;
    }
	.one li{
		width: 100%;
		border-bottom: 1px solid gray;
	}
    .one img{
        width: 50%;
        margin-top: 25px;
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
