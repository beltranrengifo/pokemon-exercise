<template>
  <main class="">
    <pokemon-list/>
  </main>
</template>

<script>
import PokemonList from '@/components/PokemonList'
export default {
  name: 'home',
  components: {
    PokemonList
  }
}
</script>
