<template>
<!-- 主页排行榜部分 -->
 <div class="list">
    <div class="title">
      <a>榜单</a>
      <span>
        <a>更多</a>
      </span>
    </div>
    <div class="ranking">
      <dl>
        <dt>
        <a>
          <img src="../assets/imgs/18696095720518497.jpg"/>
        </a>
        <div class="rankingTitle">
          <a>
            <h3 class="hideen">云音乐飙升榜</h3>
          </a>
          <p>
            <a class="rankingPlay">播放</a>
            <a class="fav">收藏</a>
          </p>
        </div>
        </dt>
        <dd>
          <ol>
            <li v-for='(rank,index) in imgData'>
              <span>{{index+1}}</span>
              <a class="hideen">{{rank.song}}</a>
            </li>
          </ol>
          <div class="rankMore">
            <a>查看全部&gt;</a>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
        <a>
          <img src="../assets/imgs/18713687906568048.jpg"/>
        </a>
        <div class="rankingTitle">
          <a>
            <h3 class="hideen">云音乐新歌榜</h3>
          </a>
          <p>
            <a class="rankingPlay">播放</a>
            <a class="fav">收藏</a>
          </p>
        </div>
        </dt>
        <dd>
          <ol>
            <li v-for='(rank,index) in imgData'>
              <span>{{index+1}}</span>
              <a class="hideen">{{rank.song}}</a>
            </li>
          </ol>
          <div class="rankMore">
            <a>查看全部&gt;</a>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
        <a>
          <img src="../assets/imgs/18740076185638788.jpg"/>
        </a>
        <div class="rankingTitle">
          <a>
            <h3 class="hideen">网易原创歌曲榜</h3>
          </a>
          <p>
            <a class="rankingPlay">播放</a>
            <a class="fav">收藏</a>
          </p>
        </div>
        </dt>
        <dd>
          <ol>
            <li v-for='(rank,index) in imgData'>
              <span>{{index+1}}</span>
              <a class="hideen">{{rank.song}}</a>
            </li>
          </ol>
          <div class="rankMore">
            <a>查看全部&gt;</a>
          </div>
        </dd>
      </dl>
    </div>
 </div> 	
</template>

<script>
import axios from 'axios';
export default {
  name: 'list',
  data () {
    return {
    	imgData:[]
    }
  },
  created(){
    // 向服务器发送请求获取榜单数据
    axios.get('http://localhost:3000/songs/smallSlider')
    .then(res=>{
      this.imgData=res.data;
    }).
    catch(err=>{
      console.log(err);
    });
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
.hideen{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.title{
  height: 33px;
  padding: 0 10px 0 34px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
}
.title>a{
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  cursor: pointer;
}
.title>a:hover{
  text-decoration: none;
}
.title ul,
.title li{
  display: inline-block;
}
.title ul{
  margin: 7px 0 0 20px;
}
.title li a{
  color: #666;
  cursor: pointer;
}
.title li:after{
  content: '|';
  margin: 0 10px;
  color: #ccc;
}
.title li:last-child::after{
  content: '';
}
.title span{
  float: right;
  margin-top: 9px;
}
.title span a{
  cursor: pointer;
}
.title span a:after{
  display: inline-block;
  content: '';
  width: 12px;
  height: 12px;
  margin-left: 4px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: 0 -240px;
  vertical-align: middle;
}
.ranking{
  height: 472px;
  margin-top: 20px;
  padding-left: 1px;
  background: url('../assets/imgs/index_bill.png') no-repeat;
}
.ranking dl{
  float: left;
  width: 229px;
}
.ranking dt{
  height: 100px;
  padding: 20px 0 0 19px;
}
.ranking dt a{
  display: inline-block;
  cursor: pointer;
}
.ranking img{
  width: 80px;
  height: 80px;
}
.rankingTitle{
  display: inline-block;
  width: 116px;
  margin: 6px 0 0 10px;
  vertical-align:top;
}
.rankingTitle h3{
  width: 100%;
}
.rankingTitle p{
  margin-top: 10px;
}
.rankingTitle p a{
  display: block;
  float: left;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  text-indent: -9999px;
  background: url('../assets/imgs/index.png') no-repeat;
}
.rankingTitle .rankingPlay{
  background-position: -267px -205px;
}
.rankingTitle .rankingPlay:hover{
  background-position: -267px -235px;
}
.rankingTitle .fav{
 background-position: -300px -205px;
}
.rankingTitle .fav:hover{
  background-position: -300px -235px;
}
.ranking ol{
  height: 319px;
  margin-left: 50px;
  line-height: 32px;
}
.ranking li{
  height: 32px;
}
.ranking li span{
  display: inline-block;
  width: 35px;
  height: 32px;
  margin-left: -35px;
  text-align: center;
  color: #666;
  font-size: 16px;
  vertical-align: top;
}
.ranking li:nth-child(1) span,
.ranking li:nth-child(2) span,
.ranking li:nth-child(3) span{
  color: #c10d0c;
}
.ranking dd a{
  display: inline-block;
  width: 170px;
  height: 32px;
  color:#000;
  cursor: pointer;
}
.rankMore{
  height: 32px;
  margin-right: 32px;
  text-align: right;
  line-height: 32px;
}
</style>
