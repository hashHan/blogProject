//import data from '../../data/data';
import portfolios from '../../data/portfolios';
import posts from '../../data/posts';

const state = {
    portfolios,
    posts
};

const mutations = {
    // 'SET_STOCKS' (state, stocks) {
    //     state.stocks = stocks;
    // },
    // 'RND_STOCKS' (state) {
    //     state.stocks.forEach(stock => {
    //         stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    //     });
    // }
};

const actions = {
    // buyStock: ({commit}, order) => {
    //     commit('BUY_STOCK', order);
    // },
    // initStocks: ({commit}) => {
    //     commit('SET_STOCKS', stocks);
    // },
    // randomizeStocks: ({commit}) => {
    //     commit('RND_STOCKS');
    // }
};

const getters = {
    getportfolios: state => {
        return state.portfolios;
    },
    getposts: state => {
        return state.posts;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};