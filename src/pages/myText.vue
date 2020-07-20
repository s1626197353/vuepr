<template>
	<div class="myText">
		<van-nav-bar
		    title="我的博文"
			left-text="返回"
			left-arrow
			@click-left="$router.go(-1)">
			<template #right>
			    <van-icon name="search" size="18" />
			</template>
		</van-nav-bar>
		<SuCell v-for="(item,index) of G_MYTEXT_LIST"
		:data="item" :index="index" :collectionName="collectionName2"></SuCell>
	</div>
</template>

<script>
	import SuCell from "../components/su-cell/su-cell.vue";
	// import {sendAjax} from "../store/services.js";
	import { mapState,mapGetters } from "vuex";
	import {NavBar} from "vant";
	import {icon} from "vant";
	import { Toast } from 'vant';
	
	export default {
		name:"myText",
		components:{
			SuCell,
			[NavBar.name]:NavBar,
			[icon.name]:icon,
		},
		props:["collectionName2","auth"],
		// 打开user界面时，就已经更新博文数据
		// mounted() {
		// 	this.$store.dispatch('myText/'+'A_MYTEXT_LIST',{collectionName:this.collectionName2,auth:this.auth});
		// },
		methods:{
		},
		computed:mapGetters("myText",["G_MYTEXT_LIST"]),
	}
</script>

<style scoped="scoped">
	.myText{
		/* padding-top: 0.6rem; */
	}
</style>
