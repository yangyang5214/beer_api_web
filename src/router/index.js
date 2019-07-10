import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '../components/HelloWorld'

// 小工具
import GraphBed from '../components/tools/GraphBed'
import DailyPhoto from '../components/tools/DailyPhoto'
import UnderLineToCamelCase from "../components/tools/UnderLineToCamelCase"
import Jrebel from "../components/tools/Jrebel"


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
      component: HelloWorld,
      children: [
        {
          path: '/',
          component: DailyPhoto
        },
        {
          path: '/tools/dailyPhoto',
          component: DailyPhoto
        },
        {
          path: '/tools/jrebel',
          component: Jrebel
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
