<template>
<!-- 一首歌曲左侧组件 -->
<div class="songListContent">
<div class="album">
    <div class="albumImg">
      <img :src="clickSong[0].imgs"/>
      <span></span>
    </div>
    <div class="albumInfo">
      <div class="info">
        <div class="title">
           <h2>{{clickSong[0].album}}</h2>
        </div>
        <div class="user">
          <p>歌曲:<a>{{clickSong[0].song}}</a></p>
          <p>歌手:<a>{{clickSong[0].singer}}</a></p>
          <p>所属类型:<a>{{clickSong[0].tag}}</a></p>
        </div>
        <div class="btn">
          <a href="javascript:void(0);" class="play" @click.prevent="clickPlay">
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
        <div>
          <p>
            <span>简介：</span>
            {{clickSong[0].summary}}
          </p>
        </div>
        <div class="songinfo">
          暂无歌词，
        </div>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  name: 'songListContent',
  data () {
    return {
    }
  },
  props:{
    clickSong:{
      type:Array,
      default:[]
    }
  },
 computed:{
  setSong(){
    return this.clickSong
  }
 },
 methods:{
  clickPlay(){
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
  width: 130px;
  height: 130px;
  margin: 34px;
}
.albumImg span{
  display: inline-block;
  width: 206px;
  height: 205px;
  background: url('../assets/imgs/coverall.png') no-repeat;
  background-position: -140px -580px; 
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
  line-height: 24px;
  font-size: 20px;
  margin-left: 16px;
  vertical-align: top;
  font-weight: normal;
  width: 80%;
} 
.user{
  margin: 0 0 20px;
  line-height: 35px;
}
.user p{
  color: #999;
}
.user a{
  display: inline-block;
  height: 35px;
  cursor: pointer;
  color: #0c73c2;
  margin-right: 8px;
}
.user a:hover{
  text-decoration: underline;
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
.songinfo{
  margin-top: 13px;
  line-height: 23px;
  min-height: 299px;
}
</style>
