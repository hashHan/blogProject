import axios from '../../axios-auth'
import globalAxios from 'axios'


const state = {
    idToken: null,
    userId: null,
    user: null
};

const mutations= {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    }
    // storeUser (state, user) {
    //   state.user = user
    // }
};

const actions= {
    signup ({commit}, authData) {
        axios.post('/signupNewUser?key=AIzaSyC-fCZS3pHHKDHNo_oh6qSg_BLPH5DTWrc', {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
            })
            .then(res => {
                console.log(res);
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId
                })
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
    login ({commit}, authData) {
        axios.post('/verifyPassword?key=AIzaSyC-fCZS3pHHKDHNo_oh6qSg_BLPH5DTWrc', {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
            })
            .then(res => {
                console.log(res);
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId
                })
            })
            .catch(error => console.log(error));
    }
    
    // storeUser ({commit, state}, userData) {
    //   if (!state.idToken) {
    //     return
    //   }
    //   globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
    //     .then(res => console.log(res))
    //     .catch(error => console.log(error))
    // },
    // fetchUser ({commit, state}) {
    //   if (!state.idToken) {
    //     return
    //   }
    //   globalAxios.get('/users.json' + '?auth=' + state.idToken)
    //     .then(res => {
    //       console.log(res)
    //       const data = res.data
    //       const users = []
    //       for (let key in data) {
    //         const user = data[key]
    //         user.id = key
    //         users.push(user)
    //       }
    //       console.log(users)
    //       commit('storeUser', users[0])
    //     })
    //     .catch(error => console.log(error))
    // }
};

const getters= {
    // user (state) {
    //   return state.user
    // }
};


export default {
    state,
    mutations,
    actions,
    getters
};