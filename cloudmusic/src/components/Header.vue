<template>
<!-- 页面头部组件 -->
  <div class="header">
    <div class="topBar h-top">
     <div class="wrap">
     <v-Login v-if='show' ></v-Login>
       <h1 class="logo">
        <a>网易云音乐</a>
       </h1>
       <nav>
         <ul class="nav-ul">
           <router-link tag="li" to="/" class="liFMusic">
           <span>
              <a>
                <em>发现音乐</em>
                 <sup  class="selected"></sup>
              </a>
           </span>
           </router-link>
           <router-link tag="li" to="/MyMusic">
            <span>
              <a>
                <em>我的音乐</em>
              </a>
            </span>
           </router-link>
           <li>
            <span>
              <a>
                <em>朋友</em>
              </a>
            </span>
           </li>
           <li>
            <span>
              <a>
                <em>商城</em>
              </a>
            </span>
           </li>
           <li>
            <span>
              <a>
                <em>音乐人</em>
              </a>
            </span>
           </li>
           <li>
            <span>
              <a>
                <em>下载客户端</em>            
              </a>
            </span>
            <sub class="hot"></sub>
           </li>
         </ul>
         <input type="text" name="" placeholder="单曲/歌手/专辑/歌单/MV/用户"/>
         <div class="outer" v-if="!isLoginIn">
           <a v-on:click='login({show:true})'>登录</a>
           <i class="sj"></i>
           <div class="inner">
             <ul>
               <li>
                 <i class="phone"></i>
                 <a @click="login({show:true,pShow:true})">手机号登录</a>
               </li>
               <li>
                 <i class="wechat"></i>
                 <a>微信登录</a>
               </li>
               <li>
                <i class="qq"></i>
                 <a>QQ登录</a>
               </li>
               <li>
                <i class="sina"></i>
                 <a>新浪微博登录</a>
               </li>
               <li>
                <i class="netease"></i>
                 <a>网易邮箱帐号登录</a>
               </li>
             </ul>
           </div>
         </div>
         <!--isLoginIn  -->
         <div class="outer" v-if="isLoginIn">
         <!-- -->
           <p>{{isUserInfo.user||isUserInfo[0].username }}
              <a @click="exit">退出</a>
           </p>
         </div>
       </nav>
     </div>
    </div>
     <div class="nav2">
        <nav class="wrap">
           <ul>
            <li>
             <a class="tuiJian">
              <em>推荐</em>
             </a>
            </li>
            <li>
             <a>
              <em>排行榜</em>
             </a>
            </li>
            <li>
             <a>
              <em>歌单</em>
             </a>
            </li>
            <li>
             <a>
              <em>主播电台</em>
             </a>
            </li>
            <li>
             <a>
              <em>歌手</em>
             </a>
            </li>
            <li>
             <a>
              <em>新碟上架</em>
             </a>
            </li>
           </ul>
        </nav>
       </div>  
  </div>
</template>

