import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyMusic from '@/components/MyMusic'
import AlbumList from '@/components/AlbumList'
import Song from '@/components/Song'
// 手机部分
import Phone from '@/components/phone/Phone'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/MyMusic',
      name: 'MyMusic',
      component: MyMusic
    },
    {
      path:'/AlbumList/:album',
      name:'AlbumList',
      component:AlbumList
    },
    {
      path:'/Song/:song',
      name:'Song',
      component:Song
    },
    {
      path:'/phone/Phone',
      name:'phone',
      component:Phone
    }
  ]
})
