import Main from './components/Main.vue';
import Posts from './components/sections/posts/Posts.vue';
import PortfolioGrid from './components/sections/portfolios/PortfolioGrid.vue';

export const routes = [
    { path: '/', name:'home', component: Main },
    { path: '/posts', name:'posts', component: Posts },
    { path: '/PortfolioGrid', name: 'portfolio', component: PortfolioGrid },
    {path: '*', redirect: '/'}
];