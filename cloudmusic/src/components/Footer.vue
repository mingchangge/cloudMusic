<template>
<!-- 页尾组件 -->
  <div class="footer">
   <footer>
     <div class="wrap">
       <ul>
         <li>
          <a>
            <P>独立音乐人招募计划</P>
            <span>加入我们 即将与超过亿万乐迷互动</span>
          </a>
         </li>
        <li>
        <a>
          <P>音乐专栏招募计划</P>
          <span>加入我们 与同道中人交流心得</span>
        </a>
       </li>
       <li class="copy">
          <P class="about">
           <a>关于网易</a><span>-</span>
           <a>客户服务</a><span>-</span>
           <a>服务条款</a><span>-</span>
           <a class="webNav">网站导航</a>
           <span>网易公司版权所有©1997-2017</span>
          </P>
          <p>
           <span>杭州乐读科技有限公司运营：</span>
           <a>浙网文[2015]0415-135号</a>
           <a class="back"><i></i>意见反馈</a>
          </p>
        </a>
       </li>
       </ul>
     </div>
   </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
}
footer{
  height: 125px;
  border-top: 1px solid #d5d5d5;
  background: #f9f9f9;
}
.wrap{
  width: 980px;
  margin: 0 auto;
  height: 125px;
}
.wrap li{
  display: inline-block;
  cursor: pointer;
  position: relative;
}
.wrap li:nth-child(2){
  margin: 0 60px;
}
.wrap li>a{
  display: block;
  margin: 29px 0 0 0;
  padding-left: 53px;
  line-height: 22px;
}
.wrap li>a::before{
  content: '';
  position: absolute;
  left:0;
  display: block;
  width: 47px;
  height: 46px;
}
.wrap li:nth-child(1)>a::before{
  background: url('../assets/imgs/sprite.png');
  background-position: -400px -80px;
}
.wrap li:nth-child(2)>a::before{
  background: url('../assets/imgs/sprite.png');
  background-position: -400px -125px;
}
.wrap p{
  color: #666;
}
.wrap span{
  color: #999;
  cursor: text;
}
.copy p{
  line-height: 22px;
}
.about span{
  color: #9b9b9b;
}
.copy p a:hover{
  text-decoration: underline;
}
.back{
  padding-left: 19px;
}
.back i{
  display: inline-block;
  width: 19px;
  height: 16px;
  padding-left: 4px;
  background: url('../assets/imgs/icon.png') no-repeat;
  background-position: 0 -39px;
  vertical-align: middle;
}
</style>
