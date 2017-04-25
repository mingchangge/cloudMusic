<template>
<!-- 首页content区域主要内容 -->
<div class="recommend" id="Recommend">
  <div class="wrap">
  <v-Login v-if='show' ></v-Login>
    <div class="recommend-left">
      <div class="hot">
    		<div class="hotRecommend">
    			<div class="title">
    				<a>热门推荐</a>
    				<ul>
    					<li v-for='item in tabDate'>
    						<a>{{item.name}}</a>
    					</li>
    				</ul>
    				<span>
    					<a>更多</a>
    				</span>
    			</div>
    			<div class="content">
    				<ul>
    					<li  v-for='(img,index) in imgData'>
    						<div class="img">
                  <router-link v-bind:to="'/AlbumList/'+img.album">
                     <img v-bind:src='img.imgs'/>
                  </router-link>
                  <!-- <router-link :to="{name:'AlbumList',query:[{songtitle:img.album},{index:0}]}">
                     <img v-bind:src='img.imgs'/>
                  </router-link> 这种方法也可-->
                   <div class="bottom">
                    <a class="play" @click.prevent='playClick(img,index)'>
                    
                    </a>
                     <span class="head"></span>
                     <span class="num">126万</span>
                   </div>
                </div>
    						<p class="songBrief">
    							<a>{{img.album}}</a>
    						</p>
    					</li>
    				</ul>
    			</div>
    		</div>
        <v-smallSlider></v-smallSlider>
        <v-list></v-list>
  	  </div>
    </div> 	
  	<div class="recommend-right">
     <v-recommendLogin></v-recommendLogin>
     <v-recommendHOT></v-recommendHOT>
  	</div>
  </div>
</div>  
</template>

