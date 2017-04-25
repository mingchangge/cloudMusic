<template>
<!-- 主页 -->
  <div class="index">
  <!-- 轮播图 -->
    <v-Slider></v-Slider>
    <!-- 主页content部分 -->
    <v-Recommend></v-Recommend>
  </div>
</template>
<script>
import Slider from './Slider.vue';
import Recommend from './Recommend.vue';
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  components:{
    'v-Slider':Slider,
    'v-Recommend':Recommend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
