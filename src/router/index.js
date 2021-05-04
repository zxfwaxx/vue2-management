import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入基础路由
import basicRouter from "./basicRouter"
// const originalPush = VueRouter.prototype.push;
// const originalReplace = VueRouter.prototype.replace;
// //push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject);
//   return originalPush.call(this, location).catch(err => err);
// };
// //replace
// VueRouter.prototype.replace = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//     return originalReplace.call(this, location, onResolve, onReject);
//   return originalReplace.call(this, location).catch(err => err);
// };

const router = new VueRouter({
  routes: basicRouter
})


export default router
