<template>
<!-- 大轮播图 -->
<div class="slider">
 <div class="sliders"  v-if='bgId==imgId' v-bind:style="{background:'url('+bgData[bgId].url+')'}">
  <div class="wrap">
   	<div class="slider-imgs">
   		<ul>
   			<li v-for='(item,index) in imgData' v-if='imgId==index'>
   			 <a>
   			 	<img v-bind:src='item.url'/>
   			 </a>
   			</li>
   		</ul>
   	</div>
   	<div class="focus">
   		<ul>
   			<li v-for='(item,index) in imgData' v-bind:class="{'active':imgId==index}" @click='clickLi(index)'></li>
   		</ul>
   	</div>
   	<div class="btn prev"  @click='clickPrev'></div>
   	<div class="btn next"  @click='clickNext'></div>
   	<div class="download">
   		<a>下载客户端</a>
   		<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
   	</div>
 </div>
</div>
</div>  
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
    	imgData:[
    	   {url:require('../assets/imgs/9b.jpg')},
    	   {url:require('../assets/imgs/2Q1.jpg')},
    	   {url:require('../assets/imgs/2q.jpg')},
    	   {url:require('../assets/imgs/2Q3.jpg')},
         {url:require('../assets/imgs/1963157.jpg')}
    	],
    	bgData:[
    	  {url:require('../assets/imgs/wq553.jpg')},
    	  {url:require('../assets/imgs/Z.jpg')},
    	  {url:require('../assets/imgs/9k.jpg')},
    	  {url:require('../assets/imgs/93.jpg')},
        {url:require('../assets/imgs/TfX8znEsl-WCfC9BfsBr0g%3D%3D%2F18896206835003954.jpg')}
    	],
    	imgId:0,
    	bgId:0
    }
  },
  mounted:function(){
  	var _this=this;  //声明this，防止出现this指向的错误
  	var timer=setInterval(function(){
  		if(_this.imgId>=0&&_this.imgId<_this.imgData.length-1){
  			_this.imgId=parseInt(_this.imgId)+1;
  			_this.bgId=parseInt(_this.bgId)+1;
  		}else if(_this.imgId==_this.imgData.length-1){
  			_this.imgId=0;
  			_this.bgId=0;
  		}
  	},5000);
  },
  methods:{
  	clickLi:function(index){
  		this.imgId=index;
  		this.bgId=this.imgId;
  	},
  	clickPrev:function(){
  		var _this=this;
  		if(_this.imgId>0&&_this.imgId<_this.imgData.length){
  		   _this.imgId=parseInt(_this.imgId)-1;
  		   _this.bgId=parseInt(_this.bgId)-1;	
  		}else if(_this.imgId==0){
  			alert('已是第一张');
  		}
  	},
  	clickNext:function(){
  		var _this=this;
  		if(_this.imgId<_this.imgData.length-1){
  		   _this.imgId=parseInt(_this.imgId)+1;	
  		   _this.bgId=parseInt(_this.bgId)+1;
  		}else if(_this.imgId==_this.imgData.length-1){
  			alert('已是最后一张');
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
	list-style: none;
}
.slider{
	width: 100%;
	height: 336px;
	overflow: hidden;
}
.sliders{
	width: 100%;
	height: 336px;
	overflow: hidden;
	background-repeat: repeat-x;
}
.wrap{
	width: 982px;
  height: 336px;
	margin:0 auto;
	position: relative;
}
.slider-imgs{
	width: 982px;
  height: 336px;
	overflow: hidden;
}
.slider-imgs img{
	width: 730px;
  height: 336px;
}
.focus{
	position: absolute;
	top: 310px;
  left: 0;
  width: 730px;
  height: 20px;
  text-align: center;
}
.focus li{
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: yellow;
	margin:4px;
	cursor: pointer;
	background: url('../assets/imgs/banner.png') no-repeat;
	background-position: 3px -343px;
}
.showLi{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: yellow;
  margin:4px;
  cursor: pointer;
  background: url('../assets/imgs/banner.png') no-repeat;
  background-position: -16px -343px;
}
.btn{
	position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  text-indent: -9999px;
  background: url('../assets/imgs/banner.png') no-repeat;
  cursor: pointer;
}
.prev{
	left: -68px;
  background-position: 0 -360px;
}
.prev:hover{
	background-position: 0 -430px;
}
.next{
	right: -68px;
  background-position: 0 -508px;
}
.next:hover{
	background-position: 0 -578px;
}
.download{
	position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 336px;
  background: url('../assets/imgs/download.png') no-repeat;
}
.download a{
	display: block;
  width: 215px;
  height: 56px;
  margin: 212px 0 0 19px;
  background: url('../assets/imgs/download.png') no-repeat;
  background-position: 0 9999px;
  text-indent: -9999px;
  cursor: pointer;
}
.download a:hover{
  background-position: 0 -340px;
}
.download P{
	margin: 10px auto;
  text-align: center;
  color: #8d8d8d;
}
</style>
