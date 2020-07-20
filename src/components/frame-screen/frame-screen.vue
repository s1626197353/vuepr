<template>
	<div class="frame-screen-detail" v-if="type==='detail'">
		<div>
		  <div class="icon">icon</div>
		  <div class="auth_name">auth_name</div>
		</div>
		<div class="title">title</div>
		<hr>
		<div class="time">time</div>
		<div class="content">content</div>
	</div>
	<div class="frame-screen-list" v-else-if="type==='list'">
		<div class="banner">
		  banner
		</div>
		<div class="cell">cell</div>
		<div class="cell">cell</div>
		<div class="cell">cell</div>
		<div class="cell">cell</div>
		<div class="cell">cell</div>
	</div>
</template>

<script>
	export default{
		name:"frame-screen",
		props:{
			type:{
				type:String,
				default:"detail"
			}
		}
	}
</script>

<style scoped="scoped">
	.frame-screen-detail{
		padding-left: 10px;
	}
	.icon{
		width: 100px;
		height: 100px;
		background-color: #ccc;
		display: inline-block;
		margin-top: 20px;
		margin-right: 10px;
	}
	.auth_name{
		width: 100px;
		height: 50px;
		background-color: #ccc;
		display: inline-block;
		margin-top: 20px;
	}
	.title{
		width: 200px;
		height: 50px;
		background-color: #ccc;
		margin-top: 10px;
	}
	.time{
		width: 300px;
		height: 30px;
		background-color: #ccc;
		margin-bottom: 10px;
	}
	.content{
		width: 330px;
		height: 360px;
		background-color: greenyellow;
		/* margin-top: 10px; */
		margin: 0 auto;
	}
</style>
