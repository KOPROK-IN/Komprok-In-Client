<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  data () {
    return {
      result: Math.floor(Math.random() * 6) + 1
    }
  }
}
</script>

<style>

</style>