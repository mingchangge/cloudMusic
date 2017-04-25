<template>
<!-- 专辑页面,专辑详情区域-->
<div class="albumListContent">
<div class="album">
    <div class="albumImg">
      <img src="../assets/imgs/109951162869637469.jpg"/>
      <span></span>
    </div>
    <div class="albumInfo">
      <div class="info">
        <div class="title">
        <!-- 获取专辑名称 -->
           <h2>{{album}}</h2>
        </div>
        <div class="user">
          <a>
            <img src="../assets/imgs/7942872001461517.jpg"/>
            <!-- 1、用户登陆session里取值，2、isUserInfo[0].username从用户登录信息里取值,退出时报错，不加-->
            <span>丢丢</span>
          </a>
          <span>2017-01-10 创建</span>
        </div>
        <div class="btn">
          <a href="javascript:void(0);" class="play" @click.prevent="playClick">
            <i>
              <em></em>
              播放
            </i>
          </a>
          <a href="javascript:void(0);" class="add"></a>
          <a href="javascript:void(0);" class="fav">
            <i>(20万)</i>
          </a>
          <a href="javascript:void(0);" class="fav share">
            <i>(38)</i>
          </a>
          <a href="javascript:void(0);" class="fav down">
            <i>(20万)</i>
          </a>
          <a href="javascript:void(0);" class="fav comment">
            <i>(20万)</i>
          </a>
        </div>
        <div class="tag"></div>
        <div class="summary"></div>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  name: 'albumListContent',
  data () {
    return {
    }
  },
  props:{
    album:{    //接收父组件传值
        type:String,
        required:true,
        default:'愿形容我的词 别太荒唐'
    }
  },
  computed:{
    isUserInfo(){
      return this.$store.state.login.userInfo;  //此处存储用户名
    },
    isLoginIn(){
      return this.$store.state.login.isLogin;
    }
  },
  methods:{
    playClick(){
      this.$store.commit('setCurrentIndex',this.isindex);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
em,i{
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
li{
	list-style: none;
}
.album{
  overflow: hidden;
}
.albumImg{
  float: left;
  position: relative;
  display: inline;
  margin: 5px -220px 0 5px;
  width: 210px;
  height: 210px;;
}
.albumImg img{
  width: 200px;
  height: 200px;
}
.albumImg span{
  display: inline-block;
  width: 208px;
  height: 208px;
  background: url('../assets/imgs/coverall.png') no-repeat;
  background-position: 0 -1285px;
  position: absolute;
  top: -4px;
  left: -4px;
}
.albumInfo{
  float: right;
  width: 100%;
}
.info{
  margin-left: 230px;
}
.title{
  margin: 0 0 12px;
  position: relative;
}
.title::before{
  content: '';
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  width: 54px;
  height: 24px;
  background: url('../assets/imgs/icon.png') no-repeat;
  background-position: 0 -243px;
}
.title h2{
  display: inline-block;
  width: 300px;
  line-height: 24px;
  font-size: 20px;
  margin-left: 16px;
  vertical-align: top;
  font-weight: normal;
} 
.user{
  margin: 0 0 20px;
  line-height: 35px;
}
.user a{
  display: inline-block;
  height: 35px;
  cursor: pointer;
  color: #0c73c2;
  margin-right: 8px;
}
.user a span{
  vertical-align: top;
}
.user a:hover span{
  text-decoration: underline;
}
.user a span::before{
  content: '';
  display: inline;
}
.user img{
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
.user span::before{
  content: '';
  display: inline-block;
  width: 12px;
  height: 13px;
  margin: 9px 15px 0 3px;
  vertical-align: inherit;
  background: url('../assets/imgs/icon.png') no-repeat;
  background-position: -65px -840px;
}
.user span{
  color: #999;
  vertical-align: top;
}
.btn{
  margin-bottom: 25px;
  margin-right: -10px;
  overflow: hidden;
}
.btn a{
  float: left;
  display: inline-block;
  margin-right: 6px;
  font-family: simsun;
  height: 31px;
  line-height: 31px;
  padding: 0 5px 0 0;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.btn i{
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  padding: 0 7px 0 8px;
  color: #FFF;
  background: url('../assets/imgs/button2.png') no-repeat;
}
.play{
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: right -428px;
}
.play:hover{
  background-position: right -510px;
}
.play i{
  background-position: 0 -387px;
}
.play:hover i{
  background-position: 0 -469px;
}
.play em{
  display: inline-block;
  vertical-align: inherit;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: 0 -1622px;
  overflow: hidden;
}
.play:hover em{
  background-position: -28px -1622px;
}
.btn .add{
  display: block;
  width: 31px;
  margin-left: -8px;
  padding-right: 0;
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: 0 -1588px;
}
.add:hover{
  background-position: -40px -1588px;
}
.fav{
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: right -1020px;
}
.fav:hover{
  background-position: right -1106px;
}
.fav i{
  line-height: 30px;
  color: #333;
  min-width: 23px;
  padding-right: 2px;
  padding-left: 28px;
  cursor: pointer;
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: 0 -977px;
}
.fav:hover i{
  background-position: 0 -1063px;
}
.share i{
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: 0 -1225px;
}
.share:hover i{
  background-position: 0 -1268px;
}
.down i{
  background-position: 0 -2761px;
}
.down:hover i{
  background-position: 0 -2805px;
}
.comment i{
  background-position: 0 -1465px;
}
.comment:hover i{
  background-position: 0 -1508px;
}
</style>
