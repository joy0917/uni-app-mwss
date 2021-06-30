import Vue from 'vue'
import App from './App'
import store from './store'
import { hostsUrl } from '@/static/api/config'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$hostsUrl = hostsUrl

const app = new Vue({
  store,
  ...App
})
app.$mount()
