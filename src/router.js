import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Index.vue'),
    },
    {
      path: '/dota',
      name: 'Dota',
      component: () => import('./views/Dota.vue'),
    },
    {
      path: '/dota/:id',
      name: 'HeroPage',
      component: () => import('./views/HeroPage.vue'),
    },
  ],
});
