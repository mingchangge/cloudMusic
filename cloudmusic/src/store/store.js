// store.js 入口文件，在根组件调用，然后所有子组件可以共享数据。

import Vue from 'vue';
import Vuex from 'vuex';    //引入vuex

import login from './modules/login.js'  //引入login模块
import song from './modules/song.js'

Vue.use(Vuex);  // //vue使用veux,通过Vue这个对象上的use这个方法。
const debug = process.env.NODE_ENV !== 'production'; //通过NODE_ENV可以来设置环境变量（默认值为development）。
 // 一般我们通过检查这个值来分别对开发环境和生产环境下做不同的处理。
Vue.config.debug = debug;


export default new Vuex.Store({  //导出并创建store实例
    modules: {     //引入模板文件
        login,
        song
    },
    strict: debug  //暂时启用严格的debug模式，后续可以关闭
    // strict: false
});
