<template>
	<div class="pages__padding">
		<!-- <Top v-show="$root.bNav"></Top> -->
		<Banner :data="banner" collectionName="banner"></Banner>
		<su-cell v-for="(item,index) in home" :data="item" :index="index"
		:key="item._id" collectionName="home"></su-cell>
	</div>
</template>

<script>
	import Banner from "../components/su-banner/su-banner.vue";
	import SuCell from "../components/su-cell/su-cell.vue";
	import Top from "./login.vue";
	
	export default{
		name:"home",
		data(){
			return{
				home:[],
				banner:[],
				errorMess:"",
			}
		},
		components:{
			Banner,
			SuCell,
			Top,
		},
		mounted() {
			axios({
				url:"/api/goods/home",
				params:{
					_limit:20,
				}
			}).then(res=>{
				res.data.err===0 && (this.home=res.data.data)
			});
			axios({
				url:'/api/goods/banner',
				params:{
					_limit:3
				}
			}).then(res=>{
			// console.log(res.data);
				res.data.err===0 && (this.banner=res.data.data);
			})
		},
		activated() {
			// axios({
			// 	url:"/api/goods/home",
			// 	params:{
			// 		_limit:20,
			// 	}
			// }).then(res=>{
			// 	res.data.err===0 && (this.home=res.data.data);
			// 	// console.log(res.data.data);
			// });
			// axios({
			// 	url:'/api/goods/banner',
			// 	params:{
			// 		_limit:3
			// 	}
			// }).then(res=>{
			// // console.log(res.data);
			// 	res.data.err===0 && (this.banner=res.data.data);
			// 	// console.log(res.data.data);
			// })
		},
		methods:{
			
		},
		
	}
</script>

<style scoped="scoped">
</style>
