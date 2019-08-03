<template>
  <section class="search">
    <div class="search__input">
      <input
        class="input__featured"
        type="text"
        :placeholder="placeholderText"
        v-model="inputValue"
        @keyup.enter="getPokemon"
        ref="inputSearchPokemon">
        <search-results
          :items="pokemons"
          v-show="inputValue"
          :val="inputValue"
          @itemSelected="getPokemon"/>
      <div class="search__button">
      </div>
    </div>
    <div class="search__result">
      <pokemon-detail-item
        :pokemon="pokemon"/>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import PokemonDetailItem from '@/components/PokemonDetailItem'
import SearchResults from '@/components/SearchResults'

export default {
  name: 'Search',

  components: {
    PokemonDetailItem,
    SearchResults
  },

  data () {
    return {
      pokemons: [],
      pokemon: null,
      inputValue: '',
      placeholderText: 'Pokemon name'
    }
  },

  methods: {
    async getAllPokemons () {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=964`)
        this.pokemons = res.data.results
      } catch (e) {
        console.log(e)
      }
    },

    async getPokemon (name) {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        this.pokemon = res.data
        this.resetSearch()
      } catch (e) {
        console.log(e)
      }
    },

    resetSearch () {
      this.inputValue = ''
      this.$nextTick(_ => {
        this.$refs.inputSearchPokemon.focus()
      })
    }
  },

  created () {
    this.getAllPokemons()
  }
}
</script>

<style lang="scss" scoped>
  .search {
    &__input {
      width: 340px;
      margin: 0 auto;
      position: relative;
      .input__featured {
        border-width: 3px;
        border-radius: 4px;
        height: 54px;
      }
    }
  }
</style>
