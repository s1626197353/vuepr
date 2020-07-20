<template>
	<div id="app">
			<Loading v-show="$root.bLoading"></Loading>
			<!-- <Top></Top> -->
			<Header v-show="$root.bNav"></Header>
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
			<Footer v-show="$root.bFoot"></Footer>
	</div>
</template>

<script>
	import Header from "./layouts/header.vue";
	import Footer from "./layouts/footer.vue";
	import Loading from "./components/su-loading/su-loading.vue";
	import Top from "./pages/login.vue";

	export default {
		name: 'App',
		data: () => ({
			
		}),
		components: {
			Header,
			Footer,
			Loading,
			Top,
		},
		watch:{
			$route:{
				handler(to){// to 要去的路由的信息
					let path=to.path;
					if(/home|follow|column/.test(path)){
						this.$root.bNav=this.$root.bFoot=true;
					}
					if(/detail|login|reg/.test(path)){
						this.$root.bNav=this.$root.bFoot=false;
					}
					// if(/myText/.test(path)){
					// 	this.$root.bNav=false;
					// 	this.$root.bFoot=true;
					// }
					if(/user|myText|field/.test(path)){
						this.$root.bNav=false;
						this.$root.bFoot=true;
					}
				},
				immediate:true,
			}
		},
		mounted(){
		},
		methods: {
			
		}
	}
</script>

<style>
	#app {}
</style>
