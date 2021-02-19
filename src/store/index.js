import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: {},
    dice: 0,
    players: []
  },
  mutations: {
    setPlayer (state, payload) {
      state.player = payload
    },
    setDice (state, payload) {
      state.dice = payload
    },
    setPlayers (state, payload) {
      state.players = payload
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
    },
    SOCKET_rollDice (context, number) {
      context.commit('setDice', number)
    },
    SOCKET_listPlayers (context, payload) {
      context.commit('setPlayers', payload)
    }
  }
})
