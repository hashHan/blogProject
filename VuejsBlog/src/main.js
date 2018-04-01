import Vue from 'vue';
import axios from 'axios'; //global axios
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './routes';
import store from './store/store';

axios.defaults.baseURL = 'https://bloghaeseong.firebaseio.com/'; //FOR VUE JS BLOG database
//axios.defaults.baseURL = 'https://nuxtbloghan.firebaseio.com/';  // NUXT BLOG DATABASE


Vue.use(Vuelidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
