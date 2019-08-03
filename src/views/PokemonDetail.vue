<template>
  <pokemon-detail-item
    :pokemon="pokemon"/>
</template>

<script>

import axios from 'axios'
import PokemonDetailItem from '@/components/PokemonDetailItem'
export default {
  name: 'PokemonDetail',

  components: {
    PokemonDetailItem
  },

  data () {
    return {
      pokemon: null
    }
  },

  async created () {
    const pokemonName = this.$route.params.name
    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      this.pokemon = res.data
      console.log(this.pokemon)
    } catch (e) {
      throw new Error('Can not find that pokemon!')
    }
  }
}
</script>
