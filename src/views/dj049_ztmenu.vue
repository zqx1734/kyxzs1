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
  
<!-- <div style="font-size: 80px;color: red;"> -->


<!-- <el-affix position="bottom" :offset="20"> -->
<font size="10">
	  <el-alert
	  
		  style="width: 50%;height: 50vh;  margin: 0px auto;position: fixed;left: 25%; top:30vh;z-index: 9;opacity: 0.9;"
	      title="本页面资料内容来源于网络,如有侵权,请及时告知!"
		  description="我们将在24小时内处理!!!"
	      type="warning"
		  center=true

	      show-icon
		  >
		  
	    </el-alert></font>
  <!-- </el-affix> -->

		<!-- </div> -->
		
		
		
		
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
				<el-table-column name="math" label="数学一">

				<el-table-column
				  prop="date"
				  label="日期"
				  sortable
				  width="180">
				</el-table-column>
				
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
			  
			  <el-table
					:data="tableData2"
					stripe
					style="width: 90%;margin:20px 5%;"
				:default-sort = "{prop: 'date', order: 'descending'}"
				>
				<el-table-column label="数学二">
				
					<el-table-column
					  prop="date"
					  label="日期"
				  sortable
					  width="180">
					</el-table-column>
				
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
	<!-- 				  <el-link href={} target="_blank">默认链接</el-link> -->

					<a :href="tableData2[0].address" target="_blank">下载</a>
					</el-table-column>
				</el-table-column>
				</el-table>
				
			<el-table
				:data="tableData3"
				stripe
				style="width: 90%;margin:20px 5%;"
				:default-sort = "{prop: 'date', order: 'descending'}"
				>
				<el-table-column label="数学三">
				
				<el-table-column
				  prop="date"
				  label="日期"
				  sortable
				  width="180">
				</el-table-column>
				
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
	<!-- 				  <el-link href={} target="_blank">默认链接</el-link> -->

					<a :href="tableData3[0].address" target="_blank">下载</a>
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
				:data="tableData4"
				stripe
				style="width: 90%;margin:20px 5%;"
				:default-sort = "{prop: 'date', order: 'descending'}"
				>
				<a name="english"></a>
				<el-table-column name="english" label="英语一真题">
				
				<el-table-column
				  prop="date"
				  label="日期"
				  sortable
				  width="180">
				</el-table-column>
				
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

					<a :href="tableData4[0].address" target="_blank">下载</a>
				</el-table-column>
				</el-table-column>
			</el-table>
			  
			  <el-table
					:data="tableData5"
					stripe
					style="width: 90%;margin:20px 5%;"
				:default-sort = "{prop: 'date', order: 'descending'}"
				>
				<el-table-column label="英语一真题解析">
				
					<el-table-column
					  prop="date"
					  label="日期"
				  sortable
					  width="180">
					</el-table-column>
				
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
	<!-- 				  <el-link href={} target="_blank">默认链接</el-link> -->

					<a :href="tableData5[0].address" target="_blank">下载</a>
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
  				:data="tableData6"
  				stripe
  				style="width: 90%;margin:20px 5%;"
  				:default-sort = "{prop: 'date', order: 'descending'}"
  				>
  				<a name="zz"></a>
  				<el-table-column label="政治真题">
  				
  				<el-table-column
  				  prop="date"
  				  label="日期"
  				  sortable
  				  width="180">
  				</el-table-column>
  				
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
  
  					<a :href="tableData6[0].address" target="_blank">下载</a>
  				</el-table-column>
  				</el-table-column>
  			</el-table>
  			  
  			  
  			
  		</div>
  	</el-col>
  </el-row>
  
  
  
  
  
  
  
  
  
  <el-row>
    <el-col :span="22" :offset="1">
		<a name='load'></a>
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
	var dates=[['2019','2018','2017','2016','2015','2014','2013','2012','2011','2010'],
		['2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010'],
		['2018','2017','2016','2015','2014','2013','2012','2011','2010'],
	]
	
	var names=[['2019年考研数学真题+真题解析',
				'2018年考研数学真题+真题解析',
				'2017年考研数学真题+真题解析',
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
	
	var adds=[['https://pan.baidu.com/s/1SY6VCKi98Tp-O_wvwO3o8A?pwd=1734 ',
		'https://pan.baidu.com/s/1-SPnlBvw9qZ5KYefkrFtMQ?pwd=1734',
		'https://pan.baidu.com/s/1kpI_lsO8iMkxIjgTVIHFWQ?pwd=1734',
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
		    date: dates[0][0],
		    name: names[0][0],
		    address: adds[0][0]
		  }, {
		    date: dates[0][1],
		    name: names[0][1],
		    address: adds[0][0]
		  }, {
		    date: dates[0][2],
		    name: names[0][2],
		    address: adds[0][0]
		  }, {
		    date: dates[0][3],
		    name: names[0][3],
		    address: adds[0][0]
		  },{
		    date: dates[0][4],
		    name: names[0][4],
		    address: adds[0][0]
		  },{
		    date: dates[0][5],
		    name: names[0][5],
		    address: adds[0][0]
		  },{
		    date: dates[0][6],
		    name: names[0][6],
		    address: adds[0][0]
		  },{
		    date: dates[0][7],
		    name: names[0][7],
		    address: adds[0][0]
		  },{
		    date: dates[0][8],
		    name: names[0][8],
		    address: adds[0][0]
		  },{
		    date: dates[0][9],
		    name: names[0][9],
		    address: adds[0][0]
		  },
		  ],
		  
		  tableData2: [{
		    date: dates[0][0],
		    name: names[0][0],
		    address: adds[0][1]
		  }, {
		    date: dates[0][1],
		    name: names[0][1],
		    address: adds[0][1]
		  }, {
		    date: dates[0][2],
		    name: names[0][2],
		    address: adds[0][1]
		  }, {
		    date: dates[0][3],
		    name: names[0][3],
		    address: adds[0][1]
		  },{
		    date: dates[0][4],
		    name: names[0][4],
		    address: adds[0][1]
		  },{
		    date: dates[0][5],
		    name: names[0][5],
		    address: adds[0][1]
		  },{
		    date: dates[0][6],
		    name: names[0][6],
		    address: adds[0][1]
		  },{
		    date: dates[0][7],
		    name: names[0][7],
		    address: adds[0][1]
		  },{
		    date: dates[0][8],
		    name: names[0][8],
		    address: adds[0][1]
		  },{
		    date: dates[0][9],
		    name: names[0][9],
		    address: adds[0][1]
		  },
		  ],
		  tableData3: [
		  			  {
		    date: dates[0][0],
		    name: names[0][0],
		    address: adds[0][2]
		  }, {
		    date: dates[0][1],
		    name: names[0][1],
		    address: adds[0][2]
		  }, {
		    date: dates[0][2],
		    name: names[0][2],
		    address: adds[0][2]
		  }, {
		    date: dates[0][3],
		    name: names[0][3],
		    address: adds[0][2]
		  },{
		    date: dates[0][4],
		    name: names[0][4],
		    address: adds[0][2]
		  },{
		    date: dates[0][5],
		    name: names[0][5],
		    address: adds[0][2]
		  },{
		    date: dates[0][6],
		    name: names[0][6],
		    address: adds[0][2]
		  },{
		    date: dates[0][7],
		    name: names[0][7],
		    address: adds[0][2]
		  },{
		    date: dates[0][8],
		    name: names[0][8],
		    address: adds[0][2]
		  },{
		    date: dates[0][9],
		    name: names[0][9],
		    address: adds[0][2]
		  },
		  ],
		  
		  
		  
		  tableData4: [
		  			  {
		    date: dates[1][0],
		    name: names[1][0],
		    address: adds[1][0]
		  }, {
		    date: dates[1][1],
		    name: names[1][1],
		    address: adds[1][0]
		  }, {
		    date: dates[1][2],
		    name: names[1][2],
		    address: adds[1][0]
		  }, {
		    date: dates[1][3],
		    name: names[1][3],
		    address: adds[1][0]
		  },{
		    date: dates[1][4],
		    name: names[1][4],
		    address: adds[1][0]
		  },{
		    date: dates[1][5],
		    name: names[1][5],
		    address: adds[1][0]
		  },{
		    date: dates[1][6],
		    name: names[1][6],
		    address: adds[1][0]
		  },{
		    date: dates[1][7],
		    name: names[1][7],
		    address: adds[1][0]
		  },{
		    date: dates[1][8],
		    name: names[1][8],
		    address: adds[1][0]
		  },{
		    date: dates[1][9],
		    name: names[1][9],
		    address: adds[1][0]
		  },
		  ],
		  
		  
		  tableData5: [
		  		{
		  		  date: dates[1][0],
		  		  name: names[2][0],
		  		  address: adds[1][0]
		  		}, {
		  		  date: dates[1][1],
		  		  name: names[2][1],
		  		  address: adds[1][0]
		  		}, {
		  		  date: dates[1][2],
		  		  name: names[2][2],
		  		  address: adds[1][0]
		  		}, {
		  		  date: dates[1][3],
		  		  name: names[2][3],
		  		  address: adds[1][0]
		  		},{
		  		  date: dates[1][4],
		  		  name: names[2][4],
		  		  address: adds[1][0]
		  		},{
		  		  date: dates[1][5],
		  		  name: names[2][5],
		  		  address: adds[1][0]
		  		},{
		  		  date: dates[1][6],
		  		  name: names[2][6],
		  		  address: adds[1][0]
		  		},{
		  		  date: dates[1][7],
		  		  name: names[2][7],
		  		  address: adds[1][0]
		  		},{
		  		  date: dates[1][8],
		  		  name: names[2][8],
		  		  address: adds[1][0]
		  		},{
		  		  date: dates[1][9],
		  		  name: names[2][9],
		  		  address: adds[1][0]
		  		},
		  		],
		  
		  
		  tableData6: [
		  		{
		  		  date: dates[2][0],
		  		  name: names[3][0],
		  		  address: adds[2][0]
		  		}, {
		  		  date: dates[2][1],
		  		  name: names[3][1],
		  		  address: adds[2][0]
		  		}, {
		  		  date: dates[2][2],
		  		  name: names[3][2],
		  		  address: adds[2][0]
		  		}, {
		  		  date: dates[2][3],
		  		  name: names[3][3],
		  		  address: adds[2][0]
		  		},{
		  		  date: dates[2][4],
		  		  name: names[3][4],
		  		  address: adds[2][0]
		  		},{
		  		  date: dates[2][5],
		  		  name: names[3][5],
		  		  address: adds[2][0]
		  		},{
		  		  date: dates[2][6],
		  		  name: names[3][6],
		  		  address: adds[2][0]
		  		},{
		  		  date: dates[2][7],
		  		  name: names[2][7],
		  		  address: adds[2][0]
		  		},{
		  		  date: dates[2][8],
		  		  name: names[3][8],
		  		  address: adds[2][0]
		  		},
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

</style>
