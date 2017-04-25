<template>
<!-- 主页 -->
  <div class="playBar">
    <div class="wrap">
      <div class="bar">
        <div class="img">
          <img src="../../../static/img/phone/18719185464749718.jpg"/>
        </div>
        <div class="song">
          <p>高尚</p>
          <span>点击可切换上下首哦</span>
        </div>
        <div class="play">
          <a class="playByn"></a>
          <a class="collect"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'playBar',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgba(0,0,0,0.8);
  padding:5px;
}
.bar{
  display: flex;
}
.img{
  flex: 1;
}
.img img{
  margin-left: 2px;
  width: 80%;
}
.song{
  flex: 3;
  color: #FFF;
}
.song span{
  color: #666;
}
.play{
  flex: 2;
}
.play a{
  display: inline-block;
  width: 50px;
  height: 50px;
}
.playByn{
  background: url('../../../static/img/phone/play.png') no-repeat;
  background-size: 100%;
}
.collect{
  background: url('../../../static/img/phone/collect.png') no-repeat;
  background-size: 100%;
}
</style>
