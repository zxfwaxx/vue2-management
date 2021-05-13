export default [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/home',
    name: 'Home',
    isShowSide: true,
    alwaysRoot:false,
    redirect: '/dashboard',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Layout'),
    meta: { title: '系统首页',icon:'el-icon-s-platform' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '系统首页',icon:'el-icon-s-platform' },
      },
    ]
  },
  {
    path: '/login',
    name:'logn',
    component: () => import('@/views/Login/Login.vue')
  },
]
