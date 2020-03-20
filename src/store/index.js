import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import myPluginWithSnapshot from './plugins/myPluginWithSnapshot'
import logger from './plugins/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    products
  },
  strict: false,
  plugins: process.env.NODE_ENV !== 'production'
    ? [myPluginWithSnapshot, logger]
    : []
})
