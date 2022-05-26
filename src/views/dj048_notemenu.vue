<template>
	
  <el-row>
    <el-col :span="24">
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
				<a  style="float: left;margin-left: 80px;" href="#note">
					<el-button style="margin-top: 2px; height: 100%;" type="primary" plain>
						创建新笔记
					</el-button>
				</a>
				
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
		</div></el-col>
  </el-row>
  
  
  <el-row>
	  <a name="note"></a>
    <el-col :span="20" :offset="2">
  		<div class="grid-content bg-purple-dark" style="padding: 20px;">
			
			
			
			
			
			
			<div>
				
			    <el-input v-model="input1" placeholder="请输入标题……">
			      <template #prepend>标题：</template>
			    </el-input>
			  </div>
			  
			  <div class="mt-4">
			    <el-input
			      v-model="input3"
			      placeholder="请输入类型……"
			      class="input-with-select"
			    >
			      <template #prepend>
			        <el-select v-model="select" placeholder="类型" style="width: 115px">
			          <el-option label="txt" value="1" />
			          <el-option label="xmind" value="2" />
			          <el-option label="word" value="3" />
			        </el-select>
			      </template>
			      <template #append>
			        <el-button :icon="Search" />
			      </template>
			    </el-input>
			  </div>
			  <el-input
			      v-model="textarea2"
			      :autosize="{ minRows: 2, maxRows: 4 }"
			      type="textarea"
			      placeholder="请输入正文……"
			    ></el-input>
			  
  			
  			
  		</div></el-col>
  </el-row>
  
  
  
  <el-row>
    <el-col :span="10" :offset="1"><div class="grid-content bg-purple" >
		<div class="demo-image__preview">
			<p>高数</p>
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
		<p>英语</p>
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
		<p>高数</p>
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
		<p>高数</p>
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
		<p>高数</p>
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
		<p>高数</p>
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
		<p>政治</p>
	  <el-image 
	    style="width: 500px;"
	    :src="url5" 
	    :preview-src-list="srcList5">
	  </el-image>
	</div>
	<br/>
	</div>
	
	<div class="grid-content bg-purple-light" >
	<div class="demo-image__preview">
		<p>高数</p>
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
		<p>英语</p>
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
		<p>政治</p>
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
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
  export default {
    data() {
      return {

		  
        url1: require('../static/images/学习笔记/1.png'),
        srcList1: [
          require('../static/images/学习笔记/1.png'),
          require('../static/images/学习笔记/1.png')
        ],
		url2: require('../static/images/学习笔记/02.png'),
		srcList2: [
		  require('../static/images/学习笔记/2.png'),
		  require('../static/images/学习笔记/2.png')
		],
		url3: require('../static/images/学习笔记/03.png'),
		srcList3: [
		  require('../static/images/学习笔记/3.png'),
		  require('../static/images/学习笔记/3.png')
		],
		
		
		url4: require('../static/images/学习笔记/04.png'),
		srcList4: [
		  require('../static/images/学习笔记/4.png'),
		  require('../static/images/学习笔记/4.png')
		],
		url5: require('../static/images/学习笔记/05.png'),
		srcList5: [
		  require('../static/images/学习笔记/5.png'),
		  require('../static/images/学习笔记/5.png')
		],
		url6: require('../static/images/学习笔记/01.png'),
		srcList6: [
		  require('../static/images/学习笔记/1.png'),
		  require('../static/images/学习笔记/1.png')
		],
		url7: require('../static/images/学习笔记/01.png'),
		srcList7: [
		  require('../static/images/学习笔记/1.png'),
		  require('../static/images/学习笔记/1.png')
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
  border: 1px solid #000;
  margin-top:20px ;
}


.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>

