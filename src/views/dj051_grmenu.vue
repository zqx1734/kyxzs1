<template>

  <el-row>
    <el-col :span="24">
		<div class="grid-content bg-purple-dark">
	<a  style="float: left;margin-left: 80px;height: 100%;" href="/index"><el-button style="margin-top: 2px; height: 100%;" type="primary" plain>返回主页</el-button></a>
	</div></el-col>
  </el-row>
  
  
  <el-row>
	  <el-col :span="20" :offset="2" >
			<h2 style="color:red;">个人中心</h2>
	  </el-col>
	  
	  
	  
	  <el-col :span="8" :offset="2" >
		  
		  <div style="border: 1px solid #bcbcbc;margin-left:80px;margin-right:100px;border-radius: 20px;height: 600px;">
		  <br/><br/><br/><br/><br/>
		  <el-col :span="11" style="">
		  	<div style="margin-bottom: 0px;" class="demo-image__preview">
		  	  <el-image 
		  		style="height: 180px;width: 180px;border-radius: 50%;margin-left: 75px;"
		  		:src="url4" 
		  		:preview-src-list="srcList4">
		  	  </el-image>
		  	</div>
		  			  </el-col>
		  
	  <!-- <img style="height: 180px;width: 180px;border-radius: 50%;" src="../static/images/个人/1.png"/> -->
	  <br/><br/><br/><br/>
	  <br/><br/><br/><br/>
	  <br/><br/><br/><br/>
	  <br/>
	  <p>昵称：郑倾形</p>
	  
	  <p>
		  <!-- <el-icon><EditPen /></el-icon> -->
		  个性签名：日子平淡，好在你很喜欢👑👑</p>
		  <br/>
	  </div>
	   </el-col>
	  
	  <el-col :span="12" :offset="0" >
		  <el-descriptions title="用户信息">
		      <el-descriptions-item label="账号:">1341063419</el-descriptions-item>
			  <el-descriptions-item label="性别:">男</el-descriptions-item>
			  <el-descriptions-item label="年龄:">22</el-descriptions-item>
			  <el-descriptions-item label="生日:">10月2日</el-descriptions-item>
			  <el-descriptions-item label="星座:">天枰座</el-descriptions-item>
			  <el-descriptions-item label="属相:">兔</el-descriptions-item>
		      <el-descriptions-item label="所在地:">四川 成都</el-descriptions-item>
		      <el-descriptions-item label="手机号:">13141310134</el-descriptions-item>
		      <el-descriptions-item label="邮箱:">1341063419</el-descriptions-item>
			  <el-descriptions-item label="血型:">其他</el-descriptions-item>
			  
			  <el-descriptions-item label="职业:">学生</el-descriptions-item>
			  <el-descriptions-item label=""></el-descriptions-item>
		      <el-descriptions-item label="备注">
				  <el-tag >有情</el-tag>
					<el-tag >有趣</el-tag>
					<el-tag >贪财好色</el-tag>
		      </el-descriptions-item>
			  <el-descriptions-item label=""></el-descriptions-item><el-descriptions-item label=""></el-descriptions-item>
		      <el-descriptions-item label="联系地址:">四川省成都市郫都区百叶路一号电子科技大学成都学院</el-descriptions-item>
		  </el-descriptions>
		  
		  
		  
		  
		  
			  <p>
				 个性标签 ：<br/>
				 <el-tag
				   :key="tag"
				   v-for="tag in dynamicTags"
				   closable
				   :disable-transitions="false"
				   @close="handleClose(tag)">
				   {{tag}}
				 </el-tag>
				 <el-input
				   class="input-new-tag"
				   v-if="inputVisible"
				   v-model="inputValue"
				   ref="saveTagInput"
				   size="small"

				   @keyup.enter.native="handleInputConfirm"
				   @blur="handleInputConfirm"
				 >
				 </el-input>
				 <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

				  
			  </p>
	
	  
	  
	  
	  
	  <!-- <img  @click="open1" src="../static/images/课程/数学.png"/> -->
	  
	  <h3>照片墙</h3>
	  <el-col :span="11" style="">
	  	<div style="margin-bottom: 0px;" class="demo-image__preview">
	  	  <el-image 
	  		style="width: 350px;height: 500px;"
	  		:src="url1" 
	  		:preview-src-list="srcList1">
	  	  </el-image>
	  	</div>
			  </el-col>
	  
	  <!-- <el-col :span="12" style="background-color: black;"> -->

			<div style="margin-bottom: 0px;" class="demo-image__preview">
			  <el-image 
				style="width: 350px;height: 225px;"
				:src="url3" 
				:preview-src-list="srcList3">
			  </el-image>
			</div>
			
	  	  	<div style="margin-top: 10px;" class="demo-image__preview">
	  	  	  <el-image 
	  	  		style="width: 350px;height: 260px;"
	  	  		:src="url2" 
	  	  		:preview-src-list="srcList2">
	  	  	  </el-image>
	  	  	</div>
	
			
			<!-- </el-col> -->
		  
	  
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
export default {
    data() {
      return {
		size: '',
        dynamicTags: ['爱运动', '爱美食', '看书'],
        inputVisible: false,
        inputValue: '',
		
		radio: '1',
				
		url1: require('../static/images/个人/你可是要考研的人啊.jpeg'),
		srcList1: [
		  require('../static/images/个人/你可是要考研的人啊.jpeg'),
		  require('../static/images/个人/你可是要考研的人啊.jpeg')
		],
		url2: require('../static/images/个人/金榜题名.jpeg'),
		srcList2: [
		  require('../static/images/个人/金榜题名.jpeg'),
		  require('../static/images/个人/金榜题名.jpeg')
		],
		url3: require('../static/images/个人/考验人，冲鸭.jpeg'),
		srcList3: [
		  require('../static/images/个人/考验人，冲鸭.jpeg'),
		  require('../static/images/个人/考验人，冲鸭.jpeg')
		],
		
		
		url4: require('../static/images/个人/1.png'),
		srcList4: [
		  require('../static/images/个人/1.png'),
		  require('../static/images/个人/1.png')
		],
		
		url8: require('../static/images/经验分享/等你出现.png'),
		srcList8: [
		  require('../static/images/经验分享/等你出现.png'),
		  require('../static/images/经验分享/等你出现.png')
		],
		
		
		
		
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
	  
	  
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
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
