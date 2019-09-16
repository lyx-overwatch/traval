import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
