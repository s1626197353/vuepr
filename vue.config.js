module.exports={
	//选项
	devServer:{
		//代理
		proxy:{
			"/api":{
				// target:"http://sunmingfa.top:3333",
				target:"http://fd:9001",
				changeOrigin:true,
				ws:true,
			}
		}
	}
}