import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
