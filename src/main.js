import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// bulma
import '../node_modules/bulma/css/bulma.css'

// bulma extensions
import '../node_modules/bulma-extensions/bulma-steps/dist/css/bulma-steps.min.css';

import '@/assets/loading.css'
import '@/assets/loading-btn.css'

import '@fortawesome/fontawesome-free';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
  
//   if(from.name === 'OneTodo') {
//     console.log(store.getters['todos/oneTodo']);
//     store.commit('todos/getOne', {})
//     console.log(store.getters['todos/oneTodo']);
//   }

//   next();
  
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
