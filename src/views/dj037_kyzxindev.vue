<template>
  <div class="common-layout">
	  
    <el-container  class="layout-container-demo" style="height: 500px">

	  <el-header style="text-align: right; font-size: 12px">
		<div>
			<div class="block" style="float: left;">
				<img src="../static/images/上岸1.jpeg" style="height: 60px;margin-left: 50px;opacity: 0.8;"/>
			      <!-- <span class="demonstration">Default</span> -->
			      <!-- <el-image :src="./static/images/上岸1.jpeg" /> -->
			</div>
			
			<div>
			<!-- :default-active="activeIndex" -->
			<el-menu router :default-active="this.$router.path"
			    
			    class="el-menu-demo"
			    mode="horizontal"
				background-color="var(--el-color-primary-light-7)"
			    @select="handleSelect"
				
				
			  >
			  <el-sub-menu style="margin-left: 80px;" index="1">
			        <template #title>精品课程</template>
			        <el-menu-item index="mathmenu">考研数学精品课</el-menu-item>
			        <el-menu-item index="englishmenu">考研英语精品课</el-menu-item>
			        <el-menu-item index="politicsmenu">考研政治精品课</el-menu-item>
					<el-menu-item index="zymenu">考研专业精品课</el-menu-item>
			      </el-sub-menu>
				  <el-sub-menu index="2">
				        <template #title>考研规划</template>
				        <el-menu-item index="fxmenu">复习计划</el-menu-item>
				        <el-menu-item index="yxmenu">院校推荐</el-menu-item>
				      </el-sub-menu>
			  <el-sub-menu index="3">
			        <template #title>考研资料</template>
			        <el-menu-item index="mindmenu">课程思维导图总结</el-menu-item>
			        <el-menu-item index="notemenu">学习笔记</el-menu-item>
			        <el-menu-item index="ztmenu">历年真题</el-menu-item>
			    
			      </el-sub-menu>
			<el-menu-item index="wmenu">联系我们</el-menu-item>
			
			<el-sub-menu style="position: absolute;right: 0px;" index="5">
			      <template #title>
					  <!-- <div style="height: 50px;width: 60px; border-radius: 50%;background-color: aquamarine;"> -->
						  <img style="height: 55px;width: 60px;border-radius: 50%;" src="../static/images/个人/1.png"/>
					  <!-- </div> -->
					  &nbsp;&nbsp;&nbsp;郑倾形</template>
			      <el-menu-item index="grmenu">个人中心</el-menu-item>
					<el-menu-item index="szmenu">设置</el-menu-item>
			    </el-sub-menu>
			

			 </el-menu>
			 
			 
			</div>
			
			
			
			
		</div>
		
		
        
      </el-header>
	  
	  
	  
	  
      <el-container>
		  
        <el-aside width="200px">
			
			<el-scrollbar>
				<div style="background-color: #fff;">
				<h1>一研为定</h1>
				</div>
				
			  <el-menu router
			  :default-active="this.$router.path" :default-openeds="['1','5']">
				  
				<el-menu-item index="/index" class="sub-menu" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经验分享</el-menu-item>
				
				<el-sub-menu class="sub-menu" index="1">
					<template  #title>
						<el-icon></el-icon>公共课
					</template>
						<el-menu-item index="/mathindex">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数学</el-menu-item>
						<el-menu-item index="/englishindex">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英语</el-menu-item>
						<el-menu-item index="/politicsindex">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;政治</el-menu-item>
					
				</el-sub-menu>
				
				
			    <el-sub-menu class="sub-menu" index="2">
					<template #title>
						<el-icon></el-icon>专业课
					</template>

					<el-menu-item-group>
						<template #title>计算机基础</template>
							<el-menu-item index="/zcylindex">计算机组成原理</el-menu-item>
							<el-menu-item index="/sjjgindex">数据结构</el-menu-item>
							<el-menu-item index="/czxtindex">操作系统</el-menu-item>
							<el-menu-item index="/jsjwlindex">计算机网络</el-menu-item>
					</el-menu-item-group>

					<el-menu-item-group title="编程语言">
						<el-sub-menu index="2-5">
							<template #title>前端</template>
								<el-menu-item index="/htnlindex">HTML</el-menu-item>
								<el-menu-item index="/cssindex">CSS</el-menu-item>
								<el-menu-item index="/jsindex">Javascript</el-menu-item>
						</el-sub-menu>
						<el-sub-menu index="2-6">
							<template #title>后端</template>
								<el-menu-item index="/cindex">C语言</el-menu-item>
								<el-menu-item index="/javaindex">Java</el-menu-item>
								<el-menu-item index="/pyindex">Python</el-menu-item>
						</el-sub-menu>
					</el-menu-item-group>

					
			    </el-sub-menu>
				
			    <el-sub-menu class="sub-menu" index="3">
					<template #title>
						<el-icon></el-icon>复试相关
					</template>
					
					<el-menu-item-group>
						<template #title></template>
							<el-menu-item index="/fsjyindex">复试建议</el-menu-item>
							<el-menu-item index="/fsxcindex">复试现场</el-menu-item>
					</el-menu-item-group>
				</el-sub-menu>
				
				<el-menu-item index="/kyzxindev" class="sub-menu" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;考研咨询</el-menu-item>
				
			
				
				
			  </el-menu>
			</el-scrollbar>
		</el-aside>
		
		
		
		
        <el-main>
			





























			

			  
			  
			  <el-row>
				  <el-col :span="20" :offset="2" >
					  	<div style="height: 75vh;">
					  
				  	<div class="grid-content bg-purple-dark" style="padding: 20px;">
						<el-card class="box-card" style="margin: 100px auto;padding: 20px;">
						  <div slot="header" class="clearfix">
						    <!-- <span>可以通过下面的方式联系我们</span> -->
						    <el-button style=" padding: 3px 0; border-left:0px;border-right:0px;" type="text">可以通过下面的方式与我们交流</el-button>
						  </div>
						  
						  <div style="margin-top: 40px;">
						  	QQ号码：1341063419<br/>
							QQ邮箱：1341063419@qq.com
						  	<div  class="demo-image__preview" style="position: relative;left: 170px;top:-20px">
						  		<b>click me > </b>
						  	  <el-image 
						  		style="width: 20px;height: 20px;"
						  		:src="url1" 
						  		:preview-src-list="srcList1">  
						  	  </el-image>
						  	</div>
						   
						  </div>

						  
						  <div  style="margin-top: 10px;">
						  	weChat号码：wx1341063419
						  	<div  class="demo-image__preview" style="position: relative;left: 170px;top:-20px">
						  		<b>click me > </b>
						  	  <el-image 
						  		style="width: 20px;height: 20px;"
						  		:src="url1" 
						  		:preview-src-list="srcList2">  
						  	  </el-image>
						  	</div>
						   
						  </div>
						  <div style="margin-top: 10px;">
						    weibo账号：郑倾形
						  </div>
						  <div style="margin-top: 30px;">
						    客服电话：13141310134
						  </div>
