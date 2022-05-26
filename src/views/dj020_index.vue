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
						  <img style="height: 55px;width: 50px;border-radius: 50%;" src="../static/images/个人/1.png"/>
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
			
<!-- 			<div class="imgBox">
			    <img class="img-slide img1" src="../static/images/轮播图/考研经验.jpeg" alt="1">
			    <img class="img-slide img2" src="../static/images/轮播图/关于考研那点事.jpeg" alt="2">
			    <img class="img-slide img3" src="../static/images/轮播图/考研就是选择未来.jpeg" alt="3">
			</div> -->
			
			<div>
			       <div style="margin: 10px 0">
			         <el-carousel :interval="3000" type="card" height="200px">
						  <!-- <el-carousel height="450px"> -->
			           <el-carousel-item v-for="item in imgList" :key="item.id">
			             <img :src="item.idView" class="" style="width: 100%;height: 100%;">
			           </el-carousel-item>
			
			
			         </el-carousel>
			       </div>
			   </div>

<!-- 			
			  <el-carousel :interval="4000" type="card" height="200px">
			    <el-carousel-item v-for="item in 6" :key="item">
			      <h3 text="2xl" justify="center">{{ item }}</h3>
			    </el-carousel-item>
			  </el-carousel> -->
			

			
          <!-- <el-scrollbar style="margin-top: 20px;"> -->
			<el-scrollbar style="margin: 20px 10px 0px 10px;">
            <!-- <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table> -->






			  <el-row :gutter="20">
				
			    <el-col :span="6">
					<a href="https://www.bilibili.com/video/BV1jS4y1b7Ww?spm_id_from=333.337.search-card.all.click">
						<div class="grid-content bg-purple">
							<img  class="img-jy" src="../static/images/经验分享/上岸须知避坑指南.png"/>
							<p>经验分享 上岸须知【避坑指南】系列</p>
						</div>
					</a>
				</el-col>
				
			    <el-col :span="6">
					<a href="https://www.bilibili.com/video/BV1Q4411S7ph?spm_id_from=333.337.search-card.all.click">
						<div class="grid-content bg-purple">
							<img  class="img-jy" src="../static/images/经验分享/考研建议普通二本计算机专业考研.png"/>
							<p>考研建议普通二本计算机专业考研.png</p>
						</div>
					</a>
				</el-col>
			    <el-col :span="6">
					<a href="https://www.bilibili.com/video/BV1q4411w7ij?spm_id_from=333.337.search-card.all.click">
						<div class="grid-content bg-purple">
							<img  class="img-jy" src="../static/images/经验分享/985考研经验分享.png"/>
							<p>985考研经验分享</p>
						</div>
					</a>
				</el-col>
			    <el-col :span="6">
					<a href="https://www.bilibili.com/video/BV1VF411L7SF?spm_id_from=333.337.search-card.all.click">
						<div class="grid-content bg-purple">
							<img  class="img-jy" src="../static/images/经验分享/你和985的距离.png"/>
							<p>你和985的距离</p>
						</div>
					</a>
				</el-col>
			  </el-row>
				
			<el-row :gutter="20">
							
			  <el-col :span="6">
								<a href="https://www.bilibili.com/video/BV144411e753?spm_id_from=333.337.search-card.all.click">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/我是如何一周背完一本书的.png"/>
										<p>我是如何一周背完一本书的</p>
									</div>
								</a>
							</el-col>
							
			  <el-col :span="6">
								<a href="https://www.bilibili.com/video/BV1j7411J7rZ?spm_id_from=333.337.search-card.all.click">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/考研政治81分干货经验.png"/>
										<p>考研政治81分干货经验.png</p>
									</div>
								</a>
							</el-col>
			  <el-col :span="6">
								<a href="https://www.bilibili.com/video/BV1sa411e7cU?spm_id_from=333.337.search-card.all.click">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/从双非院校到顶尖985的复习历程.png"/>
										<p>从双非院校到顶尖985的复习历程</p>
									</div>
								</a>
							</el-col>
			  <el-col :span="6">
								<a href="https://www.bilibili.com/video/BV19F411t7fU?spm_id_from=333.337.search-card.all.click">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/考研政治经验分享85分是怎么拿到的.png"/>
										<p>考研政治经验分享：85分是怎么拿到的</p>
									</div>
								</a>
							</el-col>
			</el-row>
			
			<el-row :gutter="20">
							
			  <el-col :span="6">
								<a href="">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/等你出现.png"/>
										<p>资源有限，等你出现……</p>
									</div>
								</a>
							</el-col>
							
			  <el-col :span="6">
								<a href="">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/等你出现.png"/>
										<p>资源有限，等你出现……</p>
									</div>
								</a>
							</el-col>
			  <el-col :span="6">
								<a href="">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/等你出现.png"/>
										<p>资源有限，等你出现……</p>
									</div>
								</a>
							</el-col>
			  <el-col :span="6">
								<a href="">
									<div class="grid-content bg-purple">
										<img  class="img-jy" src="../static/images/经验分享/等你出现.png"/>
										<p>资源有限，等你出现……</p>
									</div>
								</a>
							</el-col>
			</el-row>

          </el-scrollbar>
        </el-main>
      </el-container>
	  
	  
	  
	  
	  
    </el-container>
  </div>
</template>

 



<script type="text/javascript">
	export default {
	  // name: "FrontHome",
	  data(){
	    return{
	      imgList: [
	        {id:1,idView:require("../static/images/轮播图/考研经验.jpeg")},
	        {id:2,idView:require("../static/images/轮播图/关于考研那点事.jpeg")},
	        {id:3,idView:require("../static/images/轮播图/考研就是选择未来.jpeg")},
	      ]
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
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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
 </style>
