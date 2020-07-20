import axios from "axios";
import Vue from "vue";
import router from "./router.js";
import vm from "../main.js";


//添加请求拦截器
axios.interceptors.request.use(function(config) {
	vm.bLoading = true;
	//本地查找storage
	let local = window.localStorage.getItem("user");
	let token = local ? JSON.parse(window.localStorage.getItem("user")).token : "";
	//携带token
	config.headers = {
		token,
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});

//相应拦截器
axios.interceptors.response.use(function(response) {
	vm.bLoading = false;
	//当前路由地址
	let currentRoute = router.currentRoute.fullPath;
	// console.log(currentRoute);
	// console.log(currentRoute.includes("/home"));
	// if(currentRoute.includes("/home")){
		
	// }
	if (response.data.err === 2 && !currentRoute.includes("/login")) {
		router.replace({
			path: "/login",
			query: {
				address: currentRoute
			}
		})
	}
	return response; //奔向组件
}, function(error) {
	// 错误的响应，拦截,也返回到客户端
	return Promise.reject(error);
});


Vue.prototype.$axios = axios;
window.axios = axios; //×
export default axios;
