import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "@common/components"
import "./lib/loading/index.js"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
