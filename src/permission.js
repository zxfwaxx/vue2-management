import router from './router'
import store from './store'

let flag = false
router.beforeEach((to, from, next) => {
  console.log(flag, ' flag')
  if (!flag) {
    store.dispatch('addMenu', ['admin']).then(() => {
      console.log(...store.getters.asyncRouter, 'store.getters.asyncRouter')
      // vue3 是这样的
      const routes = store.getters.asyncRouter
      if (routes.length) {
        routes.forEach(item => {
          router.addRoute(item)
        })
      }
      // vue2 是这样动态添加路由的
      // router.addRoutes(store.getters.asyncRouter)
      flag = true
      // router.push({ path: to.path })
      next({ ...to })
    })
  } else {
    next()
  }

  // if (localStorage.getItem('username')) {
  //   console.log('已经登陆了')
  //   store.dispatch('addMenu', ['admin']).then(() => {
  //     console.log([...store.getters.asyncRouter], 'store.getters.asyncRouter')
  //     router.addRoutes(store.getters.asyncRouter)
  //     // flag = true
  //     console.log(router,'ss')
  //     next()
  //   })
  // } else {
  //   next()
  // }
  /* has token */
  // let token = true
  // if (token) {
  //   store.dispatch('addMenu', ['admin']).then(() => {
  //     // 根据roles权限生成可访问的路由表
  //     // 动态添加可访问路由表
  //     router.addRoutes(store.getters.asyncRouter)
  //     // 请求带有 redirect 重定向时，登录自动重定向到该地址
  //     const redirect = decodeURIComponent(from.query.redirect || to.path)
  //     if (to.path === redirect) {
  //       // set the replace: true so the navigation will not leave a history record
  //       next({ ...to, replace: true })
  //     } else {
  //       // 跳转到目的路由
  //       next({ path: redirect })
  //     }
  //   })
  // } else {
  //   next()
  // }
})