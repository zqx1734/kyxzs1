<template>
<div class="fram">
<div class="ck">
	<div class="d1">
		<center>

               <img src="../static/images/考研.jpeg" height="100" width="150"/>
			<br>
			<h1>考研小助手</h1>
		</center>
	</div>
	<div class="d2">
		<center>
		<form method="GET" action="/index">

		<!-- <form method="POST" action="{% url 'dj0230:verification' %}"> -->
			用户名：<input class="sr" type="text" name="username" placeholder="请输入用户名" value="admin"/>
			<br><br><br>
			密 &nbsp;&nbsp;&nbsp;码：<input class="sr" type="password" name="password" placeholder="请输入密码" value="1734"/>
			<br><br><br>
			<input class="button" type="submit" value="登录"/>
			<!-- <a class="button" href="../../public/main.html">登录</a> -->
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input class="button" type="reset" value="重置"/>
			<br><br><br><br><br>

		</form>
		</center>
	</div>
</div>
</div>
</template>

<script></script>

<style>
body{
	width:100%;
	height:70vh;
	/* background: url("../static/images/今年明年.jpeg") repeat-y; */
	/* background-size:100%; */
	/*居中对齐弹性盒的各项 <div> 元素*/
	/* display: flex; */
	justify-content: center;
	align-items: center;
}
.fram{
	width:100vw;
	height:95vh;
	background: url("../static/images/今年明年.jpeg") repeat-y;
	background-size:100%;
	display: flex;
}
.ck{

		/* background: url("../static/images/今年明年.jpeg") repeat-y; */
}

 .button{
	/*设置宽度自适应*/
	display:inline;
	margin-top: center;
	margin-left: center;
	font-weight: 600;
	background-color: #8ABBE9;
	border-radius: 0.5em;
	cursor: pointer;
	padding:5px 7px;
 }
 .sr{
	 width: 200px;
 }

 a {
	/*清除下划线*/
	text-decoration: none
	}
.fh{
	margin-bottom:10px
}
.fhdl{
		position:relative;
		/*
		position: absolute;
		position: fixed;
		position: relative;
		*/
		border-radius: 1.5em;
		margin:20px 0 0 20px;
}

#fdLoginBox{
		position: fixed;
		/*
		position: relative;
		*/
		border-radius: 1.5em;
		top:10vh;
		left:5%;

		width: 300px;
		height: 500px;
		/*
		border: 1px solid #999;
		*/
}
#fdLoginBoxD{
		position: fixed;
		/*
		position: relative;
		*/
		border-radius: 1.5em;
		top:10vh;
		left:78%;

		width: 300px;
		height: 500px;
		/*
		border: 1px solid #999;
		*/
}
#fdLoginBoxJ{
		position: fixed;
		/*
		position: relative;
		*/
		border-radius: 1.5em;
		top:40vh;
		left:78%;

		width: 300px;
		height: 500px;
		/*
		border: 1px solid #999;
		*/
}

.fdLogin{

		background-color: #B9E3FF;
		/*绝对定位*/
		/*
		position: fixed;
		border-radius: 1.5em;
		top:10vh;
		left:23vh;
		padding:20px;
		*/
		border-radius: 1.5em;
		padding:20px;
		position: absolute;
		width: 97px;
		height: 90px;
		top: 0px;
		left: 0px;
		opacity: 0.9;
		transition: all 3000ms;
}
.fdLoginDJ{

		background-color: red;
		/*绝对定位*/
		/*
		position: fixed;
		border-radius: 1.5em;
		top:10vh;
		left:23vh;
		padding:20px;
		*/
		/*
		border-radius: 1.5em;
		*/
		padding:4px 4px 0 4px;
		position: absolute;
		opacity: 0.3;
		top: 0px;
		left: 0px;
		transition: all 3000ms;
}

.djswift{
	margin-top:4px;
}
.sb {
	width:5px;
	height:5px;
	background:red;
	position:absolute;
	opacity: 0.5;
}
	
	
	
	
/*窗口*/
.ck{
	overflow: hidden;
	width:500px;
	hegiht:100%;
	background-color: #B9E3FF;
	margin: auto auto;
	border-radius:1.5em;
	opacity: 0.8;
	padding: 0 20px;
}
.cw{
	color:red;
}
button,input{
	margin-top: center;
	margin-left: center;
	height: 30px;
	width: 80px;
	font-weight: 600;
	background-color: #8ABBE9;
	border-radius: 0.5em;
	cursor: pointer;
}



.d1{
	padding:10px 0;
	margin:30px auto;

}
.d2{
	width:300px;
	margin: 0 auto;
}
	
</style>
