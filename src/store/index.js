import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      axios
        .post('/login', payload)
        .then((response) => {
          localStorage.access_token = response.data.access_token
          router.push('/')
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response)
          }
        })
    }
  },
  modules: {
  }
})
