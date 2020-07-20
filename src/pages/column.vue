<template>
	<div class="column pages__padding">
		<SuCell v-for="(item,index) in column" :data="item" :key="item._id"
		collectionName="column"></SuCell>
	</div>
</template>

<script>
	import SuCell from "../components/su-cell/su-cell.vue";
	
	export default{
		name:"column",
		data(){
			return{
				column:[],
			}
		},
		mounted() {
			axios({
				url:"/api/goods/column",
				params:{
					_limit:12
				}
			}).then(res=>{
				res.data.err===0 && (this.column=res.data.data)
			})
		},
		components:{
			SuCell,
		}
	}
</script>

<style scoped="scoped">
</style>
