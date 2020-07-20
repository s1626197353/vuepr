<template>
	<div class="su-input">
		<input :type="type" :value="value" @input="$emit('input',$event.target.value)">
		<span>{{label}}</span>
	</div>
</template>

<script>
	export default{
		name:"su-input",
		props:{
			type:{
				type:String,
				// required:true,
				default:"text",
			},
			label:{
				type:String,
				default:"账号",
			},
			value:{
				type:String,
				default:"",
			}
		}
	}
</script>

<style scoped="scoped">
	.su-input{height:0.95rem; position:relative;border-bottom:1px solid #e5e7e8;}
	.su-input input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
	.su-input span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
</style>
