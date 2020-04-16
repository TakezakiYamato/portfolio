import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import colors from 'vuetify/lib/util/colors'
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  theme: {
    themes: {
      light: {
        primaryRed: colors.red.darken2, //#D32F2F
        primaryTeal: colors.teal.darken2, //#00796B
        primaryDeepPurple: colors.deepPurple.darken2, //#512DA8
        secondaryRed: colors.red.lighten3, // #EF9A9A
        secondaryTeal: colors.teal.lighten3, // #80CBC4
        secondaryDeepPurple: colors.deepPurple.lighten3, //#B39DDB
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
}).$mount('#app')
