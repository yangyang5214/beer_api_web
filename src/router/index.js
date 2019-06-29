import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


// 小工具
import GraphBed from '@/components/tools/GraphBed'
import DailyPhoto from '@/components/tools/DailyPhoto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/daily/photo',
      name: 'DailyPhoto',
      component: DailyPhoto
    },
    {
      path: '/graphBed',
      name: 'GraphBed',
      component: GraphBed
    }

  ]
})
