<template>
  <div class="middle">
    <div class="wrap">
      <ul>
        <li>
          <a class="fm">电台</a>  
        </li>
        <li>
          <a class="recomm">推荐</a>   
        </li>
        <li>
          <a class="list">歌单</a>
        </li>
      </ul>
      <p>
       <span>私人FM</span>
       <span>每日歌曲推荐</span>
       <span>云音乐热歌榜</span>
    </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'middle',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  width: 100%;
  border-bottom: 1px solid #999;
}
.wrap li{
  display: inline-block;
  width: 32%;
  vertical-align: bottom;
  text-align: center;
}
.wrap li a{
  display: inline-block;
  width: 54px;
  height: 54px;
  cursor: pointer;
  font-size: 0;
}
.wrap li .fm{
  background: url('../../static/img/phone/aee.png');
}
.wrap li .recomm{
  background: url('../../static/img/phone/aef.png');
}
.wrap li .list{
  background: url('../../static/img/phone/aei.png');
}
p{
  margin: 2px 0 5px;
  list-style: 18px;
}
p span{
  display: inline-block;
  width: 32%;
  text-align: center;
  color: #000;
}
</style>
