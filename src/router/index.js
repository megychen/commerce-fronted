import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue'),
      children: [
        { path: '/index', component: () => import('@/pages/index/Index.vue') },
        { path: '/intro', component: () => import('@/pages/intro/Intro.vue') },
        { path: '/news', component: () => import('@/pages/news/NewsAll.vue') },
        {
          path: '/fengcai',
          component: () => import('@/pages/fengcai/FengCai'),
          redirect: '/fengcai/entrepreneurs',
          children: [
            {path: '/fengcai/entrepreneurs', component: () => import('@/pages/fengcai/components/Entrepreneur')},
            {path: '/fengcai/companies', component: () => import('@/pages/fengcai/components/Company')}
          ]
        },
        {path: '/posts/:id', component: () => import('@/pages/detail/Post')},
        {path: '/companies/:id', component: () => import('@/pages/detail/Company')},
        {path: '/entrepreneurs/:id', component: () => import('@/pages/detail/Entrepreneur')}
      ]
    }, {
      path: '/admin',
      name: 'Backend',
      redirect: '/admin/posts',
      component: () => import('@/pages/backend/Backend'),
      children: [
        { path: '/admin/posts', component: () => import('@/pages/posts/Posts') },
        { path: '/admin/posts-new', component: () => import('@/pages/posts/New') },
        { path: '/admin/posts-edit/:id', component: () => import('@/pages/posts/Edit') },
        { path: '/admin/companies', component: () => import('@/pages/companies/Companies') },
        { path: '/admin/companies-new', component: () => import('@/pages/companies/New') },
        { path: '/admin/companies-edit/:id', component: () => import('@/pages/companies/Edit') },
        { path: '/admin/entrepreneurs', component: () => import('@/pages/entrepreneurs/Entrepreneurs') },
        { path: '/admin/entrepreneurs-new', component: () => import('@/pages/entrepreneurs/New') },
        { path: '/admin/entrepreneurs-edit/:id', component: () => import('@/pages/entrepreneurs/Edit') },
        { path: '/admin/users', component: () => import('@/pages/users/Users') },
        { path: '/admin/users-reset/:id', component: () => import('@/pages/users/Reset') }
      ]
    }, {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/pages/register/Signup')
    }, {
      path: '/signin',
      name: 'Signin',
      component: () => import('@/pages/register/Signin')
    }
  ]
})
