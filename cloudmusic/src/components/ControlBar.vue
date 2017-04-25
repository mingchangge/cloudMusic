<template>
<!-- 音乐播放器 全局组件 -->
<div class="controlBar">
	<div class="wrap">
	  <audio :src="isCurrent.src" id="audio" :autoplay="isAutoplay" @ended="nextClick" @timeupdate="timeUpdate" @play="playState" @pause="pauseState"></audio>
	  <div class="content">
	  	<div id="btn">
	  		<div class="btn">
			 	<a class="pre" @click.prevent='preBtn(index)'></a>
			 	<a class="play" @click.prevent="playMusic" id="ifPlay"></a>
			 	<a class="next" @click.prevent="nextClick(index)"></a>
		 	</div>
		 	<div class="img">
			 	<img :src='isCurrent.imgs'/>
			    <a></a>
		 	</div>
	  	</div>
		 
		 <!-- 进度条 -->
		 <div class="pro"  id="proBar">
		    <div class="songKey">
		    	<a class="song">{{isCurrent.song}}</a>
		    	<span class="author">
		    		<a>{{isCurrent.singer}}</a>
		    	</span>
		    </div>
		 	<div class="proBar" @click="barDrag">
		 		<div class="start" id="start">
		 			<span></span>
		 		</div>
		 	</div>
		 	<span class="time">
			 	<em>
			 		{{currtime}}
			 	</em>
		 	/ {{duratime}}
		 	</span>
		 </div>
		 <div class="favShare">
		 	<a class="fav"></a>
		 	<a class="share"></a>
		 </div>
		 <div class="volLoop">
		 	<div class="volBar" v-show="volShow">
		 		<div class="barBg"></div>
		 		<div class="volRed">
		 			<div class="curr"></div>
		 			<span class="volBtn" id="bar"></span>
		 		</div>
		 	</div>
		 	<a class="vol" @click.prevent="volBarShow">声音</a>
		 	<a class="loop">循环</a>
		 	<a class="playList" @click.prevent='listBtn'>{{isAlbumSong.length}}</a>
		 </div>
	  </div>
	  <div class="list" v-show="listShow">
	  	<div class="listBg">
	  		<div class="title">
	  			<h4>播放列表</h4>
	  			<a class="listFav">收藏</a>
	  			<span class="line"></span>
	  			<a class="clear">清除</a>
	  		</div>
	  		<div class="listContent">
	  			<div class="listCollect">
	  				<table>
	  					<tr v-for='(arr,index) in isAlbumSong' @click.prevent="playthis(index)">
	  						<td><img :src='arr.imgs'/></td>
	  						<td>
	  							<a>{{arr.song}}</a>
	  						</td>
	  						<td>
	  							<a>{{arr.singer}}</a>
	  						</td>
	  					</tr>
	  				</table>
	  			</div>
	  			<div class="bline">
	  				<span class="scrol"></span>
	  			</div>
	  		</div>
	  	</div>
	  </div>	
	</div>
</div>  
</template>

