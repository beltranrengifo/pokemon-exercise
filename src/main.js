import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'reset-css/reset.css'
import '@/assets/scss/main.scss'
import '@fortawesome/fontawesome-pro/css/all.css'
import { undoKebabCase } from './filters'

Vue.config.productionTip = false
Vue.filter('undoKebabCase', undoKebabCase)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
