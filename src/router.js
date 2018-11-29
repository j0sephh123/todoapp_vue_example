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
      path: '/admin',
      name: 'Admin',
      component: () => import('./views/Admin.vue'),
    },
  ],
});
