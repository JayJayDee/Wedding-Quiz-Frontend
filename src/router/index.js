import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import Rank from '../views/Rank.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  }
];

const router = new VueRouter({
  routes
});

export default router
