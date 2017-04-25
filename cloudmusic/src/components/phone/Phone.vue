<template>
<!-- 主页 -->
  <div class="phone">
  <!-- 轮播图 -->
    <v-Slide></v-Slide>
    <!-- 主页content部分 -->
    <v-Middle></v-Middle>
    <v-Recomm></v-Recomm>
  </div>
</template>
<script>
import Slide from './Slide.vue';
import Middle from './Middle.vue';
import Recomm from './Recomm.vue';
export default {
  name: 'phone',
  data () {
    return {
     
    }
  },
  components:{
    'v-Slide':Slide,
    'v-Middle':Middle,
    'v-Recomm':Recomm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