<script>
import axios from 'axios';
export default {
  name: 'controlBar',
  data () {
    return {
    	autoplay:false, //播放器autoplay属性和播放图标绑定
    	current:'',    //当前歌曲
    	index:0,   //数组下标
    	volShow:false,    //音量条的显示或隐藏
    	listShow:false,  //播放列表的显示或隐藏
    	currtime:'00:00',  //音频当前时长
    	duratime:'00:00'  //音频总时长
    }
  },
  computed:{
    isAlbumSong:function(){  //专辑列表信息
    	// debugger;
      return this.$store.state.song.AlbumSong; 
    },
    isCurrent:function(){ //当前的歌曲信息
    	if(this.$store.state.song.AlbumSong.length>0){
    		this.$store.commit('setCurrentIndex',this.isindex);
    	}
    	// console.log(this.$store.state.song.current);
    	return this.$store.state.song.current; 
    },
    isindex(){  //不在controlBar中定死index，使其他页面可变index值
    	return this.$store.state.song.index;
    },
    isAutoplay(){
    	return this.$store.state.song.autoplay;
    }
  },
  methods:{
	  	playMusic(){
	  		// 播放器播放和暂停
	  		if(this.$store.state.song.AlbumSong.length>0){
	  			if(audio.paused){
		  			audio.play();
		  			this.$store.commit('isAutoplay',true);		
		  		}else{
	               audio.pause();
	               this.$store.commit('isAutoplay',false);   
		  		}
	  		}
	  	},
	  	playState(){
	  		ifPlay.className='pause'; //切换开始暂停图标
	  	},
	  	pauseState(){
	  		ifPlay.className='play'; //切换开始暂停图标
	  	},
	  	nextClick(index){ //下一首
	  		if(this.$store.state.song.AlbumSong.length>0){
	  			if((this.$store.state.song.index)<(this.$store.state.song.AlbumSong.length-1)){
	  				this.index+=1;
	  				this.$store.commit('isindex',this.index);
	  			}else{
	  				this.index=0;
	  				this.$store.commit('isindex',this.index);
	  				  //切换到第一首歌
	  			}
	  			this.$store.commit('setCurrentIndex',this.isindex);
	  			// console.log(this.$store.state.song.current);
	  		}
	  	},
	  	preBtn(index){  //上一首
	  		if(this.$store.state.song.AlbumSong.length>0){
	  			if(this.index>0){
	  				this.index-=1;
	  				this.$store.commit('isindex',this.index);
	  			}else{
	  				//切换到最后一首歌
	  				this.index=this.$store.state.song.AlbumSong.length-1;
	  				this.$store.commit('isindex',this.index); 
	  			}
	  			this.$store.commit('setCurrentIndex',this.isindex);
	  		}	
	  	},
	  	volBarShow:function(){
	  		//音量条的显示和隐藏
	  		this.volShow = !this.volShow;
	  	},
	  	listBtn(){
	  		//播放列表的显示和隐藏
	  		this.listShow=!this.listShow;
	  	},
	  	playthis(index){
	  		this.index=index;
	  		this.$store.commit('isindex',this.index);
	  		this.$store.commit('setCurrentIndex',this.isindex);
	  	},
	  	timeUpdate(){
	  	    start.style.width=(audio.currentTime / audio.duration).toFixed(2)*100+'%';
	  		if (this.$store.state.song.AlbumSong.length) {
                this.duratime=this.timeFormat((audio.duration / 60).toFixed(2))
                this.currtime = this.timeFormat((audio.currentTime / 60).toFixed(2));
            }
	  	},
	  	barDrag(e){
	  		if(this.$store.state.song.AlbumSong.length){
	  			var targLength = e.clientX - proBar.offsetLeft;
                start.style.width = (targLength / 490).toFixed(2) * 100 + '%';
                audio.currentTime = (targLength / 490) * audio.duration;
	  		}
	  	},
	  	 timeFormat(time) {//时间格式化函数
            var result = '';
            if (time > 0) {
                var minScd = time.split('.');
                var min = minScd[0], scd = minScd[1];
                //分钟的判断
                if (scd > 59) {
                    min = parseInt(min) + 1;
                }
                if (min < 10) {
                    min = '0' + min;
                }
                //秒的判断
                scd = scd % 60;
                if (scd < 10) {
                    scd = '0' + scd;
                }
                result = min + ':' + scd;
            } else {
                result = '00:00';
            }
            return result;
        }
  	},
  	mounted(){
  		//页面mounted时获取元素
  		var audio=document.querySelector('#audio');
	  	var ifPlay=document.querySelector('#ifPlay');
	  	var start=document.querySelector('#start');
	  	var bar=document.querySelector("#bar");
	  	var btn=document.querySelector("#btn");
	  	var proBar=document.querySelector("#proBar");
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
	cursor: pointer;
}
.wrap{
	position: fixed;
	z-index: 10000;
	bottom: 0;
	width: 100%;
	height: 53px;
	background: url('../assets/imgs/playbar.png');
	background-position: 0 0;
}
.content{
	width: 980px;
    height: 47px;
    margin: 0 auto;
}
.btn,
.img,
.pro,
.favShare,
.volLoop{
	float: left;
}
.btn{
	width: 137px;
    padding: 13px 0 0 0;
}
.pre{
	display: inline-block;
	width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    background: url('../assets/imgs/playbar.png');
    background-position: 0 -130px;
}
.pre:hover{
	background-position: -30px -130px;
}
.play{
	display: inline-block;
	vertical-align: bottom;
	width: 36px;
    height: 36px;
    margin-top: 0;
    margin-right: 8px;
    background: url('../assets/imgs/playbar.png');
    background-position: 0 -204px;
}
.play:hover{
	background-position: -40px -204px;
}
.pause{
	display: inline-block;
	vertical-align: bottom;
	width: 36px;
    height: 36px;
    margin-top: 0;
    margin-right: 8px;
	background: url('../assets/imgs/playbar.png');
	background-position: -40px -165px;
}
.pause:hover{
	background-position: -40px -165px;
}
.next{
	display: inline-block;
	width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    background: url('../assets/imgs/playbar.png');
    background-position: -80px -130px;
}
.next:hover{
	background-position: -110px -130px;
}
.img{
	position: relative;
	margin: 15px 15px 0 0;
	width: 34px;
    height: 34px;
}
.img a{
	display: inline-block;
	width: 34px;
    height: 35px;
    position: absolute;
    left: 0;
    top: 0;
    background: url('../assets/imgs/playbar.png');
    background-position: 0 -80px;
}
.img img{
	width: 34px;
    height: 34px;
}
.pro{
	width: 493px;
	position: relative;
}
.songKey{
	height: 28px;
    overflow: hidden;
    color: #e8e8e8;
    margin: 2px 0 0 27px;
    text-shadow: 0 1px 0 #171717;
    line-height: 28px;
}
.song{
	display: inline-block;
	margin-top: 4px;
	max-width: 300px;
	color: #e8e8e8;
}
.song:hover{
	text-decoration: underline;
}
.author{
	color: #9b9b9b;
}
.author:hover{
	text-decoration: underline;
}
.proBar{
	height: 9px;
	background: url('../assets/imgs/statbar.png');
    background-position: right 0;
    width: 490px;
    position: relative;
}
.start{
	position: absolute;
    top: 0;
    left: 0;
    height: 9px;
    background: url('../assets/imgs/statbar.png') no-repeat;
    background-position: left -66px;
}
.start span{
	position: absolute;
    top: -7px;
    right: -13px;
    width: 22px;
    height: 24px;
    margin-left: -11px;
    background: url('../assets/imgs/iconall.png');
    background-position: 0 -250px;
}
.start span:hover{
	background-position: 0 -280px;
}
.time{
	position: absolute;
    top: 25px;
    right: -84px;
    color: #797979;
    text-shadow: 0 1px 0 #121212;
}
.time em{
	font-style: normal;
	color: #a1a1a1;
}
.favShare{
	width: 60px;
	margin: 6px 0 0 91px;
} 
.favShare a,
.volLoop a{
	display: inline-block;
	vertical-align: bottom;
	width: 25px;
    height: 25px;
    margin: 11px 2px 0 0;
    font-size: 0;
}
.fav{
    background: url('../assets/imgs/playbar.png');
    background-position: -88px -163px;
}
.fav:hover{
    background-position: -88px -189px;
}
.share{
	background: url('../assets/imgs/playbar.png');
	background-position: -114px -163px;
}
.share:hover{
	background-position: -114px -189px;
}
.volLoop{
	padding-left: 13px;
	margin-top: 6px;
	background: url('../assets/imgs/playbar.png') no-repeat;
	background-position: -147px -238px;
	position: relative;
}
.volBar{
	position: absolute;
    top: -113px;
    left: 9px;
    clear: both;
    width: 32px;
    height: 113px;
}
.barBg{
	position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 113px;
    background: url('../assets/imgs/playbar.png');
    background-position: 0 -503px;
}
.volRed{
	position: absolute;
    top: 7px;
    left: 14px;
    width: 4px;
    height: 93px;
    padding: 4px 0;  
}
.curr{
	height: 74.4px;
	position: relative;
	top: auto;
    bottom: -19px;
    left: 0;
    background: url('../assets/imgs/playbar.png');
    background-position: -40px bottom;
    overflow: hidden;
}
.volBtn{
	position: absolute;
	top: 16.2px;
    left: -7px;
    display: block;
    width: 18px;
    height: 20px;
    background: url('../assets/imgs/iconall.png');
    background-position: -40px -250px;
    cursor: pointer;
}
.vol{
	background: url('../assets/imgs/playbar.png');
	background-position: -2px -248px;
}
.vol:hover{
	background-position: -31px -248px;
}
.loop{
	background: url('../assets/imgs/playbar.png');
	background-position: -3px -344px;
}
.loop:hover{
	background-position: -33px -344px;
}
.volLoop .playList{
	width: 46px;
    padding-left: 13px;
    line-height: 27px;
    text-align: center;
    font-size: 12px;
    color: #666;
    text-shadow: 0 1px 0 #080707;
    background: url('../assets/imgs/playbar.png');
    background-position: -42px -68px;	
}
.playList:hover{
	background-position: -42px -98px;
}
.list{
	position: absolute;
    left: 95%;;
    bottom: 47px;
    width: 560px;
    height: 301px;
    margin-left: -493px;
    overflow: hidden;
}
.listBg{
    height: 41px;
    padding: 0 5px;
    background: url('../assets/imgs/playlist_bg.png');
	background-position: 0 0;
}
.title{
	position: relative;
    height: 40px;
}
.title h4{
	position: absolute;
    left: 25px;
    top: 0;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
    color: #e2e2e2;
}
.title a{
	color: #ccc;
	cursor: pointer;
}
.title:hover{
	text-decoration: underline;
}
.listFav{
	position: absolute;
    left: 398px;
    top: 12px;
    height: 15px;
    line-height: 15px;
}
.line{
	position: absolute;
    top: 13px;
    left: 477px;
    height: 15px;
    border-left: 1px solid #000;
    border-right: 1px solid #2c2c2c;
}
.clear{
	position: absolute;
    left: 490px;
    top: 12px;
    height: 15px;
    line-height: 15px;
    cursor: pointer;
}
.listContent{
	position: absolute;
    left: 0;
    top: 41px;
    width: 976px;
    height: 260px;
    padding: 0 5px;
    overflow: hidden;
    background: url('../assets/imgs/playlist_bg.png');
    background-position: -1014px 0;
    background-repeat: repeat-y;
}
.listCollect{
	position: absolute;
    left: 2px;
    top: 0;
    z-index: 4;
    height: 260px;
    width: 553px;
    overflow: hidden;
}
.listCollect tr{
	height: 20%;
}
.listCollect tr:hover{
    background-color: rgba(0,0,0,0.4);
}
.listCollect td{
	width: 22%;
}
.listCollect img{
	width: 15%;
}
.listCollect a{
	color: #ccc;
}
.listCollect a:hover{
	text-decoration: underline;
}
.bline{
	position: absolute;
    left: 555px;
    top: -1px;
    z-index: 2;
    width: 6px;
    height: 260px;
    background: #000;
    opacity: .5;
}
.scrol{
	height: 67.0635px;
    display: block;
    top: 20px;
	position: absolute;
    left: 0;
    width: 4px;
    border-radius: 5px;
    cursor: pointer;
    background: #868686;
    border: 1px solid #a6a6a6;
    opacity: .8;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
