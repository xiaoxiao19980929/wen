import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 配置每一个组件可以使用vue-router
Vue.use(VueRouter)
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint)

import '../src/assets/css/cssreset.css'

import router from '../src/assets/js/router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
