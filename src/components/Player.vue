<template>
  <div class="container-fluid mt-2">
    <div class="col">
      <div class="row-3">
        <div class="col col-12 md-5 mb-1 player">
          <div>
            <div class="card-title">bid:Rp(10000)</div>
            <div class="card-body"><img src="pp.png" alt="profile"></div>
            <div class="info">{{ player.name }}</div>
            <div class="info">{{ player.money }}</div>
          </div>
        </div>
        <div class="col col-12 md-5 mb-1 player">
          <div>
            <div class="card-title">bid:Rp(choose)</div>
            <div class="card-body"><img src="pp.png" alt="profile"></div>
            <div class="info">NAME/Saldo</div>
          </div>
        </div>
        <div class="col col-12  md-5 mb-1 player">
          <div>
            <div class="card-title">bid:Rp(choose)</div>
            <div class="card-body"><img src="pp.png" alt="profile"></div>
            <div class="info">NAME/Saldo</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  computed: {
    player () {
      return this.$store.state.player
    }
  },
  created () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style scoped>
  .player {
    border: 2px solid black;
  }

  .card-title {
    border-bottom: 1px solid black;
  }

  .card-body {
    height: 100px;
    text-align: center;
  }

  .info {
    border-top: 1px solid black;
  }
</style>
