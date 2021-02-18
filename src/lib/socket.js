import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

const socket = new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
})

Vue.use(socket)
