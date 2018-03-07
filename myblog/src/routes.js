import Main from './components/Main.vue';
import Posts from './components/sections/posts/Posts.vue';
import Portfolios from './components/sections/portfolios/Portfolios.vue';

export const routes = [
    { path: '/', component: Main },
    { path: '/posts', component: Posts },
    { path: '/portfolios', component: Portfolios }
];