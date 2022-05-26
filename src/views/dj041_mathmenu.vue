<template>
	
  <el-row>
    <el-col :span="24">
		<div class="grid-content bg-purple-dark">
	<a  style="float: left;margin-left: 80px;height: 100%;" href="/index"><el-button style="margin-top: 2px; height: 100%;" type="primary" plain>返回主页</el-button></a>
	</div></el-col>
  </el-row>
  
  
  <el-row>
    <el-col :span="24" style="position: relative;left: -24%;">
		<h1>2023考研数学全程班</h1>
		<p style="">考研数学，重拳出击</p>
		<!-- <p style="float: left;">考研数学，重拳出击</p> -->
  	</el-col>
	<el-col :span="7" :offset="2"  style="">

		<img  @click="open1" src="../static/images/课程/数学.png"/>
	</el-col>
	
	
	<el-col :span="11" :offset="2" style="">
		<el-col style="background-color: #e5e4f0 ;width: 100%;height: 60px;">
		
			<p style="font-size: 30px;color: #ff5500;float: left;margin-top: 20px;margin-left: 40px;">¥1099</p>
		
		</el-col>
		<el-col style="border-bottom:1px dashed #000  ;width: 100%;text-align: left;margin-left: 10px;">
		
		<p><span>开课时间：2022-06-15</span>   <span style="margin-left: 40px;">课时：300</span>  
		<span  style="margin-left: 40px;">有效期：2022-12-31</span></p>
		<p>主讲老师：聂岩、王冲、孟玉、杨超、郝天祎</p>
		
		</el-col>
		<el-col style="border-bottom:1px dashed #000  ;width: 100%;text-align: left;margin-left: 10px;">
		
			<p style="font-size: 20px;color: #ff5500;">特色服务</p> 
			<p>
				<span>内部讲义</span>   
			<span style="margin-left: 40px;">阶段测评</span>
			<span style="margin-left: 40px;">24小时答疑</span> 
			<span style="margin-left: 40px;">知识堂答疑</span>
			<span style="margin-left: 40px;">刷题服务</span>
			<span style="margin-left: 40px;">班级群交流</span>   
			<span style="margin-left: 40px;">讲练结合</span>
			</p>
			<p><span >考前点睛</span> <span style="margin-left: 40px;">自习室服务</span></p>
		</el-col>
		
		<el-col style="border-bottom:1px dashed #000  ;width: 100%;text-align: left;margin-left: 10px;">
		
			<el-radio v-model="radio" label="1">23重读保障（升级版）<span style="color: #ff5500;">¥599</span></el-radio><br/>
			<el-radio v-model="radio" label="2">23重读保障（标配版）<span style="color: #ff5500;">¥399</span></el-radio>
		</el-col>
	</el-col>
	
	<el-col :span="24" >
		<p style="margin-top: 70px;">限时特惠，即刻开始</p>
		<el-button @click="open" type="warning" style="width: 200px;height: 70px;" round>立即报名</el-button>
	</el-col>
	
  </el-row>
  
  
  

  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple" >
	
	</div></el-col>
    
  </el-row>
  
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
		 
		  
		  this.$alert("<strong><img src="+ weiXinUrl + " width=400px height=400px</strong>", '请扫描下方二维码进行支付：', {
				dangerouslyUseHTMLString: true
			  }).then(action => {
				this.buyInsurancePrintTicket();
			  });
		  
		  
		},
		open1() {
		  this.$alert(' <video width="832px" height="624px" controls><source src='+videoUrl + ' type="video/mp4">您的浏览器不支持 video 标签。</video>','2023考研数学全程班', {
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

</style>
