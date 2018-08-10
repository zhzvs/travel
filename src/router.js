import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
