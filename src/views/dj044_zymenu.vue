<template>
	
  <el-row>
    <el-col :span="24">
		<div class="grid-content bg-purple-dark">
	<a  style="float: left;margin-left: 80px;height: 100%;" href="/index"><el-button style="margin-top: 2px; height: 100%;" type="primary" plain>返回主页</el-button></a>
	</div></el-col>
  </el-row>
  
  
  <el-row>
	  <el-col :span="20" :offset="2" >
	  	<div class="grid-content bg-purple-dark">
			<h2 style="margin-top: 40px;">更多选择 等你加入……</h2>
			<img  @click="open" src="../static/images/课程/考研集中营.jpeg" style="margin-bottom: 60px;width: 1100px;" />
			
			<el-button @click="open" type="warning" style="width: 230px;height: 70px;position: absolute;top:465px ;right: 650px;background-color: black;color:yellow;" round>立即参加</el-button>
	  </div>
	  </el-col>
	  
	  
	<el-col :span="8" :offset="3"  style="margin-top: 50px;">
		<h1>2023考研计算机全程班</h1>
		<div style="margin-bottom: 15px;" class="demo-image__preview">
		  <el-image 
			style="width: 500px;height: 300px;"
			:src="url1" 
			:preview-src-list="srcList1">
		  </el-image>
		</div>
		<el-button @click="open" type="warning" style="width: 200px;height: 70px;" round>立即报名</el-button>
	</el-col>
	
	
	<el-col :span="8" :offset="3"  style="margin-top: 50px;">
		<h1>2023考研法律学全程班</h1>
		<div style="margin-bottom: 15px;" class="demo-image__preview">
		  <el-image 
			style="width: 500px;height: 300px;"
			:src="url2" 
			:preview-src-list="srcList2">
		  </el-image>
		</div>
		<el-button @click="open" type="warning" style="width: 200px;height: 70px;" round>立即报名</el-button>
	</el-col>
	
	
	<el-col :span="8" :offset="3"  style="margin-top: 50px;">
		<h1>2023考研经济学全程班</h1>
		<div style="margin-bottom: 15px;" class="demo-image__preview">
		  <el-image 
			style="width: 500px;height: 300px;"
			:src="url3" 
			:preview-src-list="srcList3">
		  </el-image>
		</div>
		<el-button @click="open" type="warning" style="width: 200px;height: 70px;" round>立即报名</el-button>
	</el-col>
	
  
  <el-col :span="8" :offset="3"  style="margin-top: 50px;">
  	<h1>2023考研教育学全程班</h1>
  	<div style="margin-bottom: 15px;" class="demo-image__preview">
  	  <el-image 
  		style="width: 500px;height: 300px;"
  		:src="url4" 
  		:preview-src-list="srcList4">
  	  </el-image>
  	</div>
	<el-button @click="open" type="warning" style="width: 200px;height: 70px;" round>立即报名</el-button>
  </el-col>
  
</el-row>
  
  <el-row>
  	  <a name="math"></a>
  	  <a name="english"></a>
  	  <a name="zz"></a>
  	  <a name="load"></a>
    <el-col :span="8" :offset="3">
  		<div style="margin-top: 30px;">
			<div class="demo-image__preview">
					  <el-image 
						style="width: 500px;"
						:src="url8" 
						:preview-src-list="srcList8">
					  </el-image>
			</div>
  	<br/>
  	</div>
  	</el-col>
    <el-col :span="10" :offset="2">
  	<div  style="margin-top: 30px;">
  	<div class="demo-image__preview">
  	  <el-image 
  	    style="width: 500px;"
  	    :src="url8" 
  	    :preview-src-list="srcList8">
  	  </el-image>
  	</div>
  	<br/>	
  	</div></el-col>
    
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

		url1: require('../static/images/课程/计算机.png'),
		srcList1: [
		  require('../static/images/课程/计算机.png'),
		  require('../static/images/课程/计算机.png')
		],
		url2: require('../static/images/课程/法律.png'),
		srcList2: [
		  require('../static/images/课程/法律.png'),
		  require('../static/images/课程/法律.png')
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

</style>
