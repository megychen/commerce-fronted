import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Backend from '@/pages/backend/Backend'
import Posts from '@/pages/posts/PostsAll'
import PostNew from '@/pages/posts/New'
import PostEdit from '@/pages/posts/Edit'

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
      component: Backend,
      children: [
        {path: '/admin', redirect: 'posts'},
        { path: '/admin/posts', component: Posts },
        { path: '/admin/posts-new', component: PostNew },
        { path: '/admin/posts-edit/:id', component: PostEdit }
      ]
    }
  ]
})
