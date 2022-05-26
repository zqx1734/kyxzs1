<template>

  <el-row>
    <el-col :span="24">
		<div class="grid-content bg-purple-dark">
	<a  style="float: left;margin-left: 80px;height: 100%;" href="/index"><el-button style="margin-top: 2px; height: 100%;" type="primary" plain>返回主页</el-button></a>
	</div></el-col>
  </el-row>
  
  
  <el-row>
	  <el-col :span="20" :offset="2" >
		  	<div >	  
				<div class="grid-content bg-purple-dark"  style="padding: 20px;">
				<!-- <div class="grid-content bg-purple-dark"  style="padding: 20px;background-color: #fff;"> -->
					<div class="body">
						
						
						
						<div class="menu">
									<div class="label">个人中心</div>
									<div class="ul">
										<a href="#"><div class="u1">Ability</div></a>
										<a href="#"><div class="u2">Self testing</div></a>
										<a href="#"><div class="u3">Recommendation</div></a>
										<a href="#"><div class="u4">Promote</div></a>
										<a href="#"><div class="u5" id="u5">Personal</div></a>
										<a href="#"><div class="u6">Auxiliary</div></a>
										
										
						<!-- 				<ul>
											<li>Ability</li>
											<li>Self testing</li>
											<li>Recommendation</li>
											<li>Promote</li>
											<li>Personal</li>
											<li>Auxiliary</li>
										</ul> -->
									</div>
								</div>
								
								
								
								<div class="main">
									
									<div class="left">
										
										<div class="left_top">
											
											<div class="tx">
												<div class="tx0">
													<div class="tx_head"></div>
													<div class="tx_left_big"></div>
													<div class="tx_left_small"></div>
													<div class="tx_body1"></div>
													<div class="tx_body2"></div>
													<div class="tx_right_big"></div>
													<div class="tx_right_small"></div>
													<div class="tx_leg_big"></div>
													<div class="tx_leg_small"></div>
												</div>
											</div>
											
											<div class="mz">
												<div class="name">郑倾形</div>
												<div class="xb">
													<div class="xb1"></div>
													<div class="xb2"></div>
													<div class="xb3"></div>
													<div class="xb4"></div>
												</div>
												
											</div>
											
											<div class="xx">关注：1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粉丝：999</div>
											
											<div class="gw">UI设计师（期待岗位）</div>
											
											<div class="wz">
												<div class="wz0">
													<div class="wz1"></div>
													<div class="wz2"></div>
													<div class="wz3"></div>
													<div class="wz4"></div>
													
												</div>
												<div class="dd">成都</div>
											</div>
											
										</div>
										
										<div class="left_middle">
											<p>攀登者智慧和汗水，构思着一首信念和意志的长诗。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（个性签名）</p>
										</div>
										
										<div class="left_buttom">
											<a href="#"><div class="bj">编辑</div></a>
											<div class="zk">
												<div class="zk1"></div>
												<div class="zk2"></div>
											</div>
										</div>
										
										
									</div>
									
									
									
									<div class="right">
										<div class="right_top">
											<a href="#"><div class="d1">动态</div></a>
											<a href="#"><div class="d2">历史自我检测</div></a>
											<a href="#"><div class="d3">历史浏览公司</div></a>
											<a href="#"><div class="d4">关注列表</div></a>
											<a href="#"><div class="d5">报告下载</div></a>
											<a href="#"><div class="d6">个人信息管理</div></a>
										</div>
									</div>
									
								</div>
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						

					</div>
			  </div>
	  	  </div>
	  </el-col>
</el-row>
  
  <el-row>
  	  <a name="math"></a>
  	  <a name="english"></a>
  	  <a name="zz"></a>
  	  <a name="load"></a>
    
  </el-row>


  <el-row>
    <el-col  :span="22" :offset="1"><div class="grid-content bg-purple" >
	
	</div></el-col>
    
  </el-row>


<!--  <el-row>
	  
    <el-col :span="24"><div class="grid-content bg-purple" >
	
	</div></el-col>
    
  </el-row> -->
  
  <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
<!--  <div>
  Scroll down to see the bottom-right button.
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
	</div> -->
	
	  <el-backtop :bottom="100">
	    <div
	      style="
	        height: 100%;
	        width: 100%;
	        background-color: var(--el-color-primary-light-7);
	        box-shadow: var(--el-box-shadow-lighter);
	        text-align: center;
	        line-height: 40px;
			border-radius: 50%;
	        color: #1989fa;
	      "
	    >
	      UP
	    </div>
	  </el-backtop>

</template>

