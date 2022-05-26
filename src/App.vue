<template>
 <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
	<router-link to="/test">test</router-link> |
    <router-link to="/login">考研小助手</router-link> |
	<router-link to="/test1">test1</router-link> 
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
	position: relative;
	// position: absolute;
	text-align: center;
	
	// top:10px;
  // padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

nav {
	// position: relative;
	position: absolute;
	text-align: center;
	top:10px;
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
