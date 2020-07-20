<template>
	<div class="content pages__padding">
		<!-- <SuTop></SuTop> -->
		<van-nav-bar
		    title="个人中心"
			left-text="返回"
			left-arrow
			@click-left="$router.go(-1)"
		>
			<template #right>
				<van-icon name="search" size="18" />
			</template>
		</van-nav-bar>
	  <div class="header">
	    <h2><img :src="user.icon" alt=""/></h2>
	    <div class="user-box">
	      <a href="javascript:;" v-text="user.nikename"></a>
	      <a href="javascript:;" @click="logout">注销</a>
	    </div>
	    <ul class="clear">
	      <li>
	        <span>{{user.follow}}</span>
	        <p>关注</p>
	      </li>
	      <li>
	        <span>{{user.fans}}</span>
	        <p class="end">粉丝</p>
	      </li>
	    </ul>
	  </div>
	  <div class="docList">
	    <ul>
			<!-- @click="myText({collectionName:"home",auth:user.username})" -->
	      <li class="gk-text" @click="myText({table:'home',auth:user.username})">
	        <i></i>
	        <p>公开博文</p>
	        <b></b>
	        <span v-text="G_MYTEXT_LIST.length">0</span>
	      </li>
		  <!-- <router-link to=""></router-link> -->
	      <li class="mm-text">
	        <i></i>
	        <p>秘密博文</p>
	        <b></b>
	        <span>0</span>
	      </li>
	      <li class="cg-text">
	        <i></i>
	        <p>草稿箱</p>
	        <b></b>
	        <span>0</span>
	      </li>
	      <li class="sc-text">
	        <i></i>
	        <p>收藏夹</p>
	        <b></b>
	        <span>0</span>
	      </li>
	      <li class="my_cz">
	        <i></i>
	        <p>设置</p>
	      </li>
	    </ul>
	  </div>
	</div>
</template>

<script>
	// import {state} from "../store/myText.js";
	import { NavBar } from 'vant';
	import {icon} from "vant";
	import SuTop from "../components/su-top/su-top.vue";
	import { mapState,mapGetters } from "vuex";
	export default{
		name:"user",
		data(){
			return{
				user:{},
			}
		},
		components:{
			SuTop,
			[NavBar.name]:NavBar,
			[icon.name]:icon,
		},
		//组件挂载时获取该账户的公开博文数量
		mounted(){
			this.$store.dispatch('myText/'+'A_MYTEXT_LIST',{collectionName:'home',auth:this.user.username});
		},
		//得到存储公开博文的数组
		computed:mapGetters("myText",["G_MYTEXT_LIST"]),
		//数组预载，router提供给vue的钩子
		beforeRouteEnter(to,from,next) {
			let local=window.localStorage.getItem("user");
			if(!local){
				next("/login");
				return;
			}else{
				axios({
					url:"/api/user"
				}).then(res=>{
					if(res.data.err===0){
						// console.log(res);
						next(_this=>_this.user=res.data.data);
						// console.log(mapGetters("myText",["G_MYTEXT_LIST"]));
					}else{
						next("/login");
					}
				})
			}
		},
		methods:{
			logout(){
				window.localStorage.removeItem("user");
				this.$router.push("/login");
			},
			myText({table,auth}){
				// console.log(table,auth);
				// console.log("usrerusername",this.user);
				this.$router.push({path:`/myText/${table}/${auth}`});
				// console.log("qqqqqqq",`${table}/${auth}`)
			},
		},
		
	}
</script>

<style scoped="scoped">
	.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem; padding-top: 0;}
	.content .header{width:6.4rem;height:2.84rem; background:#9e9a95; padding-top:0.4rem;}
	.header h2{width:1.02rem;height:1.02rem; border-radius:50%; margin:0 auto;}
	.header h2 img{width:100%;}
	.header .user-box{width:2.44rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;}
	.user-box a{color:#fff;margin-right: 0.2rem;display: inline-block;}
	.header ul{ margin-top:0.4rem;}
	.header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
	.header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
	.header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
	.header ul li p.end{ border:0;}
	
	.content .docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
	.docList ul{ border-top:1px solid #7b7c7c;}
	.docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
	.docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
	.docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}
	
	
	.docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
	.docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/img/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
	.mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
	.docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
	.docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
	.docList ul .my_cz{ margin-top:0.45rem;}
	.docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
</style>
