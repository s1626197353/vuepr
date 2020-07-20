<template>
	<div class="addform">
		<form id="addhome" enctype='multipart/form-data'>
			<p>
				<label for="title">title:</label>
				<input type="text" name="title" id="title" placeholder="title">
			</p>
			<p>
				<label for="des">des:</label>
				<input type="text" name="des" id="des" placeholder="des">
			</p>
			<p>
				<label for="auth">auth:</label>
				<input type="text" name="auth" id="auth" placeholder="auth">
			</p>
			<p>
				<span>content:</span>
				<textarea name="content" id="" cols="40" rows="10"></textarea>
			</p>
			<input type="file" enctype="multipart/form-data" name="auth_icon">
			<input type="button" class="submit" @click="submits" value="提交">
			<input type="reset" value="reset" @click="resets">
		</form>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:"addForm",
		methods:{
			submits(){
				let formData=new FormData(document.querySelector("form"));
				// console.log(formData.getItem("title"));
				axios({
					url:"/api/addhome/home",
					method:"post",
					data:formData,
				}).then(res=>{
					if(res.data.err===0){
						document.querySelector("form").reset();
						console.log(res.data);
					}else{
						alert(res.data.msg);
						console.log(res.data);
					}
				})
			},
			resets(){},
		}
	}
</script>

<style>
	.addform{
	  padding-top: 0.6rem;
	  padding-bottom: 0.6rem;
	}
	.addform p{
		margin: 20px;
	}
	.addform label{
		display: inline-block;
		width: 50px;
	}
	.addform input{
		border: 1px solid #ccc;
		display: inline-block;
		margin: 10px;
	}
	.addform textarea{
		margin: 10px;
		resize: none;
		/* margin-left: 10px; */
		border: 1px solid #ccc;
	}
	.addform .submit{
		display: inline-block;
		width: 100px;
		height: 40px;
		font-size: 24px;
	}
	.addform .submit+input{
		display: inline-block;
		width: 100px;
		height: 40px;
		font-size: 24px;
	}
</style>