<script>
import Login from './Login.vue';
import recommendLogin from './recommendLogin.vue';
import recommendHOT from './recommendHOT.vue';
import smallSlider from './smallSlider.vue';
import albumList from './AlbumList.vue';
import list from './list.vue';
import axios from 'axios';
import {mapActions} from 'vuex';
export default {
  name: 'Recommend',
  data () {
    return {
    	tabDate:[         //首页5种音乐类型
    	   {name:'娱乐'},
    	   {name:'流行'},
    	   {name:'摇滚'},
    	   {name:'民谣'},
    	   {name:'电子'}
    	],
    	imgData:[],  //接受axios取得的8个专辑
      index:0,    //循环imgData下标
      album:''  //获取专辑
    }
  },
  mounted(){
    // 获取首页的8个专辑列表（每个专辑里面存有最近更新的一首歌）
    axios.get('http://localhost:3000/songs/recommedSong')
    .then(res=>{
      this.imgData=res.data;  //将取得的8个专辑赋值给imgData
      // debugger;
      this.$store.commit('isAlbumSong',res.data); //获取查询到的专辑列表歌曲信息
    }).
    catch(err=>{
      console.log(err);
    });
  },
  components:{
    'v-Login':Login,
    'v-recommendLogin':recommendLogin,
    'v-recommendHOT':recommendHOT,
    'v-smallSlider':smallSlider,
    'v-list':list,
    'albumList':albumList
  },
  computed:{
    show:function(){
      return this.$store.state.login.show;    //登陆框的弹出与隐藏
    }
  },
  methods:{
    ...mapActions( // 映射 
      ['login']
    ),
    playClick:function(img,index){
      axios.post('http://localhost:3000/songs/songList',{album:img.album})
        .then(res=>{
          // 将数据库返回的专辑歌曲发送到vuex的isAlbumSong中
          this.$store.commit('isAlbumSong',res.data);
          this.$store.commit('isAutoplay',true);
          // console.log(res.data);
        }).
        catch(err=>{
          console.log(err);
        }); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:hover{
	text-decoration: underline;
}
li{
	list-style: none;
}
.wrap{
	width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background: url('../assets/imgs/wrap1.png') repeat-y 100% 100%;
  overflow: hidden;
}
.recommend-left{
	float: left;
  width: 100%;
  margin-right: -250px;
}
.hideen{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.hot{
	margin-right:250px;
	padding: 20px 20px 40px;
}
.title{
	height: 33px;
  padding: 0 10px 0 34px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
}
.title>a{
	font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  cursor: pointer;
}
.title>a:hover{
	text-decoration: none;
}
.title ul,
.title li{
	display: inline-block;
}
.title ul{
	margin: 7px 0 0 20px;
}
.title li a{
	color: #666;
	cursor: pointer;
}
.title li:after{
	content: '|';
	margin: 0 10px;
  color: #ccc;
}
.title li:last-child::after{
	content: '';
}
.title span{
	float: right;
	margin-top: 9px;
}
.title span a{
	cursor: pointer;
}
.title span a:after{
	display: inline-block;
	content: '';
	width: 12px;
  height: 12px;
  margin-left: 4px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: 0 -240px;
  vertical-align: middle;
}
.content ul{
	margin: 20px 0 0 -42px;
}
.content li{
	display: inline-block;
	padding: 0 0 30px 50px;
	padding-left: 42px;
  vertical-align: text-top;
}
.content .img{
	width: 140px;
  height: 140px;
  position: relative;
}
.img>a{
  display: inline-block;
  background: url('../assets/imgs/coverall.png') no-repeat;
  background-position: 0 0;
  cursor: pointer;
}
.content .bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  color: #ccc;
  background: url('../assets/imgs/coverall.png') no-repeat;
  background-position: 0 -537px;
  overflow: hidden;
}
.bottom .play{
  position: absolute;
  right: 10px;
  bottom: 4px;
  display: inline-block;
  width: 16px;
  height: 17px;
  background: url('../assets/imgs/iconall.png') no-repeat;
  background-position: 0 0;
  cursor: pointer;
}
.bottom .play:hover{
  background-position: 0 -60px;
}
.bottom .head{
  float: left;
  width: 14px;
  height: 11px;
  background: url('../assets/imgs/iconall.png') no-repeat;
  background-position: 0 -24px;
  margin: 9px 5px 9px 10px;
}
.bottom .num{
  float: left;
  margin: 7px 0 0 0;
}
.content p{
	margin: 8px 0 3px 0px;
  font-size: 14px;
  width: 140px;
}
.content p a{
	display: inline-block;
  max-width: 100%;
  color: #000;
  cursor: pointer;
}
.recommend-right{
	float: right;
	width: 250px;
}
.ranking{
  height: 472px;
  margin-top: 20px;
  padding-left: 1px;
  background: url('../assets/imgs/index_bill.png') no-repeat;
}
.ranking dl{
  float: left;
  width: 229px;
}
.ranking dt{
  height: 100px;
  padding: 20px 0 0 19px;
}
.ranking dt a{
  display: inline-block;
  cursor: pointer;
}
.ranking img{
  width: 80px;
  height: 80px;
}
.rankingTitle{
  display: inline-block;
  width: 116px;
  margin: 6px 0 0 10px;
  vertical-align:top;
}
.rankingTitle h3{
  width: 100%;
}
.rankingTitle p{
  margin-top: 10px;
}
.rankingTitle p a{
  display: block;
  float: left;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  text-indent: -9999px;
  background: url('../assets/imgs/index.png') no-repeat;
}
.rankingTitle .rankingPlay{
  background-position: -267px -205px;
}
.rankingTitle .rankingPlay:hover{
  background-position: -267px -235px;
}
.rankingTitle .fav{
 background-position: -300px -205px;
}
.rankingTitle .fav:hover{
  background-position: -300px -235px;
}
.ranking ol{
  height: 319px;
  margin-left: 50px;
  line-height: 32px;
}
.ranking li{
  height: 32px;
}
.ranking li span{
  display: inline-block;
  width: 35px;
  height: 32px;
  margin-left: -35px;
  text-align: center;
  color: #666;
  font-size: 16px;
  vertical-align: top;
}
.ranking li:nth-child(1) span,
.ranking li:nth-child(2) span,
.ranking li:nth-child(3) span{
  color: #c10d0c;
}
.ranking dd a{
  display: inline-block;
  width: 170px;
  height: 32px;
  color:#000;
  cursor: pointer;
}
.rankMore{
  height: 32px;
  margin-right: 32px;
  text-align: right;
  line-height: 32px;
}
</style>