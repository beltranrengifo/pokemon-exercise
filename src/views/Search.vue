<template>
  <section class="search">
    <div
      class="error"
      v-if="isError">
      <p
        class="error-text"
        v-html="errorText">
      </p>
      <div>
        <button
          @click='resetSearch'>Try again</button>
      </div>
    </div>
    <div v-else>
      <div class="search__input">
        <input
          type="text"
          :placeholder="placeholderText"
          v-model="inputValue"
          @input="checkDisabled"
          @keyup.enter="getPokemon"
          ref="inputSearchPokemon">
        <div class="search__button">
          <button
            :disabled="isDisabled"
            @click="getPokemon">{{ buttonText }}</button>
        </div>
      </div>
      <div class="search__result">
        <pokemon-detail-item
          :pokemon="pokemon"/>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import PokemonDetailItem from '@/components/PokemonDetailItem'

export default {
  name: 'Search',

  components: {
    PokemonDetailItem
  },

  data () {
    return {
      pokemon: null,
      inputValue: '',
      isDisabled: true,
      isError: false,
      placeholderText: 'Pokemon name',
      buttonText: 'Search'
    }
  },

  methods: {
    async getPokemon () {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.inputValue.toLowerCase()}`)
        this.pokemon = res.data
        this.resetSearch()
      } catch (e) {
        this.isError = true
      }
    },

    checkDisabled () {
      this.isDisabled = this.inputValue === '' || this.inputValue.length < 3
    },

    resetSearch () {
      this.inputValue = ''
      this.checkDisabled()
      this.isError = false
      this.$nextTick(_ => {
        this.$refs.inputSearchPokemon.focus()
      })
    }
  },

  computed: {
    errorText () {
      return `Pokemon <strong>${this.inputValue}</strong> does not exist!`
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    &__input,
    .error {
      width: 340px;
      margin: 0 auto;
    }

    .error {
      .error-text {
        height: $--input-height;
        line-height: $--input-height;
        font-size: 80%;
      }
      button {
        margin-top: 24px;
      }
    }

    &__button {
      button {
        margin-top: 24px;
      }
    }
  }
</style>
