import axios from '../../axios-auth' // for authenication
import globalAxios from 'axios' // for database


const state = {
    idToken: null,
    userId: null,
    email: null,
    user: null
};

const mutations= {
    authUser (state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
      state.email = userData.email;
    },
    storeUser (state, user) { //save to state // do not use, related to fetchUser
        state.user = user;
    },
    clearAuthData (state) {
        state.idToken = null
        state.userId = null
    }
};

const actions= {
    setLogoutTimer ({commit}, expirationTime) {
        setTimeout(() => {
          commit('clearAuthData')
        }, expirationTime * 1000)
    },
    signup ({commit, dispatch}, authData) {
        axios.post('/signupNewUser?key=AIzaSyC-fCZS3pHHKDHNo_oh6qSg_BLPH5DTWrc', {// to authentication
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
            })
            .then(res => {
                console.log(res);
                commit('authUser', { //to state
                    token: res.data.idToken,
                    userId: res.data.localId,
                    email: res.data.email
                });
                dispatch('setLogoutTimer', res.data.expiresIn);
                // dispatch('storeUser', authData); // to database
            })
            .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('otherError', error.message);
              }
              console.log(error.config);
            });
    },

    login ({commit, dispatch}, authData) {
        axios.post('/verifyPassword?key=AIzaSyC-fCZS3pHHKDHNo_oh6qSg_BLPH5DTWrc', {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
            })
            .then(res => {
                console.log(res);
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId,
                    email: res.data.email
                });
                dispatch('setLogoutTimer', res.data.expiresIn);
            })
            .catch(error => console.log(error));
    },

    logout ({commit}) {
        commit('clearAuthData')
        localStorage.removeItem('expirationDate')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        router.replace('/signin')
    },
    // storeUser is not used. 
    // change it to save posts.
    storeUser ({commit, state}, userData) { // action-storeUser send userdata to database 
        if (!state.idToken) {// for authenticated writing
          return
        };
        globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
    },

    // fetchUser is not used.
    // change this for fetch posts and portfolios
    fetchUser ({commit}, email) { //({commit, state}) state is for extract current idToken
        // if (!state.idToken) { // due to database read rules auth != null
        //   return
        // }
        //globalAxios.get('/users.json' + '?auth=' + state.idToken) //for authenticated reader
        globalAxios.get('/users.json?email='+email)
          .then(res => {
            console.log(res)
            const data = res.data
            const users = []
            for (let key in data) {
              const user = data[key]
              user.id = key
              users.push(user)
            }
            console.log(users)
            commit('storeUser', users[0]) // mutation-storeUser fetch datas to store objects
          })
          .catch(error => console.log(error))
    }
};

const getters= {
    email (state) {
      return state.email
    },
    isAuthenticated (state) {
        return state.idToken !== null
    }
};


export default {
    state,
    mutations,
    actions,
    getters
};