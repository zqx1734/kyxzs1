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
				<el-col :span="22" :offset="1">
					<div class="grid-content bg-purple-dark">
						
						<el-table
							:data="tableData1"
							stripe
							style="width: 90%;margin:20px 5%;"
							:default-sort = "{prop: 'date', order: 'descending'}"
							>
							<a name="math"></a>
							<el-table-column name="math" label="复试资料下载">
			

							
							<el-table-column
							  prop="name"
							  label="名字"
							  sortable
							  >
							</el-table-column>
							
							<el-table-column
							  prop="mm"
							  label="提取码"
							  width="180">1734
							</el-table-column>
							
							<el-table-column
							  prop="address"
							  label="地址">
							</el-table-column>
							
							<el-table-column
							  prop="address"
							  label="操作">
			
								<a :href="tableData1[0].address" target="_blank">下载</a>
							</el-table-column>
							</el-table-column>
						</el-table>
						  
						
						
					</div>
				</el-col>
			</el-row>
			
			<el-row>
				<el-col :span="22" :offset="1">
					<div class="grid-content bg-purple-dark">
						
						<el-table
							:data="tableData"
							stripe
							style="width: 90%;margin:20px 5%;"
							:default-sort = "{prop: 'date', order: 'descending'}"
							>
							<a name="math"></a>
							<el-table-column name="math" label="复试视频观看">
			
							<div class="grid-content bg-purple" style="margin: 0px auto;">
								<video style="width: 1060px;"  controls>
									<source src="../static/video/初复试经验分享会.mp4" type="video/mp4">
									您的浏览器不支持 video 标签。
								</video>
								<!-- <p>23考研数学系统班导学课</p> -->
							</div>
							
							
							</el-table-column>
						</el-table>
						  
						
						
					</div>
				</el-col>
			</el-row>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			<!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
			<div style="height: 500px;margin-left: 100px;margin-top: 50px;">
			  <el-steps direction="vertical" :space="200" :active="active" finish-status="success" align-center>
			    <el-step title="自我介绍" description="第一，个人基本信息，包括名字、年龄、毕业学校、本科专业；第二，学术学业情况，重点介绍一下在大学本科期间学习情况，获奖情况，发表论文情况，参与课题或者项目情况。为什么报考这所学校，研究生为什么要选择这个专业，这是面试老师重点想听的地方，这也决定了导师是否有兴趣选择你；第三，就是介绍实习、实践、工作经历，简单地说几句，实事求是，没有实习或者工作经验的就说一说对研究生的热爱，对报考学校的崇拜，这些都可以。"></el-step>
			    <el-step title="仪容举止" description="仪容仪表方面，穿着大方得体就行，如果你有正装，尽量去穿正装，表示对复试的重视，要知道，评委的第一印象是非常重要的，应该来说，大部分同学在面试的时候或多或少都会表现出紧张，这样会影响你回答问题的语言组织、表达和发挥，可能本来你可以很好的回答了问题，由于紧张，你的嘴唇不利索，回答的时候词不达意，在评委那里的表现也就会大打折扣，这个时候导师就会怀疑你连面试都不能很好的完成，如果你成为我的研究生，我给安排任务能顺利完成吗？或者我带你去参加一个重要的国际会议，你看到一些大场面的时候，让你上台去发言，你能够表现自如吗？所以我们一定要在复试的时候尽量地去多训练几次。"></el-step>
			    <el-step title="面试礼仪" description="我们要做到的就是彬彬有礼，谦虚求学，我们研究生复试是去求学的，不是跟人去谈生意的，切忌趾高气扬，说话的嗓门儿不要太高，要注意以下几点。\
				第一，进门的时候敲门，出门的时候关门。如果你发现地上有一些垃圾或者碎纸屑，顺手把它捡起来，一般来说，高校不会去专门设置这样的检测场景，但是也不排除有些学校故意来试探学生。\
				第二，开口前问候老师好，离场前说一声谢谢。与考官交流，说话有礼貌，多一点敬语，虽然这是常识，但是还是有部分没有经验的同学，没有注意到这一点，特别是对一些年长的面试官，你多尊敬一些，肯定是不会错的。\
				第三，坐姿。坐姿一定要端正，双手自然放在腿上，一般面试的时间是10分钟到20分钟，坐姿端正能够体现你的朝气蓬勃，如果说你坐的很随意，甚至敲着一个二郎腿，这样肯定是不可取的，这必然会影响面试官的感受，不卑不亢，举止得当，这就是我们面试的礼仪。
				"></el-step>
				<el-step title="回答问题" description="首先要注意，回答问题要抓住重点的关键词，切忌天马行空，乱答一通。回答问题你如果抓不住关键词，这样，就会显得你的逻辑不清，你让导师都听不下去，不知所云。所以我们不要认为回答问题你说得越多，得分就越高，这是一种误解。回答问题要抓关键，如果你在回答过程中有些要点你忘了，你可以在最后再补充一下，你只要把问题讲清楚就行了，千万不要长篇大论，考官没有这么多时间和精力来听你的演讲。\
				第二，需要注意都是回答问题的时候要有自己的想法，切忌生搬硬套，研究生学习主要是做研究，一般考官会问你对一些报考专业的想法和理解，比如说你如何进行日常的理论研究，你对该专业的理解，你是否了解本专业的国内外研究现状等等这样的问题，你在回答这类问题的时候，你要有一些真实的想法，避免给考官留下你对未来没有规划的印象，对于本专业比较热的研究方向和内容，你要提前准备，去熟悉一下，找一找相关的资料，不至于在听到问题的时候无话可说。\
				第三个要注意的方面就是合理的把控回答时间，不要滔滔不绝回答问题，我们要注意时间的把控，也不要无话可说，滔滔不绝可能会给考生带来光说不练假把式的印象，无话不说可能也会给考官带来缺乏专业知识的印象，这都是不可取得，很有可能因此而淘汰。如果确实你找不到，怎么去回答这个问题，你可以讲一讲对报考学校的向往，对自己未来的规划，对自己学业以后的安排，要注意的是只说重点，不要说空话，多一点实际。\
				你的英语听力和口语都特别强，可以用纯英文和考官交流，如果说你用英语回答问题都是对的，上岸的概率会增大，如果你的英语不是特别好，你就千万不要主动去秀你的英语，面试官不主动用英语问，你就不要用英语去说，最后我们要做的就是不用过于紧张，提前做好充足的准备，要有必胜的信心，输了不可怕，可怕的是失去竞争的勇气。
				"></el-step>
				

			  </el-steps> -->
			<!-- </div> -->


			
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

	
	var names=[['复试简历模板-中文版-25份',
				'调剂申请表-7份',
				'计算机和软工复试重点问题',
				'2016年考研数学真题+真题解析',
				'2015年考研数学真题+真题解析',
				'2014年考研数学真题+真题解析',
				'2013年考研数学真题+真题解析',
				'2012年考研数学真题+真题解析',
				'2011年考研数学真题+真题解析',
				'2010年考研数学真题+真题解析',],
				
				['2021年考研英语真题',
				'2020年考研英语真题',
				'2019年考研英语真题',
				'2018年考研英语真题',
				'2017年考研英语真题',
				'2016年考研英语真题',
				'2015年考研英语真题',
				'2014年考研英语真题',
				'2013年考研英语真题',
				'2012年考研英语真题',
				'2011年考研英语真题',
				'2010年考研英语真题',],
				
				['2021年考研英语真题解析',
				'2020年考研英语真题解析',
				'2019年考研英语真题解析',
				'2018年考研英语真题解析',
				'2017年考研英语真题解析',
				'2016年考研英语真题解析',
				'2015年考研英语真题解析',
				'2014年考研英语真题解析',
				'2013年考研英语真题解析',
				'2012年考研英语真题解析',
				'2011年考研英语真题解析',
				'2010年考研英语真题解析',],
				
				['2018年考研政治真题',
				'2017年考研政治真题',
				'2016年考研政治真题',
				'2015年考研政治真题',
				'2014年考研政治真题',
				'2013年考研政治真题',
				'2012年考研政治真题',
				'2011年考研政治真题',
				'2010年考研政治真题',],
				
				]
	
	var adds=[['https://pan.baidu.com/s/16LBUo1CeiM5m0bnNkkg7Yw?pwd=1734',
		'https://pan.baidu.com/s/1Lt5h09sZhF0YHqNQHd-c_g?pwd=1734',
		'https://pan.baidu.com/s/1vSLe6yQxeI2nJIkDnhF9qw?pwd=1734',
		],
		['https://pan.baidu.com/s/1h2vyf_oWRm8JdlyZ-zwabQ?pwd=1734',
		'https://pan.baidu.com/s/1ZwI-AZ-0nCyALE5ucNkaXA?pwd=1734',
		],
		['https://pan.baidu.com/s/1bFonq8RPqnnxUYQK1DQVSQ?pwd=1734',],
	]

		
			
			
			
  export default {


	  
    data() {
      return {
		  tableData1: [
			  {
		    name: names[0][0],
		    address: adds[0][0]
		  }, {

		    name: names[0][1],
		    address: adds[0][1]
		  }, {

		    name: names[0][2],
		    address: adds[0][0]
		  }, 
		  ],
		  tableData: [
		  			  {
		    name: names[0][0],
		    address: adds[0][0]
		  },  
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
 </style>
