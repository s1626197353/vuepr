import axios from "axios";

//导出ajax函数
export default function sendAjax({collectionName,auth,params={_page:1, _limit: 10}}){
	let url = "/api/myarticle/" + collectionName + "/" + auth;
	// console.log(url)
	return axios({
		url,params,
	})
	// .then(res=>{
	// 	console.log(res)
	// 	res.data;
	// });
}

// export default {sendAjax}