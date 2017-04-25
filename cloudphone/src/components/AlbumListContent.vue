<template>
  <div class="albumListContent">
    <div class="wrap">
    	<div class="top">
    	    <a class="back" @click="back">&lt;&lt;</a>
    		<p>歌单</p>
    		<div class="search">
    			<a>查找</a>
    		</div>
    	</div>
    	<div class="album">
    	   <div class="albumImg">
    	   		<img src="../../static/img/phone/18719185464749718.jpg"/>
    	   </div>
		   <div class="albumInfo">
		   		<h2>{{album}}</h2>
		   </div>
		</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'albumListContent',
  data () {
    return {
     
    }
  },
  props:{
    album:{    //接收父组件传值
	        type:String,
	        required:true,
	        default:'愿形容我的词 别太荒唐'
    	}
	},
  methods:{
    back(){
      this.$router.go(-1);  //跳回主页
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
	height: 20%;
	min-height: 200px;
	background: rgba(64,83,89,0.6);
}
.top{
	padding: 10px 0 0 10px;
}
.back{
	display: inline-block;
	color: #FFF;
	font-size: 22px;
}
.top p{
	display: inline-block;
	font-weight: bold;
	font-size: 20px;
	color: #FFF;
	margin-left:5px;
}
.search{
  float: right;
}
.search a{
  display: inline-block;
  width: 40px;
  height:40px;
  background: url('../../static/img/phone/search.png') no-repeat;
  background-size: 60%;
  cursor: pointer;
  font-size: 0;
  vertical-align: baseline;
}
.album{
	display: flex;
	margin: 10px 0 0 10px;
}
.albumImg{
	flex: 1;
}
.albumImg img{
	width: 80%
}
.albumInfo{
	flex: 2;
}
</style>
