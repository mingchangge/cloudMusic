<template>
<!-- 我的音乐页面 -->
<div class="myMusic">
<div class="beforeLogin" v-if="!isLoginIn">
	<div class="bg">
		<a class="btn"></a>
	</div>
</div>
<div class="afterLogin" v-if="isLoginIn">
  <v-MyAfterLogin></v-MyAfterLogin>
    <!-- <div>
        登录后
    </div> -->
</div>
</div>  
</template>

<script>
import MyAfterLogin from './MyAfterLogin.vue'
export default {
  name: 'myMusic',
  data () {
    return {
    }
  },
  components:{
    'v-MyAfterLogin':MyAfterLogin
  },
  computed:{
     isLoginIn(){
      return this.$store.state.login.isLogin;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.beforeLogin{
	width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
}
.bg{
	width: 807px;
    height: 268px;
    margin: 0 auto 0;
    padding-top: 104px;
    background: url('../assets/imgs/mymusic.png') no-repeat;
    background-position: 0 104px;
}
.btn{
	display: block;
    width: 167px;
    height: 45px;
    margin: 202px 0 0 482px;
    background: url('../assets/imgs/mymusic.png') no-repeat;
    background-position: 0 9999px;
    cursor: pointer;
}
.btn:hover{
	background-position: 0 -278px;
}
</style>