<!-- 						  <div v-for="o in 4" :key="o" class="text item">
						    {{'列表内容 ' + o }}
						  </div> -->
						</el-card>
						
						
						
						
						
						
						
						
						
				  </div>
				  	  </div>
				  </el-col>
				  
				  
			
				
				
			
				
			  
			  
			  
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
			

			

			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
	
        </el-main>
      </el-container>
	  
	  
	  
	  
	  
    </el-container>
  </div>
</template>

 

<!-- <script lang="ts" setup>
 import { ref } from 'vue'
 import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
 
 const item = {
   date: '2016-05-02',
   name: 'Tom',
   address: 'No. 189, Grove St, Los Angeles',
 }
 const tableData = ref(Array.from({ length: 20 }).fill(item))
 </script> -->
 
 
<!-- <script>
 import {
   ArrowDown,
   Check,
   CircleCheck,
   CirclePlus,
   CirclePlusFilled,
   Plus,
 } from '@element-plus/icons-vue'
 </script> -->

<script type="text/javascript">
	
	
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
	
	
	
	
	
	
	
	
	
	// const src1='../static/images/经验分享/【考研】经验分享 上岸须知【避坑指南】系列.png';
    var index=0;
    //效果
    function ChangeImg() {
        index++;
        var a=document.getElementsByClassName("img-slide");
        if(index>=a.length) index=0;
        for(var i=0;i<a.length;i++){
            a[i].style.display='none';
        }
        a[index].style.display='block';
    }
    //设置定时器，每隔两秒切换一张图片
    setInterval(ChangeImg,3000);
</script>

 
 <style scoped>
	 

.text {
 font-size: 14px;
}

.item {
 margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
 display: table;
 content: "";
}
.clearfix:after {
 clear: both
}

.box-card {
 width: 480px;
}


	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
 .layout-container-demo .el-header {
   position: relative;
   background-color: var(--el-color-primary-light-7);
   color: var(--el-text-color-primary);
 }
 .layout-container-demo .el-aside {
   color: var(--el-text-color-primary);
   /* height: 90vh; */
   /* background: var(--el-color-primary-light-8); */
 }
 .sub-menu{
	 background-color:var(--el-color-primary-light-8);
 }
 .layout-container-demo .el-menu {
   border-right: none;
 }
 .layout-container-demo .el-main {
   padding: 0;
 }
 .layout-container-demo .toolbar {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   right: 20px;
 }
 
 
 .block-col-2 .demonstration {
   display: block;
   color: var(--el-text-color-secondary);
   font-size: 14px;
   margin-bottom: 20px;
 }
 .example-showcase .el-dropdown + .el-dropdown {
   margin-left: 15px;
 }
 .example-showcase .el-dropdown-link {
   cursor: pointer;
   color: var(--el-color-primary);
   display: flex;
   align-items: center;
 }
 .menu-button{
	 background-color:var(--el-color-primary-light-7) ;
	 /* border: 0px; */
	border-top: 0px;
	border-left: 0px;
	border-right: 0px;
	 height: 100%;
	 font-size: 20px;
	 margin-left: 30px;
 }
 
 
/*轮播图*/
 .imgBox{
	/* border-top: 2px solid cadetblue; */
	width: 100%;
	height: 250px;
	margin: 0 auto;

}

.imgBox img{
	width: 100%;
	height: 250px;
	margin: 10px 20px;
	/* padding-top: 30px; */

}

.img1{
	display: block;
}

.img2{
	display: none;
}

.img3{
	display: none;
}
a{
	text-decoration:none;
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
   /* background-color: deepskyblue; */
   min-height: 36px;
   border: 1px solid darkgray;
 }
 
 .img-jy{
 	/* height: 300px; */
	/* border: 1px solid darkgray; */
	margin-top: 20px;
 	width: 250px;
 }
 
 
 
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
 </style>


