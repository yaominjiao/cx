import Vue from 'vue'
import App from '@/app'
import router from '@/router/index'
import base from '@/common/js/base'
import store from '@/store/index'
import '@/common/css/reset.less'


let themeClass = (function(otherSource){
	let strVal="headVuea";
	switch(otherSource){
		case "1":strVal = "headVuea";break;
		case "2":strVal = "headVueb";break;
		case "3":strVal = "headVuec";break;
	}
	return strVal;
})("".getQueryString("otherSource"));


new Vue({
	el:"#app",
	data:{
		themeClass:themeClass
	},
	router,
	store,
	template:"<App :themeClass='themeClass'/>",
	components:{App}
})