// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'   //引入vuex
import store from  './store/store'  //引用store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store   //注册store组件            
            //把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
});

