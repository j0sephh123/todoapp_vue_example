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
      path: '/snippets',
      name: 'Snippets',
      component: () => import('./views/Snippets.vue'),
    },
    {
      path: '/snippets/create',
      name: 'Create',
      component: () => import('./views/Create.vue'),
    },
    {
      path: '/snippets/:id',
      name: 'OneSnippet',
      component: () => import('./views/OneSnippet.vue'),
    },

  ],
});
