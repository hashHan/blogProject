import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/store'; //for guarding


import Main from './components/Main.vue';
import Posts from './components/sections/posts/Posts.vue';
import PortfolioGrid from './components/sections/portfolios/PortfolioGrid.vue';
import Signup from './components/auth/Signup.vue';
import Signin from './components/auth/Signin.vue';
import Admin from './components/auth/Admin.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', name:'home', component: Main },
    { path: '/posts', name:'posts', component: Posts },
    { path: '/PortfolioGrid', name: 'portfolio', component: PortfolioGrid },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/signin', name: 'signin', component: Signin },
    {
      path: '/admin', name: 'admin', component: Admin,
      beforeEnter (to, from, next) { //routing guard
        if (store.state.idToken) {
          next()
        } else {
          next('/signin')
        }
      }  
    },
    {path: '*', redirect: '/'}
];

export default new VueRouter({
    mode: 'history', 
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }else if(to.hash) {
            return {selector: to.hash };
        }else{
            return {x: 0, y: 300};
        }
    }
})
