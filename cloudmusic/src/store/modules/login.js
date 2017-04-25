// state
const state={    //state 保存需要的属性值
	show:false,   //总登录框
	rShow:false,  //注册框
    pShow:false,  //手机登录框
    isLogin:false,  //判断是否登录，登录 true;没登录 false
    userInfo:'',    //存储用户电话、状态、用户名
    userSong:'',
};
const actions={
	login({commit},isShowVal) {
		commit('isShow',isShowVal);
	}
 // 然后在 actions 注册一个事件处理函数，
 // 当这个函数被触发时，将状态提交到 mutaions中处理
};
const mutations={
	isShow(state,isShowVal){  //登录组件显示隐藏
		state.show=isShowVal.show,
		state.rShow=isShowVal.rShow,
		state.pShow=isShowVal.pShow
	},
	isLoginIn(state,data){
		state.isLogin=data;   //判断是否登录，登录 true;没登录 false
		// console.log(state.isLogin);
	},
	isUserInfo(state,info){
		state.userInfo=info;  //存储用户电话、状态、用户名
		console.log(state.userInfo);
	},
	isUserSong(state,data){
		state.userSong=data;
		// console.log(state.userSong);
	},
	// isIndex(state,index){
	// 	state.index=index;
	// 	// console.log(state.index);
	// }
// 更新状态
};
const getters={};

export default {   //导出login.js中的各个模块
	state,
	actions,
	mutations,
	getters
}