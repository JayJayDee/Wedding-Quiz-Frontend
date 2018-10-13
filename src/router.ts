import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue';
import Quiz from './views/Quiz.vue';
import Rank from './views/Rank.vue';
import QuizTest from './views/quiz/QuizTest.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/testquiz',
      name: 'testquiz',
      component: QuizTest
    }
  ]
})
