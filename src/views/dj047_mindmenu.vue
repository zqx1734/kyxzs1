<template>
	
  <el-row>
    <el-col :span="22" :offset="1">
		<div class="grid-content bg-purple-dark">
			<div>
				<a  style="float: left;margin-left: 80px;" href="/index">
					<el-button style="margin-top: 2px; " type="primary" plain>
						返回主页
					</el-button>
				</a>
			</div>
			<br/><br/>
			
			<div style="border-top:1px solid #7991b4 ;">
				<a  style="float: left;margin-left: 80px;" href="#math">
					<el-button style="margin-top: 2px; height: 100%;" type="primary" plain>
						数学
					</el-button>
				</a>
				
				<a  style="float: left;margin-left: 80px;" href="#english">
					<el-button style="margin-top: 2px; height: 100%;" type="primary" plain>
						英语
					</el-button>
				</a>
				
				<a  style="float: left;margin-left: 80px;" href="#zz">
					<el-button style="margin-top: 2px; height: 100%;" type="primary" plain>
						政治
					</el-button>
				</a>
				
				<a  style="float: left;margin-left: 80px;" href="#load">
					<el-button style="margin-top: 2px; height: 100%;" type="primary" plain>
						专业课
					</el-button>
				</a>
				<br/><br/>
			</div>
		</div>
		</el-col>
  </el-row>
  
  
  
  <el-row>
    <el-col :span="10" :offset="1">
		<div class="grid-content bg-purple" >
		<div class="demo-image__preview">
		  <el-image 
			style="width: 500px;height: 1000px;"
			:src="url1" 
			:preview-src-list="srcList1">
		  </el-image>
		</div>
		<br/>
	</div>
	
	<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>英语框架</p>
	  <el-image 
	    style="width: 500px;"
	    :src="url4" 
	    :preview-src-list="srcList4">
	  </el-image>
	</div>
	<br/>
	</div>
	
	<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>英语句子成分</p>
	  <el-image 
	    style="width: 500px;"
	    :src="url6" 
	    :preview-src-list="srcList6">
	  </el-image>
	</div>
	<br/>
	</div>
	
	<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>英语句型</p>
	  <el-image 
	    style="width: 500px;"
	    :src="url7" 
	    :preview-src-list="srcList7">
	  </el-image>
	</div>
	<br/>
	</div>
	
	</el-col>
	
	
	
	
	
	<el-col :span="10" :offset="2"><div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>高数上</p>
	  <el-image 
	    style="width: 500px;"
	    :src="url2" 
	    :preview-src-list="srcList2">
	  </el-image>
	</div>
	<br/>
	</div>
	
	<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>高数基础知识</p>
	  <el-image 
	    style="width: 500px;"
	    :src="url3" 
	    :preview-src-list="srcList3">
	  </el-image>
	</div>
	<br/>
	</div>
	
	<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>英语词性</p>
	  <el-image 
	    style="width: 500px;"
	    :src="url5" 
	    :preview-src-list="srcList5">
	  </el-image>
	</div>
	<br/>
	</div>
	
	</el-col>
  </el-row>
  
  
  
  
  
  
  <el-row>
	  <a name="math"></a>
	  <a name="english"></a>
	  <a name="zz"></a>
	  <a name="load"></a>
    <el-col :span="10" :offset="1">
		<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>资源有限，等你出现……</p>
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
	<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>资源有限，等你出现……</p>
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
    <el-col  :span="22" :offset="1"><div class="grid-content bg-purple" >
	
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
  export default {
    data() {
      return {
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
  border: 1px solid #6d798d;
  margin-top:20px ;
}

</style>
