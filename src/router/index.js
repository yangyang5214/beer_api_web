import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '../components/HelloWorld'

// 小工具
import GraphBed from '../components/tools/GraphBed'
import DailyPhoto from '../components/tools/DailyPhoto'
import UnderLineToCamelCase from "../components/tools/UnderLineToCamelCase"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'HelloWorld',
      default: '/tools/dailyPhoto',
      component: HelloWorld,
      children: [
        {
          path: '/tools/dailyPhoto',
          name: 'DailyPhoto',
          component: DailyPhoto
        },
        {
          path: '/tools/underLineToCamelCase',
          name: 'UnderLineToCamelCase',
          component: UnderLineToCamelCase
        },
        {
          path: '/tools/graphBed',
          name: 'GraphBed',
          component: GraphBed
        }
      ]
    }
  ]
})
