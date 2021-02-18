<template>
  <div>
    <Navbar/>
    <Board></Board>
  </div>
</template>

<script>
import Board from '../components/Board.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Board,
    Navbar
  }
}
</script>
