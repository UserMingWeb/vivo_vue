import Vue from 'vue'
import App from './App.vue'

//引入全局CSS
import './assets/style/reset.css'

import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
