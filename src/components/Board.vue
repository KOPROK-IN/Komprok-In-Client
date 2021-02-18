<template>
  <div class="container-fluid text-center" style="width: 100%;">
    <div class="d-flex">
      <div>
        <Player />
      </div>
      <Waiting v-if="phase === 'waiting'" :choose="this.choose"/>
      <Dice v-if="phase === 'rolled'" :result="result" :changePhase="changePhase" :choose="choose" :rolling="rolling"/>
      <div v-if="phase !== 'waiting' && phase !== 'rolled'" class="d-flex flex-column justify-content-center" style="height: 100vh;">
        <div class="row">
          <div class="col-4 p-3">
            <button @click.prevent="click(1)" class="btn number rounded border-0">
              <h1 class="text-white">1</h1>
            </button>
          </div>
          <div class="col-4 p-3">
          <button class="btn number rounded border-0">
            <h1 class="text-white">2</h1>
          </button>
        </div>
        <div class="col-4 p-3">
          <button class="btn number rounded border-0">
            <h1 class="text-white">3</h1>
          </button>
        </div>
        <div class="col-4 p-3">
          <button class="btn number rounded border-0">
            <h1 class="text-white">4</h1>
          </button>
        </div>
        <div class="col-4 p-3">
          <button class="btn number rounded border-0">
            <h1 class="text-white">5</h1>
          </button>
        </div>
        <div class="col-4 p-3">
          <button class="btn number rounded border-0">
            <h1 class="text-white">6</h1>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <button class="btn number rounded border-0 bg-success">
            <h1 class="text-white">odd</h1>
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-primary number rounded border-0 bg-success">
            <h1 class="text-white">even</h1>
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Player from './Player.vue'
import Waiting from './Waiting'
import Dice from './Dice'

export default {
  name: 'Board',
  data () {
    return {
      dice: '',
      phase: '',
      choose: '',
      result: Math.floor(Math.random() * 6) + 1
    }
  },
  components: {
    Player,
    Waiting,
    Dice
  },
  methods: {
    click (num) {
      this.dice = num
      this.phase = 'rolled'
      this.choose = num
      console.log(num)
      this.$store.dispatch('bidPhases', -10000)
    },
    changePhase (value) {
      this.phase = value
    },
    rolling () {
      this.result = Math.floor(Math.random() * 6) + 1
    }
  },
  created () {
    setTimeout(() => {
      this.phase = 'rolled'
    }, 5000)
  }
}
</script>

<style scoped>
  .number {
    background: red;
    min-width: 22vw !important;
    height: 20vh;
    margin: 0 auto;
  }
  h1 {
    font-size: 5.5rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  button:hover {
    background: black !important;
  }
  @media screen and (max-width: 360px) {
    h1 {
      font-size: 2.5rem;
    }
    .container-fluid {
      width: 100% !important;
    }
  }
</style>
