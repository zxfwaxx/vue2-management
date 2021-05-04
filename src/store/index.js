import Vue from 'vue'
import Vuex from 'vuex'

import menu from "./module/menu"
import getters from "./getter"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu
  },
  getters
})
