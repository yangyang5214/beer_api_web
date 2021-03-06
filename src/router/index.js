import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '../components/HelloWorld'

// 小工具
import Urlparse from '../components/tools/Urlparse'
import DailyPhoto from '../components/tools/DailyPhoto'
import Jrebel from "../components/tools/Jrebel"
import Tips from "../components/tools/Tips"
import Words from "../components/tools/Words"


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
          path: '/tools/urlparse',
          name: 'urlparse',
          component: Urlparse
        },
        {
          path: '/tools/words',
          name: 'words',
          component: Words
        },
      ]
    }
  ]
})
