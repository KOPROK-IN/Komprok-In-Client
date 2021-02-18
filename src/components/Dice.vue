<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  props: ['result', 'changePhase', 'choose', 'rolling'],
  created () {
    if (this.choose === this.result) {
      this.$store.dispatch('bidPhases', 30000)
    }
    setTimeout(() => {
      this.rolling()
      this.changePhase('bidding')
    }, 5000)
  }
}
</script>
