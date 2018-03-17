import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'; //global axios

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';


Vue.use(VueRouter);
axios.defaults.baseURL = 'https://bloghaeseong.firebaseio.com/'; //FOR database

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition;
    // }
    if (to.hash) {
        return {selector: to.hash };
      }
       return {x: 0, y: 300};
    }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
