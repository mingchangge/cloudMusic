<template>
<!-- 手机头部组件 -->
  <div class="headerPhone">
    <div class="wrap">
     <div class="headTop">
        <div  class="useInfo">
          <a>用户信息</a>
        </div>
        <div class="title">
          <ul>
            <li><a>我的</a></li>
            <li><a>发现</a></li>
            <li><a>动态</a></li>
          </ul>
        </div>
        <div class="search">
          <a>查找</a>
        </div>
     </div>
    </div> 
    <div class="headBottom">
       <ul>
         <li><a>个性推荐</a></li>
         <li><a>歌单</a></li>
         <li><a>主播电台</a></li>
         <li><a>排行榜</a></li>
       </ul>
     </div> 
  </div>
</template>

<script>
export default {
  name: 'headerPhone',
  data () {
    return {
      isphoneShow:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
}
.wrap{
  width: 100%;
  background: rgb(206,61,62);
  padding: 50px 0 0 0;
}
.headTop{
  display: flex;
}
.useInfo{
  flex: 1;
  padding-left: 20px;
}
.useInfo a{
  display: inline-block;
  width: 40px;
  height:40px;
  background: url('../../static/img/phone/menu.png') no-repeat;
  background-size: 60%;
  cursor: pointer;
  font-size: 0;
  vertical-align: top;
}
.title{
  flex: 3
}
.title li{
  display: inline-block;
  margin:0 10px;
}
.title a{
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
}
.search{
  flex: 1;
  float: right;
}
.search a{
  display: inline-block;
  vertical-align: top;
  width: 40px;
  height:40px;
  background: url('../../static/img/phone/search.png') no-repeat;
  background-size: 60%;
  cursor: pointer;
  font-size: 0;
}
.headBottom{
  background: #FFF;
}
.headBottom li{
  display: inline-block;
  width: 24%;
  text-align: center;
  color:#666;
  line-height: 36px;
  border-bottom: 2px solid rgba(0,0,0,0);
}
.headBottom li:hover{
  border-bottom: 2px solid rgb(206,61,62);
}
</style>
