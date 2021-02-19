<template>
  <div>
    <h1>{{ dice }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  props: ['dice', 'choose'],
  created () {
    if (this.choose === this.result) {
      this.$store.dispatch('bidPhases', 30000)
    } else if (this.choose === 'odd') {
      if (this.dice % 2 !== 0) {
        this.$store.dispatch('bidPhases', 20000)
      }
    } else if (this.choose === 'even') {
      if (this.dice % 2 === 0) {
        this.$store.dispatch('bidPhases', 20000)
      }
    }
  }
}
</script>
