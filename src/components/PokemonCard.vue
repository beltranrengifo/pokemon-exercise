<template>
  <router-link
    tag="article"
    class="pokemon-card"
    :style="{'background-color': backgroundColor}"
    :to="`/pokemon/${name}`">
    <div
      class="pokemon-card__image">
      <img :src="pokemonImg" :alt="name">
    </div>
    <h2
      class="pokemon-card__name">
      <small>#{{ pokemonId  }}</small>
      <br>
      {{ name }}
    </h2>
  </router-link>
</template>

<script>

import axios from 'axios'

export default {
  name: 'PokemonCard',

  props: {
    name: {
      type: String
    },
    url: {
      type: String
    }
  },

  data () {
    return {
      backgroundColor: null,
      pokemonImg: null,
      pokemonId: null
    }
  },

  mounted () {
    this.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  },

  async created () {
    try {
      let imageRequest = await axios.get(this.url)
      this.pokemonImg = imageRequest.data.sprites.front_default
      this.pokemonId = imageRequest.data.id
    } catch (e) {
      throw new Error('Image not found')
    }
  },

  computed: {
    borderColor () {
      return this.backgroundColor
    }
  }
}
</script>

<style lang="scss" scoped>
  $--gap: 2px;
  .pokemon-card {
    min-height: 295px;
    width: calc(25% - #{$--gap}*2);
    margin: $--gap;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 1;
    transition: opacity .25s;
    cursor: pointer;

    &:hover {
      opacity: .9;
      .pokemon-card__image {
        box-shadow: 0px 0px 50px -1px rgba(0, 0, 0, 0.25);
      }
    }

    &__name {
      font-size: 24px;
      text-transform: capitalize;
      text-shadow: 1px 1px 3px #FFFFFF;

      small {
        font-size: 70%;
      }
    }

    &__image {
      background: rgba(255, 255, 255, 0.1);
      margin-bottom: 16px;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      border: 1px dotted;
      box-shadow: 0px 0px 50px -1px rgba(255, 255, 255, 0.15);
      transition: box-shadow .25s;
    }
  }
</style>
