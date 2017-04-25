<template>
<!-- 一首歌曲组件 -->
<div class="song">
<div class="wrap">
    <div class="wrap2">
      <div class="left">
        <div class="content">
          <v-SongListContent :clickSong.sync="clickSong"></v-SongListContent>
          <v-Comment></v-Comment>
        </div>
      </div>
    </div>
    <div class="right">
      <v-AlbumListRight></v-AlbumListRight>
    </div>
  </div>
</div>  
</template>

<script>
import axios from 'axios';
import SongListContent from './SongListContent.vue';
import Comment from './Comment.vue';
import AlbumListRight from './AlbumListRight.vue';
export default {
  name: 'song',
  data () {
    return {
    	song:this.$route.params.song,
      clickSong:[{
        imgs:undefined,
        album:undefined,
        song:undefined,
        singer:undefined,
        tag:undefined,
        summary:undefined
      }]
    }
  },
  computed:{
    
  },
  mounted(){
  axios.post('http://localhost:3000/songs/songInfo',{song:this.song})
  .then(res=>{
    console.log(res.data);
    this.clickSong=res.data;  //将取得的8个专辑赋值给imgData
  }).
  catch(err=>{
    console.log(err);
  });
 },
 components:{
    'v-SongListContent':SongListContent,
    'v-Comment':Comment,
    'v-AlbumListRight':AlbumListRight
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
.wrap{
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  overflow: hidden;
  background: url('../assets/imgs/wrap4.png') repeat-y center 0;
}
.wrap2{
  float: left;
  width: 100%;
  margin-right: -270px;
}
.left{
  margin-right: 271px;
}
.content{
  padding: 47px 30px 40px 39px;
}
.right{
  float: right;
  width: 270px;
}
</style>
