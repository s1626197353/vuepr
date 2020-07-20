<template>
	<div class="pages__padding">
		<SuCell v-for="(item,index) in follow" :key="item._id" :data="item"
		:index="index" collectionName="follow"></SuCell>
	</div>
</template>

<script>
	import SuCell from "../components/su-cell/su-cell.vue";
	
	export default{
		name:"follow",
		data(){
			return{
				follow:[],
			}
		},
		mounted() {
			axios({
				url:"/api/goods/follow",
				params:{
					_limit:15,
				}
			}).then(res=>{
				res.data.err===0 && (this.follow=res.data.data) 
			})
		},
		components:{
			SuCell,
		}
	}
</script>

<style scoped="scoped">
	.follow{
	  padding-top: .6rem;
	}
</style>
