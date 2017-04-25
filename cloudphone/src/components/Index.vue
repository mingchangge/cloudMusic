<template>
  <div class="index">
    <v-HeadePhone class="phoneShow"></v-HeadePhone>  <!-- 手机端头部   -->
     <v-Slide></v-Slide>
    <!-- 主页content部分 -->
    <v-Middle></v-Middle>
    <v-Recomm></v-Recomm>
  </div>
</template>

<script>
import HeadePhone from './HeadePhone.vue'
import Slide from './Slide.vue';
import Middle from './Middle.vue';
import Recomm from './Recomm.vue';
export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  components:{
    'v-HeadePhone':HeadePhone,
    'v-Slide':Slide,
    'v-Middle':Middle,
    'v-Recomm':Recomm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