<script>
const weiXinUrl = require("../static/images/money/收款码.jpg");
const videoUrl = require("../static/video/数学.mp4");
  export default {
	methods: {
		open() {
		 
		  
		  this.$alert("<strong><img src="+ weiXinUrl + " width=400px height=400px</strong>", '限时优惠，即刻购买，即刻开始！！！', {
				dangerouslyUseHTMLString: true
			  }).then(action => {
				this.buyInsurancePrintTicket();
			  });
		  
		  
		},
		open1() {
		  this.$alert(' <video width="832px" height="624px" controls><source src='+videoUrl + ' type="video/mp4">您的浏览器不支持 video 标签。</video>','第十节闭区间上连续函数性质', {
				dangerouslyUseHTMLString: true,
				customClass: 'msgbox'
			  }).then(action => {
				this.buyInsurancePrintTicket();
			  });
		}
		
	  },
	          

	  
	  
	  
    data() {
      return {
		radio: '1',  
		url1: require('../static/images/个人/0qq二维码.jpg'),
        srcList1: [
          require('../static/images/个人/qq二维码.jpg'),
          require('../static/images/个人/qq二维码.jpg')
        ],
		
		url2: require('../static/images/课程/法律.png'),
		srcList2: [
		  require('../static/images/个人/wx二维码.jpg'),
		  require('../static/images/个人/wx二维码.jpg')
		],
		url3: require('../static/images/课程/经济学.png'),
		srcList3: [
		  require('../static/images/课程/经济学.png'),
		  require('../static/images/课程/经济学.png')
		],
		
		
		url4: require('../static/images/课程/教育学.png'),
		srcList4: [
		  require('../static/images/课程/教育学.png'),
		  require('../static/images/课程/教育学.png')
		],
		
		url8: require('../static/images/经验分享/等你出现.png'),
		srcList8: [
		  require('../static/images/经验分享/等你出现.png'),
		  require('../static/images/经验分享/等你出现.png')
		],
		
		
		
	  }
    }
  }
</script>



<style lang="scss">
.msgbox {
  width: 840px;
}
@media screen and (min-width: 768px) {
  .msgbox {
    width: 863px;
  }
}

	
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: var(--el-color-primary-light-7);
  border: 1px solid #000;
  margin-top:20px ;
}























.body{
	width: 100%;
	height: 100vh;
	background-color: #C6E2FF2;
}
a{
	text-decoration:none;
	color: #FFFFFF;
}

/* ---menu--- */
.menu{
	background-color: #b5bccf;
	width: 100%;
	height: 11%;
	box-shadow: 0px 1px 0px 0px #000000;
	position: relative;
}
.menu>div{
	line-height: 3.5;
	
}
.menu div{
	color: #FFFFFF ;
	font-size:20px;
	font-family:"微软雅黑";
	float: left;
	text-align: center;
	height: 100%;
}
.label{
	width: 20%;
}
.ul{
	width: 80%;
}
.ul div{
	margin: 0px 2%;
}
#u5{
	border-bottom: 2px solid #5B9AF8;
	color: #5B9AF8;
}
.ul div:hover{
	border-bottom: 2px solid #5B9AF8;
	color: #5B9AF8;
}
.ul div:active{
	background-color: #5B9AF8;
	color: #FFFFFF;
}








/* ---main--- */
.main{
	width: 100%;
	height: 100%;
	position: relative;
}
.main > div{
	float: left;
	background-color: #b5bccf;
	position: absolute;
	height: 76%;
	top: 8%;
	box-shadow: 1px 0px 3px 0px #000000;
	border-radius: 3%;
}



/* ---left--- */
.left{
	width: 25%;
	left: 8%;
	position: relative;
	
}
.left>div{
	/* background-color: aqua; */
	/* position: absolute; */
	position: relative;
} 




.left_top{
	height: 52%;
	text-align: center;
	font-family:"微软雅黑";
	color:#FFFFFF;
	
}
.left_top>div{
	position: relative;
}

.tx{
	height: 50%;
}
.tx0{
	width: 22%;
	height: 60%;
	background-color: #5B9AF8;
	position: absolute;
	top: 20%;
	left: 39%;
	border-radius: 50%;
	box-shadow: -2px -2px 3px #000000;
}
.tx0>div{
	position: absolute;
}
.tx_head{
	width: 15px;
	height: 10px;
	border-radius: 50%;
	background-color: #000000;
	top:17%;
	left: 52%;
}
.tx_body1{
	height: 48px;
	width: 6px;
	background-color: #000000;
	transform:rotate(18deg);
	top:27%;
	left: 39%;
}
.tx_body2{
	height: 48px;
	width: 6px;
	background-color: #000000;
	transform:rotate(25deg);
	top:28%;
	left: 43%;
}
.tx_left_big{
	height: 20px;
	width: 6px;
	background-color: #000000;
	transform:rotate(65deg);
	top:24%;
	left: 35%;
}
.tx_left_small{
	height: 15px;
	width: 7px;
	background-color: #000000;
	/* transform:rotate(65deg); */
	top:38%;
	left: 26%;
}
.tx_right_big{
	height: 16px;
	width: 6px;
	background-color: #000000;
	transform:rotate(133deg);
	top:33%;
	left: 63%;
}
.tx_right_small{
	height: 6px;
	width: 13px;
	background-color: #000000;
	/* transform:rotate(65deg); */
	top:45%;
	left: 72%;
}
.tx_leg_big{
	height: 18px;
	width: 8px;
	background-color: #000000;
	transform:rotate(125deg);
	top:46%;
	left: 55%;
}
.tx_leg_small{
	height: 20px;
	width: 8px;
	background-color: #000000;
	/* transform:rotate(65deg); */
	top:58%;
	left: 62%;
}

