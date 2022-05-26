<template>

  <el-row>
    <el-col :span="24">
		<div class="grid-content bg-purple-dark">
	<a  style="float: left;margin-left: 80px;height: 100%;" href="/index"><el-button style="margin-top: 2px; height: 100%;" type="primary" plain>返回主页</el-button></a>
	</div></el-col>
  </el-row>
  
  
  <el-row>
	  <el-col :span="20" :offset="2" >
		  	<div style="height: 75vh;">
		  
	  	<div class="grid-content bg-purple-dark" style="padding: 20px;">
			
			<div class="demo-collapse">
			    <el-collapse v-model="activeNames" @change="handleChange">
			      <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QQ" name="1">
			        <div>
						QQ号码：1341063419
						<div  class="demo-image__preview" style="position: relative;left: 170px;top:-20px">
							<b>click me > </b>
						  <el-image 
							style="width: 20px;height: 20px;"
							:src="url1" 
							:preview-src-list="srcList1">  
						  </el-image>
						</div>
					 
			        </div>
			        <div>
						QQ邮箱：1341063419@qq.com
			        </div>
			      </el-collapse-item>
			      <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wechat" name="2">
			        <div>
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

			      </el-collapse-item>
				  <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weibo" name="3">
				    <div>
				      weibo账号：郑倾形
				    </div>
				  </el-collapse-item>
			      <el-collapse-item title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;phone" name="4">
			        <div>
			          客服电话：13141310134
			        </div>
			        
			      </el-collapse-item>

			    </el-collapse>
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


<el-affix position="bottom" :offset="20">
	<el-row>
		  
	  <el-col :span="24"><div class="grid-content bg-purple" >
		
		</div></el-col>
	  
	</el-row>
  </el-affix>


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

</style>
