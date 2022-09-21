import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

// 关闭vue生产提示
Vue.config.productionTip = false
Vue.use(VueLazyload)

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
