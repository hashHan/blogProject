import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      if(from.hash===to.hash){
        return {x: 0, y: 700};
      }else{
        return {selector: to.hash };
      }
       return {x: 0, y: 0};
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
