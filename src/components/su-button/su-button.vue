<template>
	<div>
		<button class="su-button" :style="{background:bgColor}" @click="$emit('click')" v-text="text"></button>
	</div>
</template>

<script>
	export default{
		name:"su-button",
		props:{
			text:{
				type:String,
				default:"按 钮",
			},
			bgColor:{
				type:String,
				default:"blue"
			}
		},
		methods:{
		}
	}
</script>

<style scoped="scoped">
	.su-button{
		width: 4.65rem;
		/* width: 300px; */
		height: 0.65rem;
		background: #4c4f50;
		color: #fff;
		text-align: center;
		line-height: 0.65rem;
		border-radius: 8px;
		display: block;
		margin-top: 0.62rem;
		font-size: 0.28rem;
		border: none;
		outline: none;
		/* 外边线 */
	}
</style>
