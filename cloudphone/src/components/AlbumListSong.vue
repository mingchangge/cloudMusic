<template>
  <div class="albumListSong">
  	<div class="wrap">
  		<div class="title">
	    	<h2>
	    		播放全部<span>(共4首)</span>	
	    	</h2>
    	</div>
    	<div class="alist">
    		<table>
    			<tr v-for="(s,index) in setinitsongs">
    				<td>
    				  <router-link class="song" v-bind:to="'/song/'+s.song">
			            {{s.song}}
			          </router-link>
    				</td>
    				<td>
			          <a>{{s.singer}}</a>
			        </td>
    			</tr>
    		</table>
    	</div>
  	</div> 
  </div>
</template>
<script>
export default {
  name: 'albumListSong',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
	width: 100%;
	height: 80%;
}
.title{
	margin: 10px;
}
.title h2{
	font-weight: normal;
	font-size: 18px;
}
.title h2 span{
	font-weight: normal;
	font-size: 14px;
	color: #999;
	margin-left: 4px;
}
.alist{
	margin: 10px 10px;
}
.song{
  display: inline-block;
  max-width: 99%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  cursor: pointer;
  text-decoration: none;
  color: #333
}
td{
	width: 80%;
  text-overflow: ellipsis;
}
td a{
  display: inline-block;
  width: 100px;
  text-overflow: ellipsis;
}
</style>