<script>
import Login from './Login.vue';
import {mapActions} from 'vuex';
import axios from 'axios';
export default {
  name: 'Header',
  data () {
    return {
      showcom:''
    }
  },
  components:{
    'v-Login':Login
  },
  methods:{
    ...mapActions( // 映射 this.increment() 为 this.$store.dispatch('increment')
      ['login']
    ),
    exit(){
      axios.get('/users/exit')
        .then(res=>{
          this.$store.commit('isLoginIn',false);
        }).
        catch(err=>{
          console.log(err);
        });
    }
  },
  computed:{
    show:function(){
      return this.$store.state.login.show;
    },
    isLoginIn(){
      return this.$store.state.login.isLogin;
    },
    isUserInfo(){
      return this.$store.state.login.userInfo;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  font-size: 12px;
  color: #333;
}
.topBar,nav li{
  background: url('../assets/imgs/topbar.png') no-repeat 0 9999px;
}
.h-top{
  width: 100%;
  height: 70px;
  margin: 0 auto;
  background-position: 0 -80px;
  background-repeat: repeat-x;
}
.wrap{
  width: 1100px;
  margin:0 auto;
}
.logo{
  float:left;
  width: 176px;
}
.logo a{
  float:left;
  font-size: 0;
  width: 157px;
  height: 33px;
  padding: 22px 20px 0 0;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: 0 15px;
}
nav{
  height: 70px;
}
nav .nav-ul{
  float: left;
  list-style: none;
  height: 70px;
}
.nav-ul li{
  float: left;
  height: 70px;
  cursor: pointer;
  background-position: right -300px;
  position: relative;
}
.nav-ul li:after{
  content: '';
  clear: both;
}
.nav-ul li:last-child{
  background: none;
}
.nav-ul li:last-child a em{
  padding-right: 40px;
}
.nav-ul li span{
  display: inline-block;
  height: 70px;
  font-size: 14px;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: left -300px;
}
.nav-ul a{
  float: left;
  padding-left: 2px;
  text-align: center;
  height: 70px;
  line-height: 76px;
  font-size: 14px;
}
.nav-ul em{
  display: inline-block;
  font-style: normal;
  padding: 0 20px 0 18px;
  color: #ccc;
  font-size: 14px;
  height: 70px;
  text-shadow: 0 1px 0 #1b1b1b;
  cursor: pointer;
}
.nav-ul a:hover{
  margin: 0 -1px;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: left -155px;
  text-decoration: none;
}
.nav-ul a:hover em{
  padding: 0 21px 0 19px;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: right -155px;
  color: #ccc;
}
.nav-ul li:last-child a:hover em{
  padding-right: 41px;
}
.nav-ul .liFMusic a{
  margin: 0 -1px;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: left -155px;
  text-decoration: none;
}
.liFMusic em{
  padding: 0 21px 0 19px;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: right -155px;
  color: #ccc;
}
.hot{
  display: block;
  position: absolute;
  top: 23px;
  left: 90px;
  width: 28px;
  height: 19px;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: -190px 0;
}
input{
  float: left;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: 0 -551px;
  width: 176px;
  line-height: 28px;
  padding-left: 30px;
  border: none;
  outline: none;
  border-radius: 40px;
  margin-left: 60px;
  margin-top: 24px;
  color: #9b9b9b;
  font-size: 12px;
}
.outer{
  float: left;
  cursor: pointer;
  margin: 28px 0 0 17px;
  position: relative;
  z-index: 1000;
}
.outer p{
  color: #ccc;
}
.outer p a{
  margin-left: 4px;
}
.outer a{
  text-decoration: none;
  font-size: 12px;
  line-height: 24px;
  color: #787878;
  cursor: pointer;
}
.outer a:hover{
  text-decoration: underline;
}
.sj{
  display: inline-block;
  width: 12px;
  height: 10px;
  padding-left: 10px;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: right -378px;
}
.outer:hover .sj{
  background-position: right -416px;
}
.outer:hover .inner{
  opacity: 1;
  visibility: visible;
}
.inner{
  position: absolute;
  top: 30px;
  left: -60px;
  border-radius: 3px;
  border: 1px solid #000;
  background: #2a2a2a;
  opacity: 0;
  visibility: hidden;
}
.inner::before{
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  width: 16px;
  height: 9px;
  margin-left: -8px;
  background: url('../assets/imgs/toplist.png') no-repeat;
  background-position: -20px 0;
}
.inner li{
  list-style: none;
  width: 100px;
  padding: 0 10px 0 46px;
  cursor: pointer;
  position: relative;
}
.inner li:hover{
  background: #353535;
  border-radius: 3px;
}
.inner i{
  font-style: normal;
  position: absolute;
  left: 28px;
  width: 18px;
  height: 18px;
  margin: 10px 10px 0 -7px;
  background: url('../assets/imgs/toplist.png') no-repeat;
}
.inner a{
  text-decoration: none;
  color: #ccc;
  line-height: 39px;
}
.inner li:hover a{
  color:#FFF;
}
.inner .phone{
   background-position: 0 0;
}
.inner .wechat{
  background-position: -20px -20px;
}
.inner .qq{
  background-position: -20px -40px;
}
.inner .sina{
  background-position: 0 -20px;
}
.inner .netease{
  background-position: 0 -40px;
}
.nav2{
  width: 100%;
  height: 35px;
  background: url('../assets/imgs/topbar.png') repeat-x;
  background-position: 0 -230px;
}
.nav2 .wrap{
  width: 911px;
  padding-left: 168px;
  margin: 0 auto;
}
.nav2 ul{
  list-style: none;
}
.nav2 li{
  display: inline-block;
  height: 35px;
  margin: 0 17px;
  cursor: pointer;
  position: relative;
}
.nav2 a{
  display: inline-block;
  padding-left: 14px;
  height: 35px;
}
.nav2 em{
  float: left;
  font-style: normal;
  color:#FFF;
  line-height: 37px;
  text-shadow: 0 1px 0 #650303;
  padding-right: 14px;
}
.tuiJian{
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: left -268px; 
}
.tuiJian em{
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: right -268px;
}
.selected{
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 63px;
  width: 14px;
  height: 9px;
  margin-left: -7px;
  overflow: hidden;
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: -226px 0;
}
.nav2 a:hover{
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: left -268px; 
}
.nav2 a:hover em{
  background: url('../assets/imgs/topbar.png') no-repeat;
  background-position: right -268px;
}
</style>
