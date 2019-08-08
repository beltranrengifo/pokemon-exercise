<template>
  <div>
    <pokemon-detail-item
      v-if="pokemon"
      :pokemon="pokemon"/>
    <div v-else>
      <poke-loading fullScreen/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PokemonDetailItem from '@/components/PokemonDetailItem'
import Loading from '@/components/Loading'

export default {
  name: 'PokemonDetail',

  components: {
    PokemonDetailItem,
    PokeLoading: Loading
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
    } catch (e) {
      throw new Error('Can not find that pokemon!')
    }
  }
}
</script>
