<template>
  <section class="pokemon-list">
    <h3
      v-if="errorMessage"
      class="error-message">{{ errorMessage }}</h3>
    <ul
      v-else
      class="pokemon-list__ul">
      <pokemon-card
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :url="pokemon.url"
        @imagesLoaded="handleDisableButtons"/>
    </ul>
    <div class="more-buttons">
      <div class="more-buttons__button"
        @click="getPokemons(prevPage, -1)"
        :class="{'disabled': disabledButton || !prevPage}">
          <i class="fal fa-angle-double-left"/>
      </div>
      <div class="page-count">
        <small>page {{pageCount}} of {{totalPages}}</small>
      </div>
      <div class="more-buttons__button"
        @click="getPokemons(nextPage, 1)"
        :class="{'disabled': disabledButton || !nextPage}">
          <i class="fal fa-angle-double-right"/>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import PokemonCard from '@/components/PokemonCard'

export default {
  name: 'PokemonList',

  components: {
    PokemonCard
  },

  data () {
    return {
      pokemons: [],
      prevPage: '',
      nextPage: '',
      pageCount: 1,
      errorText: 'Houston, we have a problem. We can\'t find any pokemons in the Universe!',
      errorMessage: '',
      disabledButton: false,
      imagesCount: 0
    }
  },

  methods: {
    async getPokemons (url, page) {
      this.disabledButton = true
      try {
        let baseUrl = url || 'https://pokeapi.co/api/v2/pokemon'
        let res = await axios.get(baseUrl)
        this.pokemons = res.data.results
        this.nextPage = res.data.next
        this.prevPage = res.data.previous
        this.pageCount += page || 0
      } catch (e) {
        this.errorMessage = `${this.errorText}\n${e}`
        throw new Error(this.errorText)
      }
    },

    handleDisableButtons () {
      this.imagesCount++
      if (this.imagesCount >= 20) {
        this.disabledButton = false
        this.imagesCount = 0
      }
    }
  },

  computed: {
    totalPages () {
      return Math.ceil(964 / 20)
    }
  },

  created () {
    this.getPokemons()
  }
}
</script>

<style lang="scss" scoped>
  .pokemon-list {
    &__ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .more-buttons {
    margin: 64px 0 32px;
    display: flex;
    justify-content: space-evenly;
    &__button {
      $--value: 48px;
      height: $--value;
      width: $--value;
      line-height: $--value + 4;
      background: $--color-grey;;
      color: $--color-black;
      cursor: pointer;
      border: 1px solid $--color-grey;
      transition: all .2s;
      &:hover {
        background: $--color-white;
        border-color: $--color-grey;
      }
      &.disabled {
        opacity: .4;
        pointer-events: none;
      }
    }
  }
  .page-count {
    margin: 24px 0 124px;
    small {
      color: $--color-dark-grey;
      font-style: italic;
      font-size: 70%;
    }
  }
</style>
