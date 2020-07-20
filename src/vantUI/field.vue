<template>
	<div class="field">
		<van-nav-bar
		    title="写博文"
			left-text="返回"
			left-arrow
			@click-left="$router.go(-1)">
			<template #right>
			    <van-icon name="search" size="18" />
			</template>
		</van-nav-bar>
		<van-cell-group class="field">
		  <van-field v-model="title" label="标题" placeholder="请输入标题"></van-field>
		  <van-field v-model="des" label="描述" placeholder="请输入描述"></van-field>
		  <van-field v-model="auth" label="作者" placeholder="请输入作者"></van-field>
		  <van-field
			v-model="content"
			rows="8"
			autosize
			label="内容"
			type="textarea"
			maxlength="1024"
			placeholder="请输入内容"
			show-word-limit
			label-width="30px"
		  ></van-field>
		</van-cell-group>
		<p>
			<span>上传图片：</span>
			<van-uploader :after-read="afterRead" v-model="auth_icon" multiple :max-count="1" />
		</p>
		<!-- <input type="button" class="submit" @click="submits" value="提交">
		<input type="reset" value="reset" @click="resets"> -->
		<p>
			<div class="button-sub">
				<van-button color="#7232dd" plain  @click="submits">提交</van-button>
			</div>
			<div class="button-res">
				<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
				 @click="resets" >reset</van-button>
			</div>
		</p>
	</div>
</template>

<script>
	import axios from "axios";
	import {Field} from "vant";
	import {Uploader} from "vant";
	import {CellGroup} from "vant";
	import {Button} from "vant";
	import {NavBar} from "vant";
	import {icon} from "vant";
	export default {
		name:"field",
		data:()=>{
			return{
				title:"",
				des:"",
				auth:"",
				content:"",
				auth_icon:[],
			}
		},
		components:{
			[Field.name]:Field,
			[Uploader.name]:Uploader,
			[CellGroup.name]:CellGroup,
			[Button.name]:Button,
			[NavBar.name]:NavBar,
			[icon.name]:icon,
		},
		methods:{
			afterRead(){
				// console.log(this.auth_icon);
			},
			submits(){
				let formData=new FormData();
				formData.append("title",this.title);
				formData.append("des",this.des);
				formData.append("auth",this.auth);
				formData.append("content",this.content);
				if(this.auth_icon.length!==0){
					// console.log(this.auth_icon.length);
					formData.append("auth_icon",this.auth_icon[0].file);
				}
				// console.log(this.auth_icon[0].file);
				axios({
					url:"/api/addhome/home",
					method:"post",
					data:formData,
				}).then(res=>{
					if(res.data.err===0){
						// document.querySelector("form").reset();
						this.title=this.des=this.auth=this.content="";
						this.auth_icon=[];
						console.log(res.data);
					}else{
						alert(res.data.msg);
						console.log(res.data);
					}
				})
			},
			resets(){
				this.title=this.des=this.auth=this.content="";
				this.auth_icon=[];
			},
		}
	}
	
</script>

<style scoped="scoped">
	.field{
		/* padding-top: 0.6rem; */
		padding-bottom: 0.6rem;
	}
	.field span{
		vertical-align: top;
	}
	.field .submit{
		display: inline-block;
		width: 100px;
		height: 40px;
		font-size: 24px;
	}
	.field .submit+input{
		display: inline-block;
		width: 100px;
		height: 40px;
		font-size: 24px;
	}
	.button-sub, .button-res{
		display: inline-block;
		margin: 20px;
	}
</style>