/* transform:rotate(145deg);
border-radius: 50%;
border: 4px solid #31E184; */










.mz{
	height: 17%;
	font-size:22px;
	/* background-color: rosybrown; */
}
.name{
	position: absolute;
	width: 30%;
	height: 60%;
	/* top: 20%; */
	left: 35%;
	/* border-radius: 50%; */
}
.xb{
	height: 60%;
	width: 30%;
	position: absolute;
	
	/* width: 30%; */
	/* height: 60%; */
	/* top: 20%; */
	left: 65%;
}
.xb>div{
	position: absolute;
}
.xb1{
	width: 6px;
	height: 6px;
	border-radius: 50%;
	border: 2px solid #5B9AF8;

	top:60%;
}
.xb2{
	width: 10px;
	height: 2px;
	transform:rotate(135deg);
	background-color: #5B9AF8;
	top:54%;
	left: 6px;
}
.xb3{
	width: 7px;
	height: 1.5px;
	background-color: #5B9AF8;
	top:39%;
	left: 8px;
}
.xb4{
	width: 1.5px;
	height: 8px;
	background-color: #5B9AF8;
	top: 40%;
	left: 15px;
}


.xx{
	height: 13%;
	font-size:10px;
}
.gw{
	height: 10%;
	font-size:13px;
}
.wz{
	height: 10%;
	font-size:9px;
	position: relative;
}
.wz0{
	width: 10%;
	height: 100%;
	position: absolute;
	left: 39%;
}
.wz0>div{
	position: absolute;
}

.wz1{
	width: 2.5px;
	height: 2.5px;
	border-radius: 50%;
	border: 4px solid #31E184;
	
}
.wz2{
	width: 3px;
	height: 9px;
	background-color: #31E184;
	top:24%;
	transform:rotate(33deg);
	left: 13.5%;
}
.wz3{
	width: 3px;
	height: 9px;
	background-color: #31E184;
	top:24%;
	transform:rotate(147deg);
	left: 6%;
	
}




.left_middle{
	height: 28%;
	/* padding: 20px; */
	border-top: 1px solid #000000;
	border-bottom: 1px solid #000000;
}
.left_middle>p{
	font-size: 18px;
	color: #FFFFFF;
	margin: 10px;
}
.left_buttom{
	height: 19%;
	/* align-items: center; */
}
.bj{
	text-align: center;
	font-family:"微软雅黑";
	color:#5b9af8;
	font-size:15px;
	margin: auto;
	/* margin-top: 30px; */
	padding-top: 30px;
}
.zk{
	height: 20px;
	width: 20px;
	border-radius: 50%;
	border: 3px solid #d6cbce;
	margin-top: 30px;
	margin: auto;
	margin-top: 10px;
}
.zk1,.zk2{
	height: 2px;
	width: 7px;
	background-color: #d6cbce;
	margin: auto;
	/* margin-top: 10px; */
}
.zk1{
	transform:rotate(45deg);
	margin-top: 8px;
}
.zk2{
	transform:rotate(135deg);
	margin-top: 2px;
}






/* ---right--- */
.right{
	width: 55%;
	/* height: 90%; */
	right: 8%;
}
.right_top{
	border-radius: 3% 3% 0 0;
	width: 100%;
	height: 12%;
	border-bottom: 1px solid #292c32;
}
.right_top div{
	float: left;
	width: 16.66%;
	height: 100%;
	
	color: #FFFFFF;
	font-size:15px;
	font-family:"微软雅黑";
	text-align: center;
	
	border-radius: 15% 0 0 0;
	box-shadow: -2px -2px 10px 0px #000000;
	line-height:70px;
}
.d5+div{/*兄弟选择器*/
	border-radius: 15% 15% 0 0;
}


.right_top div:hover{
	border-bottom: 2px solid #5B9AF8;
	color: #5B9AF8;
}

.right_top div:active{
	background-color: #5B9AF8;
	color: #FFFFFF;
}
.d1{
	margin: 0px;
	padding: 0px;
}








</style>
