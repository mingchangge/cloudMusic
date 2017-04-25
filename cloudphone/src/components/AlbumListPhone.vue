<template>
  <div class="albumList">
   <div class="wrap">
      <v-AlbumListContent :album="album"></v-AlbumListContent>
      <v-AlbumListSong :songs="songs"></v-AlbumListSong>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import AlbumListContent from './AlbumListContent';
import AlbumListSong from './AlbumListSong';
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
    'v-AlbumListSong':AlbumListSong
  },
  mounted(){
    axios.post('http://localhost:3000/songs/songList',{album:this.album})
      .then(res=>{
        // 将查找的值赋给本组件里的属性
        this.songs=res.data;
        console.log(res.data);
      }).
      catch(err=>{
        console.log(err);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  width: 100%;
  height: 100%;
}
</style>
