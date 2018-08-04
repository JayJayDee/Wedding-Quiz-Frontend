import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoadingPage from './views/LoadingPage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loadingPage',
      component: LoadingPage
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
