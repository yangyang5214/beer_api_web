import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '../components/HelloWorld'

// 小工具
import DailyPhoto from '../components/tools/DailyPhoto'
import UnderLineToCamelCase from "../components/tools/UnderLineToCamelCase"
import Jrebel from "../components/tools/Jrebel"
import Tips from "../components/tools/Tips"


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
          path: '/tools/tips',
          component: Tips
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
      ]
    }
  ]
})
