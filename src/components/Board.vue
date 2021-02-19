<template>
  <div class="container-fluid text-center" style="width: 100%;">
    <div class="d-flex">
      <div class="col-2">
        <Player />
      </div>
      <div class="d-flex flex-column justify-content-center col-10 wkwk" style="height: 100vh;">
        <div class="row" v-if="phase !== 'rolled'">
          <div class="h1 col-12">PHASE BIDDING</div>
        </div>
        <div class="row" v-if="phase === 'rolled'">
          <div class="h1 col-12">PHASE ROLLING</div>
        </div>
        <div class="row" v-if="bidAction === 'waiting'">
          <Waiting v-if="bidAction === 'waiting'" :choose="this.choose"/>
        </div>
        <div class="row" v-if="phase === 'rolled'">
          <Dice :result="result" :changePhase="changePhase" :choose="choose" :rolling="rolling"/>
        </div>
        <div class="row" v-if="phase !== 'rolled' && bidAction !== 'waiting'">
          <div class="col-4 p-3">
            <button @click.prevent="click(1)" class="btn number rounded border-0">
              <h1 class="text-white">1</h1>
            </button>
          </div>
          <div class="col-4 p-3">
            <button @click.prevent="click(2)" class="btn number rounded border-0">
              <h1 class="text-white">2</h1>
            </button>
          </div>
          <div class="col-4 p-3">
            <button @click.prevent="click(3)" class="btn number rounded border-0">
              <h1 class="text-white">3</h1>
            </button>
          </div>
          <div class="col-4 p-3">
            <button @click.prevent="click(4)" class="btn number rounded border-0">
              <h1 class="text-white">4</h1>
            </button>
          </div>
          <div class="col-4 p-3">
            <button @click.prevent="click(5)" class="btn number rounded border-0">
              <h1 class="text-white">5</h1>
            </button>
          </div>
          <div class="col-4 p-3">
            <button @click.prevent="click(6)" class="btn number rounded border-0">
              <h1 class="text-white">6</h1>
            </button>
          </div>
        </div>
        <div class="row" v-if="phase !== 'rolled' && bidAction !== 'waiting'">
          <div class="col-6">
            <button @click.prevent="click('odd')" class="btn number rounded border-0 bg-success">
              <h1 class="text-white">odd</h1>
            </button>
          </div>
          <div class="col-6">
            <button @click.prevent="click('even')" class="btn btn-primary number rounded border-0 bg-success">
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
      phase: '',
      bidAction: '',
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
      this.bidAction = 'waiting'
      this.choose = num
      console.log(num)
      this.$store.dispatch('bidPhases', -10000)
    },
    changePhase (value) {
      this.phase = value
    },
    rolling () {
      this.result = Math.floor(Math.random() * 6) + 1
    },
    timeSetupBid () {
      setTimeout(() => {
        this.phase = 'rolled'
        this.bidAction = 'unwaiting'
        this.timeSetupRoll()
      }, 5000)
    },
    timeSetupRoll () {
      setTimeout(() => {
        this.rolling()
        this.changePhase('bidding')
        this.timeSetupBid()
      }, 3500)
    }
  },
  created () {
    this.timeSetupBid()
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
  .wkwk {
    border: 1px solid black
  }
</style>
