<template>
  <div id="app">
    <poke-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',

  components: {
    PokeHeader: Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Baloo Bhaina', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
