<template>
  <div id="app">
    <router-view></router-view>
     <v-PlayBar class="phoneShow"></v-PlayBar><!--手机端播放器控制条 -->
  </div>
</template>

<script>
import PlayBar from './components/PlayBar.vue'
export default {
  name: 'app',
  components:{
   'v-PlayBar':PlayBar
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #333;
}
</style>
