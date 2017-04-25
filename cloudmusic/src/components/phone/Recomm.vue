<template>
<!-- 主页 -->
  <div class="recomm">
  <div class="wrap">
  <h1>推荐歌单 &gt;</h1>
    <div class="content">
      <ul>
        <li  v-for='(img,index) in imgData'>
          <div>
            <router-link v-bind:to="'/AlbumListPhone/'+img.album">
               <img v-bind:src='img.imgs'/>
            </router-link>
             <div class="bottom">
              <a class="play" @click='playClick(img,index)'>
              </a>
               <span class="head"></span>
             </div>
          </div>
          <p>
            <a  class="hideen">{{img.album}}</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import AlbumListPhone from './AlbumListPhone.vue';
import axios from 'axios';
export default {
  name: 'recomm',
  data () {
    return {
      imgData:[],  //接受axios取得的8个专辑
      index:0,    //循环imgData下标
      album:''  //获取专辑
    }
  },
  created(){
    // 获取首页的8个专辑列表
    axios.get('http://localhost:3000/songs/recommedSong')
    .then(res=>{
      this.imgData=res.data;  //将取得的8个专辑赋值给imgData
    }).
    catch(err=>{
      console.log(err);
    });
  },
  components:{
    AlbumListPhone:'AlbumListPhone'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  width: 100%;
  overflow: hidden;
  text-align: center;
}
h1{
  text-align: left;
  font-size: 18px;
  margin-left: 25px;
  margin-top: 2px;
}
.content li{
  display: inline-block;
  width: 22%;
  vertical-align: top;
  text-align: center;
  margin:4px 0 2px;
}
li a{
  display: inline-block;
}
li img{
  width: 90%;
}
p{
  width: 70%;
  text-align: center;
}
p a{
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.hideen{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
</style>
