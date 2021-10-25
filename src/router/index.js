import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入基础路由
import basicRouter from "./basicRouter"
// import asyncRouter from "./asyncRouter"
const router = new VueRouter({
  routes: basicRouter
})


export default router
