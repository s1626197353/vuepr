import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import myText from "../store/myText.js";

let store = new Vuex.Store({
	modules:{
		myText,
	}
});

export default store;