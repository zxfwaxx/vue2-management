import router from './router'
import { getData } from '@/api/index.js'
router.beforeEach((to, from, next) => {
  getData().then(res => {
    console.log(res, 'res')
  })
  console.log('路由前值守卫')
  next()
})