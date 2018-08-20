import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Backend from '@/pages/backend/Backend'
import Posts from '@/pages/posts/Posts'
import PostNew from '@/pages/posts/New'
import PostEdit from '@/pages/posts/Edit'
import Companies from '@/pages/companies/Companies'
import CompanyNew from '@/pages/companies/New'
import CompanyEdit from '@/pages/companies/Edit'
import Signup from '@/pages/register/Signup'
import Signin from '@/pages/register/Signin'
import Index from '@/pages/index/Index.vue'
import Intro from '@/pages/intro/Intro.vue'
import NewsAll from '@/pages/news/NewsAll.vue'
import Entrepreneurs from '@/pages/entrepreneurs/Entrepreneurs'
import EntrepreneurNew from '@/pages/entrepreneurs/New'
import EntrepreneurEdit from '@/pages/entrepreneurs/Edit'

import PostDetail from '@/pages/detail/Post'
import CompanyDetail from '@/pages/detail/Company'
import EntrepreneurDetail from '@/pages/detail/Entrepreneur'
import FengCai from '@/pages/fengcai/FengCai'
import ComFengcai from '@/pages/fengcai/components/Company'
import EntFengcai from '@/pages/fengcai/components/Entrepreneur'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      name: 'Home',
      component: Home,
      children: [
        {path: '/index', component: Index},
        {path: '/intro', component: Intro},
        {path: '/news', component: NewsAll},
        {
          path: '/fengcai',
          component: FengCai,
          redirect: '/fengcai/entrepreneurs',
          children: [
            {path: '/fengcai/entrepreneurs', component: EntFengcai},
            {path: '/fengcai/companies', component: ComFengcai}
          ]
        },
        {path: '/posts/:id', component: PostDetail},
        {path: '/companies/:id', component: CompanyDetail},
        {path: 'entrepreneurs/:id', component: EntrepreneurDetail}
      ]
    }, {
      path: '/admin',
      name: 'Backend',
      component: Backend,
      children: [
        {path: '/admin', redirect: 'posts'},
        { path: '/admin/posts', component: Posts },
        { path: '/admin/posts-new', component: PostNew },
        { path: '/admin/posts-edit/:id', component: PostEdit },
        { path: '/admin/companies', component: Companies },
        { path: '/admin/companies-new', component: CompanyNew },
        { path: '/admin/companies-edit/:id', component: CompanyEdit },
        { path: '/admin/entrepreneurs', component: Entrepreneurs },
        { path: '/admin/entrepreneurs-new', component: EntrepreneurNew },
        { path: '/admin/entrepreneurs-edit/:id', component: EntrepreneurEdit }
      ]
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }, {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
