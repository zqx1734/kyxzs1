<template>

  <el-row>
    <el-col :span="24">
		<div class="grid-content bg-purple-dark">
	<a  style="float: left;margin-left: 80px;height: 100%;" href="/index"><el-button style="margin-top: 2px; height: 100%;" type="primary" plain>返回主页</el-button></a>
	</div></el-col>
  </el-row>
  
  
  <el-row>
	  <el-col :span="20" :offset="2" >
		  	<div>
		  	       <div style="margin: 10px 0">
		  	         <el-carousel :interval="2300" type="card">
		  				  <!-- <el-carousel height="450px"> -->
		  	           <el-carousel-item v-for="item in imgList" :key="item.id">
		  	             <img :src="item.idView" class="" style="width: 100%;height: 100%;">
		  	           </el-carousel-item>
		  	
		  	
		  	         </el-carousel>
		  	       </div>
		  	   </div>

	  </el-col>
	  <el-col :span="20" :offset="2" >
	  		  	<font size="10" color="orange">更多功能有待升级</font>
				
				<br/>
				<el-table
				    v-loading="loading"
				    :data="tableData"
				    style="width: 100%">
				    <el-table-column
				      prop="date"
				      label="升级"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="升级"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="升级"
					  width="300">
				    </el-table-column>
					<el-table-column
					  prop="address"
					  label="升级"
					  width="300">
					</el-table-column>
					<el-table-column
					  prop="address"
					  label="升级"
					  >
					</el-table-column>
				  </el-table>
				  <br/>
				<font size="5" color="red">敬请期待</font>
	  </el-col>
	  
	  

	
	

	
  
  
  
</el-row>
  
  <el-row>
  	  <a name="math"></a>
  	  <a name="english"></a>
  	  <a name="zz"></a>
  	  <a name="load"></a>
    
  </el-row>


<!-- <el-affix position="bottom" :offset="20">
	<el-row>
		  
	  <el-col :span="24"><div class="grid-content bg-purple" >
		
		</div></el-col>
	  
	</el-row>
  </el-affix> -->
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
		imgList: [
		  {id:1,idView:require("../static/images/轮播图/考研经验交流.jpeg")},
		  {id:2,idView:require("../static/images/轮播图/走考研去.jpeg")},
		  {id:3,idView:require("../static/images/轮播图/考研党你为什么要努力.jpeg")},
		],
		  
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
		
		// tableData: [{
		//           date: '2016-05-03',
		//           name: '王小虎',
		//           address: '上海市普陀区金沙江路 1518 弄'
		//         }, {
		//           date: '2016-05-02',
		//           name: '王小虎',
		//           address: '上海市普陀区金沙江路 1518 弄'
		//         }, {
		//           date: '2016-05-04',
		//           name: '王小虎',
		//           address: '上海市普陀区金沙江路 1518 弄'
		//         }],
		loading: true
		
		
		
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
