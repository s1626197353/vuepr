<template>
	
	<div class="top">
		<div class="logo">
			<img src="/images/logo.jpg" alt="">
		</div>
		<div class="search">
			<input type="text" class="search iconfont icon-sousuo" :placeholder="iconSousuo">
		</div>
		<div class="top-right">
			<span>站点</span>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:"top",
		data(){
			return{
				ipt:"",
				iconSousuo:"\ue621"
			}
		}
	}
</script>

<style scoped="scoped">
	.top{
		height: 30px;
		background-color: papayawhip;
	}
	.logo,.search,.top-right{
		padding-top: 3px;
		display: inline-block;
		vertical-align: middle;
	}
	.logo{
		margin-left: 10px;
		margin-right: 40px;
	}
	.search input{
		border: none;
		border-radius: 10px;
		background-color: aliceblue;
		padding-left: 10px;
		display: inline-block;
		width: 140px;
		outline: none;
	}
	.top-right{
		margin-left: 40px;
	}
	.top-right span{
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 0 6px;
		font-size: 14px;
		cursor: auto;
	}
	.logo img{
		width: 60px;
		height: 20px;
	}
</style>
