import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'
import vSelect from 'vue-select'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import * as VueGoogleMaps from 'vue2-google-maps'
import VueFormWizard from 'vue-form-wizard'

import './assets/css/app.scss'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
    libraries: 'places'
  },
  installComponents: true
})
Vue.use(VueFormWizard)
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.component('v-select', vSelect)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
