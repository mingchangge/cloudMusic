<template>
<div class="albumListRight">
 <a>
   <img src='../assets/imgs/109951162889999486.jpg'/>
 </a>
  <h3>喜欢这个歌单的人</h3>
  <ul class="people">
   <li v-for='peo in 8'>
     <a>
       <img src='../assets/imgs/3400789470304066.jpg'/>
     </a>
   </li>
  </ul>
  <h3>热门歌单</h3>
  <ul>
    <li v-for='list in 6' class="list">
      <a>
        <img src='../assets/imgs/3400789470304066.jpg' />
      </a>
      <div class="inf">
        <h4 class='hideen'>
          <a class='hideen'>又是清明雨上，折菊寄到你身旁</a>
        </h4>
        <P class='hideen'>
          <span>by</span>
          <a class='hideen'>_沐晨丶</a>
        </P>
      </div>
    </li>
  </ul>
  <div class="client">
    <h3>网易云音乐多端下载</h3>
    <ul>
        <li><a class="ios"></a></li>
        <li><a class="windows"></a></li>
        <li><a class="android"></a></li>
    </ul>
    <p>同步歌单，随时畅听320k好音乐</p>
  </div>
</div>  
</template>

<script>
export default {
  name: 'albumListRight',
  data () {
    return {
    	
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
.hideen{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.albumListRight{
  padding: 20px 40px 40px 30px;
}
.albumListRight>a{
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin-bottom: 40px;
}
.albumListRight> a::after{
  content: '';
  display: inline-block;
  position: absolute;
  bottom: 3px;
  right: 0px;
  width: 24px;
  height: 18px;
  overflow: hidden;
  line-height: 999px;
  background: url('../assets/imgs/short.png') no-repeat;
}
h3{
  height: 23px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
}
ul{
  padding-bottom: 25px;
  overflow: hidden;
}
.people{
  margin-left: -13px;
}
.people li{
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 0 0 13px 13px;
}
li img{
  width: 40px;
  height: 40px;
}
.list{
  float: left;
  width: 200px;
  height: 50px;
  margin-bottom: 15px;
  line-height: 24px;
}
.list p::after{
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 13px;
  background: url('../assets/imgs/icon.png') no-repeat;
  background-position: -65px -840px;
}
.list >a{
  float: left;
  width: 40px;
  margin-right: 10px;
}
.list img{
  width: 40px;
  height: 40px;
}
.list .inf{
  float: left;
  width: 140px;
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
.inf h4 a{
  font-weight: normal;
  max-width: 88%;
  color: #000;
  cursor: pointer;
}
.inf h4 a:hover{
  text-decoration: underline;
}
.inf P span{
  color: #999;
}
.inf P a{
  max-width: 106px;
  margin: 0 2px 0 4px;
}
.inf P a:hover{
  cursor: pointer;
  text-decoration: underline;
}
.client{
  margin: 20px 0;
  padding-bottom: 20px;
}
.client ul{
  padding-bottom: 10px;
}
.client li{
  float: left;
  margin-top: 20px;
  height: 70px;
  cursor: pointer;
}
.client p{
  color: #999;
}
.ios{
  display: inline-block;
  width: 42px;
  height: 50px;
  background: url("../assets/imgs/sprite.png") no-repeat;
  background-position: 0 -391px;
}
.ios:hover{
  background: url("../assets/imgs/sprite.png") no-repeat;
  background-position: 0 -471px;
}
.windows{
  display: inline-block;
  width: 60px;
  height: 50px;
  margin: 0 26px 0 30px;
  background: url("../assets/imgs/sprite.png") no-repeat;
  background-position: -72px -391px;
}
.windows:hover{
  display: inline-block;
  width: 60px;
  background: url("../assets/imgs/sprite.png") no-repeat;
  background-position: -72px -471px;
}
.android{
  display: inline-block;
  width: 42px;
  height: 50px;
  background: url("../assets/imgs/sprite.png") no-repeat;
  background-position: -158px -392px;
}
.android:hover{
  background: url("../assets/imgs/sprite.png") no-repeat;
  background-position: -158px -472px;
}
</style>
