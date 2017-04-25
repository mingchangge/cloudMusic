// state
const state={    //state 保存需要的属性值
	AlbumSong:[
		{
			imgs:undefined,
			song:undefined,
			singer:undefined
		},
	] ,//专辑列表里的歌曲及信息
	current:{},//当前歌曲信息
	index:0,//不在controlBar中定死index，使其他页面可变index值
	autoplay:true //记录播放器autoplay属性，bug：第一首歌失灵
};
const actions={
	
 // 然后在 actions 注册一个事件处理函数，
 // 当这个函数被触发时，将状态提交到 mutaions中处理
};
const mutations={
	isAlbumSong(state,album){
		state.AlbumSong=album;  //专辑歌曲信息
		// console.log(state.AlbumSong);
	},
	isCurrent(state,curr){ //当前歌曲信息
		state.current=curr;
		// console.log(state.current);
	},
	setCurrentIndex(state,index){ //动态改变当前歌曲信息
		state.current=state.AlbumSong[index];
		// console.log(state.current);
	},
	isindex(state,index){
		state.index=index;
	},
	isAutoplay(state,autoplay){
		state.autoplay=autoplay;  //记录播放器autoplay属性，bug：第一首歌失灵
	}
// 更新状态
};
const getters={};

export default {   //导出login.js中的各个模块
	state,
	actions,
	mutations,
	getters
}