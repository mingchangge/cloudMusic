<template>
<!-- MyMusic登录后界面 -->
<div class="afterLogin">
    <div class="wrap">
      <div class="left">
        <ul>
          <li>
            <h2>
              <a>我的MV(7)</a>
            </h2>
          </li>
          <li>
            <h2>
              <a>我的电台(2)</a>
            </h2>
          </li>
          <li @click="isShow">
            <h2>
              <i :class="{sj:sjShow,dsj:dsjShow}"></i>
              <span>创建的歌单</span>
              <a class="new">
                <i>新建</i>
              </a>
            </h2>
            <div class="show" v-if='IsShow'>
              <ol>
              <!-- 左侧用户专辑信息" -->
                <li v-for="(a,index) in albums" @click='listClick(index)'>
                  <a>
                    <img src='../assets/imgs/7942872001461517.jpg'/>
                  </a>
                  <span>
                    <p class="title">{{a.album}}</p>
                    <p class="num">2首</p>
                  </span>
                </li>
            </ol>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="rightWrap">
          <v-AlbumListContent :album="album"></v-AlbumListContent>
          <v-AlbumListSong :songs="songs"></v-AlbumListSong>
          <v-Comment></v-Comment>
        </div>
      </div>
    </div>
</div>
</div>  
</template>

<script>
import AlbumListContent from './AlbumListContent.vue';
import AlbumListSong from './AlbumListSong.vue';
import Comment from './Comment.vue';
import axios from 'axios'
export default {
  name: 'afterLogin',
  data () {
    return {
      IsShow:false,    //歌单的显示隐藏属性
      sjShow:true,  //新建歌单的三角属性
      dsjShow:false, //新建歌单展开的三角属性
      index:0,      //遍历服务器传回用户歌单信息数组下标
      albums:'',    //存储服务器传回用户歌单信息
      album:'love',     //存储点击li事件发生后返回专辑名称
      songs:[]
    }
  },
  components:{
    'v-AlbumListContent':AlbumListContent,
    'v-AlbumListSong':AlbumListSong,
    'v-Comment':Comment
  },
  computed:{
     isLoginIn(){  //判断是否登录
      return this.$store.state.login.isLogin;
    },
    isUserInfo(){   //获取存储用户信息
      return this.$store.state.login.userInfo;
    }
  },
  methods:{
    isShow(){
      this.IsShow=!this.IsShow;
      this.sjShow=!this.sjShow;
      this.dsjShow=!this.sjShow;
    },
    listClick(index){
      this.album=this.albums[index].album;  //点击li查找相应歌单列表
      this.songs=this.albums[index].songlist;
      // console.log(this.albums);
      // for(var i=0;i<list.length;i++){   //遍历歌单
      //   let songList=list[i].song;      //歌单歌曲
      //   console.log(songList);
      //   this.$store.commit('isUserlist',list); //将歌曲列表发给全局属性
      //   this.$store.commit('isIndex',index);  //将歌单的数组下标传给isIndex
      // }
    }
  },
  mounted(){
    // 获取存储用户信息
    axios.post('http://localhost:3000/users/getUserInfo',{num:this.isUserInfo.phone||this.isUserInfo[0].phone})
    .then(res=>{
      // eval()不安全，不推荐使用。本次先用着吧
      // 获取用户的歌单信息
      this.albums=eval(res.data[0].songlist); //将res.data转为数组新形式
      // 获取用户第一个歌单并放在list列表里面
      this.songs=this.albums[0].songlist;
    })
    .catch(err=>{
      throw err;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background: url('../assets/imgs/wrap3.png') repeat-y center 0;
  overflow: hidden;
}
.left{
  float: left;
  width: 240px;
  padding-bottom: 50px;
  padding-top: 40px;
  overflow-y: auto;
  overflow-x: hidden;
}
h2{
  height: 36px;
  line-height: 36px;
}
h2 a{
  display: block;
  color: #000;
  font-size: 14px;
  padding: 0 5px 2px 35px;
  font-family: simsun;
  cursor: pointer;
}
h2 span{
  display: inline-block;
  color: #000;
  font-size: 14px;
  font-family: simsun;
  cursor: pointer;
}
.left li:nth-child(3) h2{
  padding: 0 5px 2px 35px;
}
a:hover{
  background: #eee;
}
.sj{
  display: inline-block;
  vertical-align: middle;
  margin-left: -21px;
  cursor: pointer;
  font-size: 0;
  height: 0;
  line-height: 0;
  border: 8px solid #ccc;
  border-color: transparent transparent transparent #ccc;
  border-style: dashed dashed dashed solid;
  margin-right: 0;
}
.dsj{
  display: inline-block;
  vertical-align: middle;
  margin-left: -21px;
  cursor: pointer;
  font-size: 0;
  height: 0;
  line-height: 0;
  border-color: #ccc transparent transparent;
  border-style: solid dashed dashed;
  border-width: 8px 7px 0;
}
.new{
  float: right;
  display: inline-block;
  width: 52px;
  height: 22px;
  padding:0; 
  margin-top: 9px;
  background: url('../assets/imgs/button.png') repeat-y center 0;
  background-position: 0 -96px;
}
.new i{
  display: inline-block;
  line-height: 22px;
  overflow: hidden;
  padding-left: 20px;
  color: #515151;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
}
.new:hover{
  background: url('../assets/imgs/button.png') repeat-y center 0;
  background-position: -94px -39px;
}
.show li{
  height: 42px;
  padding: 6px 0 6px 20px;
  cursor: pointer;
}
.show li img{
  width: 40px;
  height: 40px;
}
.show span,
.show a{
  display: inline-block;
}
.show span{
  vertical-align: top;
  margin-left: 2px;
}
.title{
  display: block;
  width: 140px;
  color: #000;
}
.num{
  width: 130px;
  margin-top: 13px;
  color: #999;
}
.right{
  float: right;
  height: 100%;
  width: 738px;
  padding-bottom: 50px;
}
.rightWrap{
  padding: 40px;
}
</style>
