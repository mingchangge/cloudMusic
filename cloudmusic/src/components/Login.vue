<template>
<!-- 登录组件 -->
<div class="login">
<!-- **********默认登录框******************************* -->
  <div class="loginMain" v-if='show'>
    <div class="title">
    	<h1>登录</h1>
    	<span @click='login({show:false})'></span>
    </div>
  	<div class="content">
  	    <div class="left">
  			<img src='../assets/imgs/platform.png'/>
  		    <a class="phoneLogin" @click="login({show:true,pShow:true})">
  			   <i>手机号登录</i>
  		    </a>
  		    <a class="regist" @click="login({show:true,rShow:true})">
  			   <i>注&nbsp;册</i>
  		    </a>		
  		</div>
  		<div class="right">
  			<ul>
  				<li>
  					<a>
  						<i class="wechat"></i>
  						微信登录
  					</a>
  				</li>
  				<li>
  					<a>
  						<i  class="qq"></i>
  						QQ登录
  					</a>
  				</li>
  				<li>
  					<a>
  						<i class="sina"></i>
  						微博登录
  					</a>
  				</li>
  				<li>
  					<a>
  						<i class='netease'></i>
  						网易邮箱账号登录
  					</a>
  				</li>
  			</ul>
  		</div>	
  	</div>
  </div>
<!-- **********注册框******************************* -->
  <div class="register">
    <div class="registerMain" v-if='rShow'>
      <div class="title">
        <h1>手机号注册</h1>
        <span @click='login({show:false})'></span>
      </div>
      <div class="content">
        <form class="phone">
          <div class="rNumber">
            <label for="rNumber">手机号：</label>
            <span>+86</span>
            <input type="text" id="rNumber" placeholder="请输入手机号" @blur="PNumberBlur" v-model="PNumber"/>
          </div>
          <div class="rPwd">
            <label for="rPwd">密码：</label>
            <input type="password" id="rPwd" placeholder="设置登录密码，不少于6位" v-model="RPWD" @blur="RPWDBlur"/>
          </div>
          <div class="err" :class="{showErr:isShowErr}">
            <i></i>
            <span>{{err}}</span>
          </div>
          <a class="btn" @click="regist">
            <em>注册</em>
          </a>
        </form>
        <div class="backLogin">
          <a @click="login({show:true})">&lt;&nbsp;&nbsp;返回登录</a>
        </div>
      </div>
    </div>
  </div>
<!-- ***************手机登录框*************************************************** -->
  <div class="phEnter">
    <div class="phEnterMain" v-if='pShow'>
      <div class="title">
        <h1>手机号登录</h1>
        <span @click='login({show:false})'></span>
      </div>
      <div class="content">
        <form class="pLogin">
          <input type="text" placeholder="请输入手机号" v-model="loginNum"/>
          <input type="password" placeholder="设置登录密码，不少于6位" v-model="loginPwd"/>
          <div class="err" :class="{showErr:isShowErr}">
            <i></i>
            <span>{{err}}</span>
          </div>
          <div class="autoLogin">
            <input type="checkbox" name="" />自动登录
            <a>忘记密码？</a>
          </div>
          <a class="btn" @click="loginClick">
            <em>登录</em>
          </a>
        </form>
        <div class="backLogin">
          <a @click="login({show:true})">&lt;&nbsp;&nbsp;其他登录方式</a>
          <a @click="login({show:true,rShow:true})" class="backRegist">没有账号?免费注册&nbsp;&nbsp;&gt;</a>
        </div>
      </div>
    </div>
  </div>
