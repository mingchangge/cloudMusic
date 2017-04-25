<template>
<div class="albumList">
 <div class="wrap">
    <div class="wrap2">
      <div class="left">
        <div class="content">
          <v-AlbumListContent :album="album"></v-AlbumListContent>
          <v-AlbumListSong  :songs="songs"></v-AlbumListSong>
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
import AlbumListContent from './AlbumListContent.vue';
import AlbumListSong from './AlbumListSong.vue';
import Comment from './Comment.vue';
import AlbumListRight from './AlbumListRight.vue';
export default {
  name: 'albumList',
  data () {
    return {
    	album:this.$route.params.album||isUserInfo.album||isUserInfo[0].songlist[0].album , //获取专辑名称
      songs:[]
    }
  },
  components:{
    'v-AlbumListContent':AlbumListContent,
    'v-AlbumListSong':AlbumListSong,
    'v-Comment':Comment,
    'v-AlbumListRight':AlbumListRight
  },
  mounted(){
    axios.post('http://localhost:3000/songs/songList',{album:this.album})
      .then(res=>{
        // 将查找的值赋给本组件里的属性console.log(res.data);
        this.songs=res.data;
        this.$store.commit('isAlbumSong',this.songs); //将专辑列表传给vuex
      }).
      catch(err=>{
        console.log(err);
      });
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
