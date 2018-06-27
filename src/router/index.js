import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import test from '@/view/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/test',
      component: test
    }
  ]
})