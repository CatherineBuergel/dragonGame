import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Game from './views/Game.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: Start
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/game/:id',
      props: true,
      name: 'Game',
      component: Game
    },
    {
      path: '*',
      name: 'Start',
      component: Start
    }
  ]
})
