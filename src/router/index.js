import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Layout'),
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '系统首页' }
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
