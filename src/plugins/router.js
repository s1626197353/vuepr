import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Detail from "../pages/detail.vue";
import Column from "../pages/column.vue";
import Error from "../pages/Error.vue";
import Follow from "../pages/follow.vue";
import Home from "../pages/home.vue";
import Login from "../pages/login.vue";
import Reg from "../pages/reg.vue";
import User from "../pages/user.vue";
import Addhome from "../pages/addform.vue";
import MyText from "../pages/myText.vue";
import Field from "../vantUI/field.vue";

let routes=[
	{path:"/home",component:Home},
	{path:"/follow",component:Follow},
	{path:"/column",component:Column},
	{path:"/user",component:User},
	{path:"/login",component:Login},
	{path:"/reg",component:Reg},
	{name:"detail",path:"/detail/:_id",component:Detail},
	// {path:"/addhome",component:Addhome},
	{path:"/field",component:Field},
	{path:"/myText/:collectionName2/:auth",component:MyText,props:true},
	{path:"/",redirect:"/home"},
	{path:"*",component:Error},
];
 
let router=new VueRouter({
	routes,
	mode:"hash"
});

export default router;