import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Backend from '@/pages/backend/Backend'
import Posts from '@/pages/posts/PostsAll'
import PostNew from '@/pages/posts/New'
import PostEdit from '@/pages/posts/Edit'
import Companies from '@/pages/companies/CompaniesAll'
import CompanyNew from '@/pages/companies/New'
import CompanyEdit from '@/pages/companies/Edit'
import Signup from '@/pages/register/Signup'
import Signin from '@/pages/register/Signin'
import Index from '@/pages/index/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {path: '/', redirect: 'index'},
        {path: '/index', component: Index}
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
        { path: '/admin/companies-edit/:id', component: CompanyEdit }
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
