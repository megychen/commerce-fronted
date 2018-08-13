import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Backend from '@/pages/backend/Backend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/admin',
      name: 'Backend',
      component: Backend
    }
  ]
})
