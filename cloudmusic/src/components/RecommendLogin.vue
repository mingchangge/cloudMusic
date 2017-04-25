<template>
<!-- 首页content里的登录组件 -->
<div class="recommendLogin">
	<div class="login" v-if="!isLoginIn">
		<p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
		<a  v-on:click.prevent='login({show:true})'>用户登录</a>
	</div>
  <div class="login" v-if="isLoginIn">
    <p>{{isUserInfo.user||isUserInfo[0].username}}</p>
  </div>
</div>  
</template>
<script>
import {mapActions} from 'vuex';
export default {
  name: 'RecommendLogin',
  data () {
    return {
    }
  },
  computed:{
    isLoginIn(){
      return this.$store.state.login.isLogin;
    },
    isUserInfo(){
      return this.$store.state.login.userInfo;
    },
    show:function(){
      return this.$store.state.login.show;
    }
  },
  methods:{
    ...mapActions( // 映射 
      ['login']
    )
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
.login{
	height: 126px;
  padding-top: 0;
  background: url('../assets/imgs/index.png') no-repeat;
}
.login p{
	width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
  color: #666;
}
.login a{
	display: block;
  width: 100px;
  height: 31px;
  margin: 0 auto;
  line-height: 31px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 0 #8a060b;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: 0 -195px;
  cursor: pointer;
}
.login a:hover{
	text-decoration: none;
	background-position: -110px -195px;
}
</style>