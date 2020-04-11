import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';

import { store } from './stores';
import router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
