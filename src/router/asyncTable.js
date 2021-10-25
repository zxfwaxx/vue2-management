
import Layout from '@/components/Layout'
const myTable = [
  {
    path: '/tables',
    name: 'Table',
    isShowSide: true,
    alwaysRoot:false,
    component: Layout,
    meta: { title: '表格组件', icon: 'el-icon-notebook-2' },
    children: [
      {
        path: '/tables',
        name: 'Tables',
        component: () => import('@/views/Tables/index.vue'),
        meta: { title: '表格组件', icon: 'el-icon-notebook-2', roles: ['admin'] }
      },
    ]
  }

]

export default myTable