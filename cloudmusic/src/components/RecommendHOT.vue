<template>
<div class="recommendHOT">
<!-- 首页右侧区域登录框下上半部分 -->
  <div class="singer">
        <h3>
          <span>入驻歌手</span>
          <a>查看全部 &gt;</a>
        </h3>
        <ul>
          <li v-for='singer in singerData'>
            <a>
              <div class="simg">
                <img v-bind:src=singer.url />
              </div>
              <div class="info">
                <h4 class="hideen">{{singer.name}}</h4>
                <p class="hideen">{{singer.summary}}</p>
              </div>
            </a>
          </li>
        </ul>
        <a class="btn">
          <span>申请成为网易音乐人</span>
        </a>
      </div>
      <div class="hotDJ">
        <h3>热门DJ</h3>
        <ul>
          <li v-for='DJ in DJData'>
            <a>
              <img v-bind:src=DJ.url />
            </a>
            <div class="inf">
              <h4 class='hideen'>
                <a class='hideen'>{{DJ.name}}</a>
                <i></i>
              </h4>
              <P class='hideen'>{{DJ.summary}}</P>
            </div>
          </li>
        </ul>
      </div>
</div>  
</template>

<script>
export default {
  name: 'recommendHOT',
  data () {
    return {
      singerData:[
      {url:require('../assets/imgs/5931865232210340.jpg'),
      name:'张惠妹aMEI',
      summary:'台湾歌手张惠妹'},
      {url:require('../assets/imgs/5931865232210340.jpg'),
      name:'尚雯婕',
      summary:'原创电子唱作人'},
      {url:require('../assets/imgs/5931865232210340.jpg'),
      name:'李志',
      summary:'个体音乐人李志'},
      {url:require('../assets/imgs/5931865232210340.jpg'),
      name:'羽泉组合',
      summary:'国内知名演唱组合 羽泉'},
      {url:require('../assets/imgs/5931865232210340.jpg'),
      name:'马頔麻油叶',
      summary:'民谣音乐人'}
      ],
      DJData:[
        {url:require('../assets/imgs/7942872001461517.jpg'),
        name:'陈立',
        summary:'美食家陈立教授'},
        {url:require('../assets/imgs/7942872001461517.jpg'),
        name:'DJ艳秋',
        summary:'著名音乐节目主持人'},
        {url:require('../assets/imgs/7942872001461517.jpg'),
        name:'国家大剧院古典音乐频道',
        summary:'国家大剧院古典音乐官方'},
        {url:require('../assets/imgs/7942872001461517.jpg'),
        name:'谢谢收听',
        summary:'南京电台主持人王馨'},
        {url:require('../assets/imgs/7942872001461517.jpg'),
        name:'DJ晓苏',
        summary:'独立DJ，CRI环球旅游广播特邀DJ'}
      ]
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
.singer{
  margin-top: 15px;
}
.singer h3{
  height: 23px;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
  overflow: hidden;
}
.singer span{
  float: left;
}
.singer h3 a{
  float: right;
  font-weight: normal;
  color: #666;
  cursor: pointer;
}
.singer ul{
  margin: 6px 0 14px 20px;
}
.singer li{
  margin-top: 14px;
  width: 210px;
  height: 62px;
}
.singer li a{
  display: block;
  width: 210px;
  height: 62px;
  background: #fafafa;
}
.singer li a:hover{
  background: #f4f4f4;
}
.simg{
  float: left;
  width: 62px;
  height: 62px;
  cursor: pointer;
}
.simg img{
  width: 62px;
  height: 62px;
}
.info{
  float: left;
  width: 133px;
  height: 60px;
  padding-left: 14px;
  border: 1px solid #e9e9e9;
  border-left: none;
  cursor: pointer;
}
.hideen{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.info h4{
  margin-top: 8px;
}
.info p{
  width: 90%;
  margin-top: 8px;
  color:#666;
}
.btn{
  display: block;
  width: 170px;
  height: 31px;
  color: #333;
  padding: 0 40px 0 0;
  margin-left: 20px;
  border-radius: 4px;
  cursor: pointer;
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: right -100px;
}
.btn:hover{
  background-position: right -182px;
}
.btn span{
  width: 170px;
  height: 31px;
  line-height: 31px;
  font-weight: bold;
  color: #333;
  padding: 0 15px 0 20px;
  text-align: center;
  background: url('../assets/imgs/button2.png') no-repeat;
  background-position: 0 -59px;
}
.btn:hover span{
  background-position: 0 -141px;
}
.hotDJ{
  margin-top: 30px;
}
.hotDJ h3{
  height: 23px;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
}
.hotDJ ul{
  margin: 20px 0 0 20px;
}
.hotDJ li{
  width: 210px;
  height: 50px;
  cursor: pointer;
}
.hotDJ li>a{
  float: left;
  width: 40px;
  margin-right: 10px;
}
.hotDJ img{
  width: 40px;
  height: 40px;
}
.hotDJ .inf{
  float: left;
  width: 160px;
  line-height: 21px;
}
.inf h4{
  width: 100%;
  font-weight: normal;
  color: #666;
}
.inf P{
  width: 100%;
  color: #666;
}
.inf h4 i{
  display: inline-block;
  margin-top: -1px;
  width: 11px;
  height: 13px;
  background: url('../assets/imgs/icon.png') no-repeat;
  background-position: 0 1px;
  font-size: 100%;
}
.inf h4 a{
  font-weight: normal;
  max-width: 88%;
  color: #000;
}
</style>
