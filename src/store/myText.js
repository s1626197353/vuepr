import {} from "./types.js";
import sendAjax from "./services.js";
const state={
	list:[]
}

const actions={
	A_MYTEXT_LIST:({commit},{collectionName='home',auth='hello'})=>{
		// console.log(sendAjax)
		sendAjax({collectionName,auth}).then(res=>{
			// console.log("mytext",res.data.data);
			if(res.data.err===0){
				commit("setList",res.data.data);
			}else{
				console.log(res.data);
			}
			
		})
	}
}

const mutations={
	setList:(state,payload)=>{
		state.list=payload;
		// console.log("aaaa",state.list);
	}
}

const getters={
	G_MYTEXT_LIST:(state)=>{
		// console.log("gettt",state.list);
		return state.list;
	}
}

export default {
	namespaced:true,
	state,actions,mutations,getters,
}