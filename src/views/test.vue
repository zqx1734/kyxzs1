<template>
	
	ss
	<video width="832px" height="624px" controls>
		<source src="../static/video/数学.mp4" type="video/mp4">
		您的浏览器不支持 video 标签。
	</video>
	
	<video width="320" height="240" controls>
	  <!-- <source src="../static/video/数学.mp4" type="video/mp4"> -->
	  <!-- <source src="movie.ogg" type="video/ogg"> -->
	  <!-- <source src="movie.webm" type="video/webm"> -->
	  <!-- <object data="../static/video/数学.mp4" width="320" height="240"> -->
	    <!-- <embed src="movie.swf" width="320" height="240"> -->
	  <!-- </object> -->
	</video>
	
	
	ss
  <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('<div style="width=400px;height=400px;background-color:#000;">aa<br/>aa<br/>aa<br/>aa</div>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
</script>