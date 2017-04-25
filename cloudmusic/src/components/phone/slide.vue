<template>
<!-- 大轮播图 -->
<div class="slider">
 <div class="sliders">
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
    	   {url:require('../../../static/img/phone/banner1.jpg')},
    	   {url:require('../../../static/img/phone/banner2.jpg')},
    	   {url:require('../../../static/img/phone/banner3.jpg')},
    	   {url:require('../../../static/img/phone/banner4.jpg')},
    	],
    	imgId:0
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
  	},4000);
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
	overflow: hidden;
}
.sliders{
	width: 100%;
	height: 200px;
	overflow: hidden;
	background-repeat: repeat-x;
}
.wrap{
  height: 200px;
	position: relative;
}
.slider-imgs{
  width: 100%;
  height: 200px;
	overflow: hidden;
}
.slider-imgs img{
	width: 100%;
  height: 50%;
}
</style>
