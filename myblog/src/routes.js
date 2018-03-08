import Main from './components/Main.vue';
import Posts from './components/sections/posts/Posts.vue';
import PortfolioGrid from './components/sections/portfolios/PortfolioGrid.vue';
import Contact from './components/sections/Contact.vue';

export const routes = [
    { path: '/', component: Main },
    { path: '/posts', component: Posts },
    { path: '/PortfolioGrid', component: PortfolioGrid },
    { path: '/contact', component: Contact }
];