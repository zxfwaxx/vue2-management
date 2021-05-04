import { Menu } from '../mutation-type'

//引入基本路由
import basicRouter from "@/router/basicRouter"
import asyncRouter from "@/router/asyncRouter"

// eslint-disable-next-line no-unused-vars
function hasPermission (route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

function filterRouter (routerArr, roles) {
  const showRouter = routerArr.filter(route => {
    if (hasPermission(route, roles)) {
      if (route.children && route.children.length) {
        route.children = filterRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return showRouter
}

export default {
  state: {
    asyncRouter: [],
    basicRouter: [],
    allRouter: []
  },
  mutations: {
    [Menu] (state, router) {
      state.asyncRouter = router
      state.allRouter = basicRouter.concat(router)
    },
  },
  actions: {
    addMenu ({ commit }, roles) {
      return new Promise(resolve => {
        const addRouter = filterRouter(asyncRouter, roles)
        commit(Menu, addRouter)
        resolve()
      })

    }
  }

}