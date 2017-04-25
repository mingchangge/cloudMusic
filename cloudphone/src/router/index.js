import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import AlbumListPhone from '@/components/AlbumListPhone.vue'
import song from '@/components/song.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/AlbumListPhone/:album',
      name:'AlbumListPhone',
      component:AlbumListPhone
    },
    {
      path:'/song/:song',
      name:'song',
      component:song
    }
  ]
})
