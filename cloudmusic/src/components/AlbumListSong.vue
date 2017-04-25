<template>
<div class="albumListSong">
<!-- 专辑列表组件 -->
  <div class="list">
    <div class="title">
      <h3>歌曲列表</h3> 
      <span><i>100</i>首歌</span>
      <p>
        <a>生成外链播放器</a>
        <span>播放<i>1245323</i>次</span>
      </p>
    </div>
    <div class="aList">
      <table>
        <thead>
          <tr>
          <th>
            <div class="bg"></div>
          </th>
          <th>
            <div class="bg">歌曲标题</div>
          </th>
          <th>
            <div class="bg">时长</div>
          </th>
          <th>
            <div class="bg">歌手</div>
          </th>
          <th>
            <div class="bg">专辑</div>
          </th>
          </tr>
        </thead>
        <tbody>
        <!--setinitsongs  -->
          <tr v-for="(s,index) in setinitsongs">
            <td class="show">
              <div class="play">
                <span class="num">1</span>
                <span class="ply" @click.prevent="plyClick(index)">
                </span>
              </div>
            </td>
            <td>
            <!-- 歌单里的歌曲 {{s.song}}-->
              <router-link class="song" v-bind:to="'/song/'+s.song">
                {{s.song}}
              </router-link>
            </td>
            <td class="time">
              <a>04.44</a>
              <div class="hoveShow">
                <a class="add"></a>
                <span class="fav"></span>
                <span class="share"></span>
                <span class="down"></span>
              </div>
            </td>
            <td>
              <a>{{s.singer}}</a>
            </td>
            <td>
              <a>{{s.album}}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  name: 'AlbumListSong',
  data () {
    return {
    }
  },
  props:{
    songs:{
      default:[],
      type:Array
    }
  },
  computed:{
    setinitsongs(){
      return this.songs;
    },
     isAlbumSong:function(){  //专辑列表信息
      return this.$store.state.song.AlbumSong; 
    }
  },
  methods:{
    plyClick:function(index){
      this.index=index;
      this.$store.commit('isindex',this.index);
      this.$store.commit('setCurrentIndex',this.isindex);
      this.$store.commit('isAutoplay',true);
      // console.log(this.$store.state.song.current);
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
.list{
  margin-top: 27px;
}
.title{
  width: 100%;
  height: 33px;
  border-bottom: 2px solid #c20c0c;
}
.title h3{
  display: inline-block;
  font-size: 20px;
  line-height: 28px;
}
.title span{
  margin: 9px 0 0 20px;
  color: #666;
}
.title p{
  float: right;
  margin-top: 5px;
}
.title p::before{
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: bottom;
  background: url('../assets/imgs/icon.png') no-repeat;
  background-position: -34px -863px;
}
.title a{
  color: #4996d1;
  text-decoration: underline;
  cursor: pointer;
}
.title p i{
  color: #c20c0c;
  font-weight: bold;
}
table{
  width: 100%;
  border: 1px solid #d9d9d9;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
table th{
  text-align: left;
  font-weight: normal;
  color: #666;
  height: 38px;
  background-color: #f7f7f7;
  background: url('../assets/imgs/table.png') repeat-x;
  background-position: 0 0;
}
table th:nth-child(1){
  width: 74px;
}
table th:nth-child(3){
  width: 111px;
}
table th:nth-child(4){
  width: 14%;
}
table th:nth-child(5){
  width: 19%;
}
.bg{
  height: 18px;
  line-height: 18px;
  padding: 8px 10px;
  background: url('../assets/imgs/table.png') no-repeat;
  background-position: 0 -59px;
}
table th:nth-child(1) .bg{
  background: none;
}
table td{
  padding: 6px 10px;
  line-height: 18px;
  text-align: left;
  background: #FFF;
}
table tr:nth-child(odd) td{
  background-color: #f7f7f7;
}
.play{
  height: 18px;
}
.num{
  width: 25px;
  margin-left: 5px;
  color: #999;
}
.ply{
  float: right;
  width: 17px;
  height: 17px;
  cursor: pointer;
  background: url('../assets/imgs/table.png') repeat-x;
  background-position: 0 -103px;
}
.ply:hover{
  background-position: 0 -128px;
}
td a,
.song{
  display: inline-block;
  max-width: 99%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  cursor: pointer;
  text-decoration: none;
  color: #333;
}
td a:hover,
.song:hover{
  text-decoration: underline;
}
.hoveShow{
  display: none;
}
.time:hover .hoveShow{
  display: block;
}
.time:hover a{
  display: none;
}
.add{
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  width: 13px;
  height: 13px;
  margin-top: 2px;
  background: url('../assets/imgs/icon.png') no-repeat;
  background-position: 0 -700px;
}
.time:hover .add{
  display: inline-block;
}
.add:hover{
  background-position: -22px -700px;
}
.hoveShow span{
  display: inline-block;
  width: 18px;
  height: 16px;
  margin: 2px 0 0 4px;
  vertical-align: middle;
  cursor: pointer;
  background: url('../assets/imgs/table.png') no-repeat;
}
.hoveShow .fav{
  background-position: 0 -174px;
}
.hoveShow .fav:hover{
  background-position: -20px -174px;
}
.hoveShow .share{
  background-position: 0 -195px;
}
.hoveShow .share:hover{
  background-position: -20px -195px;
}
.hoveShow .down{
  background-position: -81px -174px;
}
.hoveShow .down:hover{
  background-position: -104px -174px;
}
</style>
