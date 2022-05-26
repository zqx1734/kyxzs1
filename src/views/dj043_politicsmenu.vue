<template>
	
  <el-row>
    <el-col :span="24">
		<div class="grid-content bg-purple-dark">
	<a  style="float: left;margin-left: 80px;height: 100%;" href="/index"><el-button style="margin-top: 2px; height: 100%;" type="primary" plain>返回主页</el-button></a>
	</div></el-col>
  </el-row>
  
  
  <el-row>
    <el-col :span="24" style="position: relative;left: -20%;">
		<h1>2023考研政治全程班</h1>
		<p style="">考研政治，重拳出击</p>
		<!-- <p style="float: left;">考研数学，重拳出击</p> -->
  	</el-col>
	<el-col :span="7" :offset="2"  style="">
		<img @click="open1" src="../static/images/课程/政治.png"/>
	</el-col>
	<el-col :span="11" :offset="2" style="">
		<el-col style="background-color: #e5e4f0 ;width: 100%;height: 60px;">
		
			<p style="font-size: 30px;color: #ff5500;float: left;margin-top: 20px;margin-left: 40px;">¥999</p>
		
		</el-col>
		<el-col style="border-bottom:1px dashed #000  ;width: 100%;text-align: left;margin-left: 10px;">
		
		<p><span>开课时间：2022-06-15</span>   <span style="margin-left: 40px;">课时：176</span>  <span  style="margin-left: 40px;">有效期：2022-12-31</span></p>
		<p>主讲老师：徐涛、郝明、王一珉、郝天祎</p>
		
		</el-col>
		<el-col style="border-bottom:1px dashed #000  ;width: 100%;text-align: left;margin-left: 10px;">
		
			<p style="font-size: 20px;color: #ff5500;">特色服务</p> 
			<p>
				<span>内部讲义</span>   
			<span style="margin-left: 40px;">学习资料免费下载</span>
			<span style="margin-left: 40px;">24小时答疑</span> 
			<span style="margin-left: 40px;">知识堂答疑</span>
			<span style="margin-left: 40px;">短信提醒</span>
			<span style="margin-left: 40px;">班级群交流</span>   
			<span style="margin-left: 40px;">讲练结合</span>
			</p>
			<p><span >考前点睛</span> <span style="margin-left: 40px;">自习室服务</span></p>
		</el-col>
		
		<el-col style="border-bottom:1px dashed #000  ;width: 100%;text-align: left;margin-left: 10px;">
		
			<el-radio v-model="radio" label="1">23重读保障（升级版）<span style="color: #ff5500;">¥499</span></el-radio><br/>
			<el-radio v-model="radio" label="2">23重读保障（标配版）<span style="color: #ff5500;">¥299</span></el-radio>
		</el-col>
	</el-col>
	
	<el-col :span="24" >
		<p style="margin-top: 70px;">限时特惠，即可开始</p>
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
const videoUrl = require("../static/video/政治.mp4");
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
		  this.$alert(' <video width="832px" height="624px" controls><source src='+videoUrl + ' type="video/mp4">您的浏览器不支持 video 标签。</video>','2023考研政治全程班', {
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
		
        url1: require('../static/images/思维导图/高数基础知识0.png'),
        srcList1: [
          require('../static/images/思维导图/高数基础知识.png'),
          require('../static/images/思维导图/高数基础知识.png')
        ],
		url2: require('../static/images/思维导图/高数上0.png'),
		srcList2: [
		  require('../static/images/思维导图/高数上.png'),
		  require('../static/images/思维导图/高数上.png')
		],
		url3: require('../static/images/思维导图/高数基础知识0.png'),
		srcList3: [
		  require('../static/images/思维导图/高数基础知识.png'),
		  require('../static/images/思维导图/高数基础知识.png')
		],
		
		
		url4: require('../static/images/思维导图/英语框架0.png'),
		srcList4: [
		  require('../static/images/思维导图/英语框架.png'),
		  require('../static/images/思维导图/英语框架.png')
		],
		url5: require('../static/images/思维导图/英语词性0.png'),
		srcList5: [
		  require('../static/images/思维导图/英语词性.png'),
		  require('../static/images/思维导图/英语词性.png')
		],
		url6: require('../static/images/思维导图/英语句子成分0.png'),
		srcList6: [
		  require('../static/images/思维导图/英语句子成分.png'),
		  require('../static/images/思维导图/英语句子成分.png')
		],
		url7: require('../static/images/思维导图/英语句型.png'),
		srcList7: [
		  require('../static/images/思维导图/英语句型.png'),
		  require('../static/images/思维导图/英语句型.png')
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

</style>
