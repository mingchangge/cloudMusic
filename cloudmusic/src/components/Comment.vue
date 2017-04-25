<template>
<!-- 评论组件 -->
 <div class="comment">
  <div class="PL-title">
    <h2>评论</h2>
    <span>共148条评论</span>
  </div>
  <div class="sendPL">
    <div class="pl-top">
      <img src="../assets/imgs/7942872001461517.jpg"/>
      <div class="pl">
        <textarea placeholder="评论"></textarea>
        <div class="white-sj">
          <em class="arrline">◆</em>
          <span class="arrclr">◆</span>
        </div>
      </div>
    </div>
    <div class="pl-bottom">
      <i class="face"></i>
      <i class="yx"></i>
      <a class="pl-btn">评论</a>
      <span class="zs">140</span>
    </div>
    <div class="super">
      <h3>精彩评论</h3>
      <ul>
        <li class="superComm" v-for='comm in 6'>
          <img src='../assets/imgs/7942872001461517.jpg'/>
          <div class="CommAuthor">
            <div>
              <a>王小瑞Marcela</a>:
              <span>封面好像是春夏。</span>
            </div>
            <p>
              <span>昨天15:28</span>
              <a>
                <i></i><!-- 想要去除空格，无效
                 -->(127)
              </a>
              <i>|</i>
              <a>回复</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div> 
    </div>
  </div>   
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*a:hover{
	text-decoration: underline;
}*/
em,i{
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
li{
	list-style: none;
}
.comment{
  margin-top: 40px;
}
.PL-title{
  height: 33px;
  border-bottom: 2px solid #c20c0c;
}
.PL-title h2{
  display: inline-block;
  font-size: 20px;
  line-height: 28px;
  font-weight: normal;
  margin-right: 20px;
}
.sendPL{
  margin-top: 20px;
  overflow: hidden;
  }
.pl-top::after{
  clear: both;
}
.sendPL img,.sendPL textarea{
  float: left;
}
.sendPL img{
  width: 50px;
  height: 50px;
}
.sendPL textarea{
  height: 50px;
  width: 552px;
  margin-left: 20px;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  line-height: 18px;
  border-radius: 2px;
  outline: none;
}
.sendPL .pl{
  position: relative;
  overflow: hidden;
}
.pl .white-sj{
  position: absolute;
  top: 9px;
  left: 12px;
  color: #cdcdcd
}
.arrline,.arrclr{
  display: block;
  font-family: "SimSun";
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  height: 10px;
  line-height: normal;
}
.arrline{
  color: #cdcdcd;
}
.arrclr{
  margin: -10px 0 0 1px;
  color: #fff;
}
.pl-bottom{
  width: 100%;
  height: 35px;
  margin-top: 10px;
}
.pl-bottom .face{
  float: left;
  display: inline-block;
  margin: 3px 10px 0 70px;
  cursor: pointer;
  width: 18px;
  height: 20px;
  background: url("../assets/imgs/icon.png") no-repeat;
  background-position: -40px -490px;
}
.pl-bottom .yx{
  float: left;
  display: inline-block;
  margin: 3px 10px 0 0;
  cursor: pointer;
  width: 18px;
  height: 20px;
  background: url("../assets/imgs/icon.png") no-repeat;
  background-position: -60px -490px;
}
.zs{
  float: right;
  margin-right: 10px;
  line-height: 25px;
  color: #999;
}
.pl-btn{
  float: right;
  width: 46px;
  height: 25px;
  background: url("../assets/imgs/button.png") no-repeat;
  background-position: -84px -64px;
  color: #fff;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
}
.pl-btn:hover{
  background-position: -84px -94px;
}
.super{
  height: 20px;
  border-bottom: 1px solid #cfcfcf;
}
.superComm{
  padding: 15px 0;
  border-top: 1px dotted #ccc;
}
.superComm img{
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.superComm:first-child{
  border-top: none;
}
.CommAuthor{
  margin-left: 60px;
}
.CommAuthor a{
  color: #0c73c2;
  cursor: pointer;
}
.CommAuthor a:hover{
  text-decoration: underline;
}
.CommAuthor p{
  margin-top: 15px;
  text-align: right;
  color: #999;
}
.CommAuthor p span{
  float: left;
}
.CommAuthor a i{
    display: inline-block;
    width: 15px;
    height: 14px;
    margin-top: -4px;
    margin-right: 2px;
    vertical-align: middle;
    background: url("../assets/imgs/icon2.png") no-repeat;
    background-position: -150px 0;
}
.CommAuthor a i:hover{
  background-position: -150px -20px;
}
.CommAuthor p a{
  color: #333;
}
.CommAuthor i{
  margin: 0 8px;
  color: #ccc;
}
</style>