</div> 
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';
export default {
  name: 'login',
  data () {
    return {
      PNumber:'',   //注册手机号
      RPWD:'',      //注册密码
      rinfo:'',     //注册时加一个空对象
      err:'',       //错误信息
      isShowErr:true, //绑定错误内容的显示或隐藏
      loginNum:'',   //登录账号
      loginPwd:''    //登录密码
    }
  },
  computed:{
    show:function(){
      return this.$store.state.login.show;  //获取总登录框的计算属性
    },
    rShow:function() {
      return this.$store.state.login.rShow; //获取注册框的属性
    },
    pShow:function() {
      return this.$store.state.login.pShow;//获取登录框的属性
    }
  },
  methods:{
    ...mapActions({      //映射login
       login:'login'
    }),
    RPWDBlur(){
      // 注册时用户密码不为空
     if(this.RPWD==''){
       console.log('请输入密码');
       this.err="请输入密码";
       this.isShowErr=false;
     }else{
      this.isShowErr=true;
     }
    },
    PNumberBlur(){
      // 注册时手机号判断
      let reg = /^\s*$/g;
      let regFormat=/^[1][358][0-9]{9}$/;
      if(reg.test(this.PNumber)){
        this.err="手机号不能为空";
        this.isShowErr=false;
      }else if(!(regFormat.test(this.PNumber))){
        this.err="请检查手机格式";
        this.isShowErr=false;
        // 现在只有13、15和18开头的11位手机号码。以1开头，第2位数字为3或5或8，后面接9位数字。
      }else{
        axios.post('/users/checkUser',{number:this.PNumber})
        .then(res=>{
          if(typeof ((res.data)[0])==='object'){
            this.err="账号已被注册，请重新输入";
            this.isShowErr=false;
          }else{
            this.isShowErr=true;
          }
        }).
        catch(err=>{
          console.log(err);
        });
      }
    },
    regist(){
      // 用户注册
      axios.post('/users/regist',{num:this.PNumber,Lpwd:this.RPWD,Rinfo:this.rinfo})
        .then(res=>{
          this.login({show:false});
        }).
        catch(err=>{
          console.log(err);
        });
    },
    loginClick(){
      // 用户登录
      axios.post('/users/checkLogin',{number:this.loginNum,pwd:this.loginPwd})
        .then(res=>{
         if(typeof ((res.data)[0])==='object'){
            this.isShowErr=true;
            this.login({show:false});
            this.$store.commit('isLoginIn',true);
            this.$store.commit('isUserInfo',res.data);  //将信息传值vuex属性
            // console.log(res.data);
          }else{
            this.err="请检查账号或密码";
            this.isShowErr=false;
            this.$store.commit('isLoginIn',false);
          }
        })
        .catch(err=>{
          console.log(err);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
	position: absolute;
	top: 168px;
  left: 418px;
}
.register,
.phEnter{
  position: absolute;
  top: 0;
  left: 0;
}
.loginMain,
.registerMain,
.phEnterMain{
	width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.8);
  border: none;
  background: #fff;
  position: relative;
  z-index: 100;
}
.title{
	z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0 0;
  background: #2d2d2d;
}
.title h1{
	display: inline-block;
	margin: 0;
  height: 38px;
  line-height: 38px;
  padding-left: 18px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
}
.title span{
	position: absolute;
  top: 16px;
  right: 20px;
	display: inline-block;
	width: 10px;
  height: 10px;
  text-indent: -9999px;
  cursor: pointer;
  background: url('../assets/imgs/layer.png');
  background-position: 0 -95px;
}
.content{
	padding: 40px 0 39px;;
  border: 1px solid #878787;
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
  overflow: hidden;
}
.left{
	float: left;
	width: 224px;
  padding: 0 35px 3px 40px;
  border-right: 1px dotted #ccc;
}
.left img{
	margin-bottom: 10px;
}
.left a{
	display: inline-block;
  width: 219px;
  margin-top: 10px;
  padding: 0 5px 0 0;
  height: 31px;
  line-height: 31px;
  text-align: center;
  cursor: pointer;
  background: url('../assets/imgs/button2.png');
}
.left i{
	display: inline-block;
	padding: 0 15px 0 20px;
	height: 31px;
  line-height: 31px;
	font-style: normal;
	width: 184px;
	background: url('../assets/imgs/button2.png');
}
.left .phoneLogin{
	color: #fff;
	background-position: right -428px;
}
.left .phoneLogin:hover{
	background-position: right -510px;
}
.phoneLogin i{
	background-position: 0 -387px;
}
.phoneLogin:hover  i{
	background-position: 0 -469px;
}
.left .regist{
	color: #333;
  background-position: right -100px;
}
.left .regist:hover{
	background-position: right -182px;
}
.regist i{
	color: #333;
  background-position: 0 -59px;
}
.regist:hover i{
	background-position: 0 -141px;
}
.right{
	float: left;
	padding: 3px 0 3px 39px;
  margin-top: -15px;
}
.right li{
	list-style: none;
	margin-top: 15px;
	cursor: pointer;
}
.right a{
	font-size: 12px;
  color: #333;
  line-height: 38px;
  cursor: pointer;
}
.right a:hover{
	text-decoration: underline;
}
.right i{
	display: inline-block;
	width: 38px;
  height: 38px;
	margin-right: 14px;
	border-radius: 50%; 
	vertical-align: top;
	cursor: pointer;
	background: url('../assets/imgs/logo.png');
}
.right .wechat{
	background-position: -150px -670px;
}
.right .qq{
	background-position: -190px -670px;
}
.right .sina{
	background-position: -231px -670px;
}
.right .netease{
	background-position: -271px -670px;
}
/**************************************************注册*/
.register .content,
.phEnter .content{
  padding: 0;
  border: 1px solid #878787;
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
}
.phone{
  padding: 30px 0 43px;
  width: 220px;
  margin: 0 auto;
}
.phone label{
  display: block;
  color: #666;
}
.rNumber{
  position: relative;
}
.rNumber span{
  position: absolute;
  top: 35px;
  left: 7px;
  color: #333;
}
.phone input{
  display: inline-block;
  width: 182px;
  height: 20px;
  margin-top: 10px;
  padding: 5px 6px 5px 30px;
  line-height: 20px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  outline: none;
}
.rPwd{
  margin-top: 10px;
  color:#666;
}
.rPwd input{
  width: 206px;
  padding: 5px 6px 6px;
}
.showErr{
  display: none;
}
.err{
  height: auto;
  line-height: 18px;
  margin-top: 5px;
  color: #e33232;
}
.err i{
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-top: -2px;
  margin-right: 8px;
  background: url('../assets/imgs/icon.png');
  background-position: -50px -270px;
  vertical-align: middle;
}
.btn{
  display: inline-block;
  width: 215px;
  height: 31px;
  margin-top: 20px;
  padding: 0 5px 0 0;
  line-height: 31px;
  vertical-align: top;
  text-align: center;
  background: url('../assets/imgs/button2.png');
  background-position: right -428px;
  cursor: pointer;
}
.btn:hover{
  background-position: right -510px;
}
.btn em{
  display: inline-block;
  font-style: normal;
  width: 180px;
  height: 31px;
  line-height: 31px;
  color: #fff;
  padding: 0 15px 0 20px;
  vertical-align: top;
  text-align: center;
  background: url('../assets/imgs/button2.png');
  background-position: 0 -387px;
}
.btn:hover em{
  background-position: 0 -469px;
}
.backLogin{
  padding: 4px 19px;
  height: 48px;
  border-top: 1px solid #c6c6c6;
  border-radius: 0 0 4px 4px;
  line-height: 48px;
  background-color: #f7f7f7;
}
.backLogin a{
  color: #0c72c3;
  cursor: pointer;
}
.backLogin .backRegist{
  float: right;
  color: #999;
}
/**************************登录*/
.pLogin{
  padding: 30px 0 43px;
  width: 220px;
  margin: 0 auto;
}
.pLogin input{
  width: 206px;
  height: 19px;
  margin: 0;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  outline: none;
  line-height: 19px;
}
.pLogin input[type='password']{
  margin-top: 10px;
}
.autoLogin{
  margin-top: 10px;
}
.autoLogin input{
  width: 13px;
  margin: 0 12px 0 0;
  vertical-align: middle;
}
.autoLogin a{
  float: right;
  cursor: pointer;
}
.autoLogin a:hover{
  text-decoration: underline;
}
</style>
