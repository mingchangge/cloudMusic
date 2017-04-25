<template>
  <div id="app">

    <v-Header class="pcShow"></v-Header>  <!--pc端头部  -->
    <v-HeadePhone class="phoneShow"></v-HeadePhone><!--手机端头部  -->
    <router-view></router-view>
    <v-ControlBar class="pcShow"></v-ControlBar><!--pc端播放器控制条  -->
    <v-Footer class="pcShow"></v-Footer><!--pc端尾部 -->
    <v-PlayBar class="phoneShow"></v-PlayBar><!--手机端播放器控制条-->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ControlBar from './components/ControlBar.vue'
// 手机部分
import HeadePhone from './components/phone/HeadePhone.vue'
import PlayBar from './components/phone/PlayBar.vue'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      ispcShow:false,
      
    }
  },
  components:{
   'v-Header':Header,
   'v-Footer':Footer,
   'v-ControlBar':ControlBar,
   // 手机部分
   'v-HeadePhone':HeadePhone,
   'v-PlayBar':PlayBar
  },
  mounted(){
    axios.get('/users/checkFirst')
        .then(res=>{
        // console.log(res);
          if(res.data.state=="true"){  //如果数据库存在用户登录session
            var data=res.data;   //数据库里的值赋值给data变量
            this.$store.commit('isLoginIn',true);//vuex登录状态为true
            this.$store.commit('isUserInfo',data); //将data赋值给vuex全局变量
          }else{
            // console.log('我是APP.vue检测登陆情况,没有人登录');
            this.$store.commit('isUserInfo',''); 
            this.$store.commit('isLoginIn',false);//vuex登录状态为false
          }
        })
        .catch(err=>{
          console.log(err);
        }),
        this.$store.commit('isAutoplay',false);
      }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #333;
}
@media screen and (max-width:800px) {
    .pcShow{
      display: none;
    }
}
@media screen and (min-width:800px) {
    .phoneShow{
      display: none;
    }
}
</style>
