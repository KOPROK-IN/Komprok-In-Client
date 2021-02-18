import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: {}
  },
  mutations: {
    setPlayer (state, payload) {
      state.player = payload
    }
  },
  actions: {
    login (_, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          router.push('/')
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response)
          }
        })
    },
    getUser (context) {
      axios({
        method: 'GET',
        url: '/',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        console.log(data)
        context.commit('setPlayer', data)
      }).catch((err) => {
        console.log(err)
      })
    },
    bidPhases (context, bid) {
      axios({
        method: 'PATCH',
        url: '/',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          gamblingMoney: bid
        }
      }).then((_) => {
        context.dispatch('getUser')
      }).catch((err) => {
        console.log(err)
      })
    }
  }
})
