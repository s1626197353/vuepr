import Vue from 'vue'
import App from './App.vue'
// import { NavBar } from 'vant';

// Vue.use(NavBar);

Vue.config.productionTip = false;

//引入样式和字体
import "./assets/css/base.css";
import "./assets/js/font.js";

//引入路由和axios
import router from "./plugins/router.js";
import "./plugins/axios";//可以不加.js

import store from "./plugins/vuex.js";

import date from "./filters/data.js";
import fillzero from "./filters/fillzero.js";
Vue.filter("date",date);
Vue.filter("fillzero",fillzero);

let vm=new Vue({
	data:{
		bNav:true,
		bFoot:true,
		bLoading:false,
	},
  render: h => h(App),
  router,
  store,
}).$mount('#app')
export default vm;