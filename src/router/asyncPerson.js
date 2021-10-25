import Layout from '@/components/Layout'
const myself = [
  {
    path: '/myself',
    name: 'Myself',
    isShowSide: true,
    alwaysRoot:true,
    component: Layout,
    meta: { title: '个人中心', roles: ['admin'], icon: 'el-icon-user' },
    children: [
      {
        path: '/myperson',
        name: 'Myperson',
        component: () => import('@/views/myself/index.vue'),
        meta: { title: '个人首页', icon: 'el-icon-user', roles: ['admin'] }
      },
    ]
  }
]

export default myself