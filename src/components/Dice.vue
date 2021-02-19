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
    } else if (this.choose === 'odd') {
      if (this.result % 2 !== 0) {
        this.$store.dispatch('bidPhases', 20000)
      }
    } else if (this.choose === 'even') {
      if (this.result % 2 === 0) {
        this.$store.dispatch('bidPhases', 20000)
      }
    }
  }
}
</script>
