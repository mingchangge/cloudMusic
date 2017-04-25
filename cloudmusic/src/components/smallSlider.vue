<template>
<!-- 小轮播图 -->
<div class="smallSlider">
    <div class="Albulm">
		<div class="title">
			<a>新碟上架</a>
			<span>
				<a>更多</a>
			</span>
		</div>
	<div class="newAlbulm">
		<div class="albumSlider">
	        <a class="albumLeft" v-on:click.prevent='albumLeft'></a>
	        <a class="albumRight" v-on:click.prevent='albumRight'></a>
	        <div class="smallSliders">
	          <ul ref="uls" style="left: 0;">
	            <li v-for='item in imgData'>
	              <div class="slidersInfo">
	                <a>
	                  <img v-bind:src="item.imgs"/>
	                </a>
	                <a class="slidersplay">
	                  <audio></audio>
	                </a>
	              </div>
	              <p class="hideen">
	                <a class="head">{{item.song}}</a>
	              </p>
	              <p class="hideen">
	                <a>{{item.album}}</a>
	              </p>
	            </li>
	          </ul>
	        </div>
	      </div>
		</div>
  	</div>
</div>  
</template>

<script>
import axios from 'axios';
export default {
  name: 'smallSlider',
  data () {
    return {
    	imgData:[]
    }
  },
  created(){
    axios.get('http://localhost:3000/songs/smallSlider')
    .then(res=>{
      this.imgData=res.data;
       // console.log(this.imgData);
    }).
    catch(err=>{
      console.log(err);
    });
  },
  methods:{
  	 albumLeft(){
      if(this.$refs.uls.style.left=='0px'){
        this.$refs.uls.style.left='-645px';
      }else{
        this.$refs.uls.style.left=0;
      }
    },
    albumRight(){
      if(this.$refs.uls.style.left=='0px'){
        this.$refs.uls.style.left='-645px';
      }else{
        this.$refs.uls.style.left=0;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:hover{
	text-decoration: underline;
}
li{
	list-style: none;
}
.title{
  height: 33px;
  padding: 0 10px 0 34px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
}
.title>a{
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  cursor: pointer;
}
.title>a:hover{
  text-decoration: none;
}
.title ul,
.title li{
  display: inline-block;
}
.title ul{
  margin: 7px 0 0 20px;
}
.title li a{
  color: #666;
  cursor: pointer;
}
.title li:after{
  content: '|';
  margin: 0 10px;
  color: #ccc;
}
.title li:last-child::after{
  content: '';
}
.title span{
  float: right;
  margin-top: 9px;
}
.title span a{
  cursor: pointer;
}
.title span a:after{
  display: inline-block;
  content: '';
  width: 12px;
  height: 12px;
  margin-left: 4px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: 0 -240px;
  vertical-align: middle;
}
.hideen{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.newAlbulm{
	height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
}
.albumSlider{
  height: 184px;
  padding-left: 16px;
  background: #f5f5f5;
  border: 1px solid #fff;
  position: relative;
}
.albumLeft{
  position: absolute;
  left: 4px;
  top: 71px;
  display: inline-block;
  width: 17px;
  height: 17px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: -260px -75px;
  cursor: pointer;
}
.albumRight{
  position: absolute;
  right: 4px;
  top: 71px;
  display: inline-block;
  width: 17px;
  height: 17px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: -300px -75px;
  cursor: pointer;
}
.smallSliders{
  width: 645px;
  height: 180px;
  overflow: hidden;
  position: relative;
}
.smallSliders ul{
  position: absolute;
  top: 0;
  width: 1350px;
  margin: 28px 0 0 0;
}
.smallSliders li{
  display: inline-block;
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background: url('../assets/imgs/index.png') no-repeat;
  background-position: -260px 100px;
  overflow: hidden;
}
.slidersInfo{
  position: relative;
}
.slidersInfo li{
  width: 100px;
  height: 100px;
  margin-bottom: 7px;
}
.slidersInfo a{
  display: inline-block;
  width: 118px;
  height: 100px;
  background: url('../assets/imgs/coverall.png') no-repeat;
  background-position: 0 -570px;
  cursor: pointer;
}
.slidersInfo .slidersplay{
  display: none;
  position: absolute;
  right: 24px;
  bottom: 7px;
  width: 22px;
  height: 22px;
  background: url('../assets/imgs/iconall.png') no-repeat;
  background-position: 0 -85px;
}
.slidersInfo:hover .slidersplay{
  display: block;
}
.slidersplay:hover{
  background-position: 0 -110px;
}
.slidersInfo img{
  width: 100px;
  height: 100px;
}
.smallSliders p{
  width: 90%;
  line-height: 18px;
}
.smallSliders p a{
  cursor: pointer;
  color: #666;
}
.smallSliders .head{
  color: #000;
}
</style>
