/*  */
import Vue from 'vue'
import router from './router'
import store from './store'

import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

// axios

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
