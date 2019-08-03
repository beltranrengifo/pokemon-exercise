<template>
  <section
    class="pokemon__details"
     v-if="pokemon">
    <h1 class="pokemon__title">{{ pokemon.name }}</h1>
    <article class="pokemon__info-section">
      <p
        v-for="image in pokemon.sprites"
        :key="image">
        <img
          v-if="image"
          :src="image" alt="pokemon.sprites">
      </p>
    </article>
    <article class="pokemon__info-section pokemon__info-section--column">
      <h2 class="pokemon__section-title">ID</h2>
      <div class="pokemon__experience">
        {{pokemon.id}}
      </div>
    </article>
    <article class="pokemon__info-section pokemon__info-section--column">
      <h2 class="pokemon__section-title">Abilities</h2>
      <p
        v-for="ability in pokemon.abilities"
        :key="ability.ability.name">
        {{ability.ability.name}}
      </p>
    </article>
    <h2 class="pokemon__section-title">Base Experience</h2>
    <div class="pokemon__experience pokemon__info-section--column">
      {{pokemon.base_experience}}
    </div>
    <h2 class="pokemon__section-title">Weight & Height</h2>
    <div class="flex-container flex-center">
      <div class="pokemon__experience">
        {{pokemon.weight}}
      </div>
      <div class="pokemon__experience">
        {{pokemon.height}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PokemonItemDetail',

  props: {
    pokemon: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

.pokemon {
  &__details {
    padding-top: 60px;
  }
  &__title {
    font-size: 48px;
    font-weight: 500;
    text-transform: capitalize;
    border-bottom: 1px solid rgb(225, 225, 225);
    padding-bottom: 48px;
    margin-bottom: 24px;
  }
  &__info-section {
    display: flex;
    justify-content: space-evenly;
    &--column {
      flex-direction: column;
    }
  }
  &__section-title {
    font-size: 24px;
    font-weight: 500;
    margin: 80px 0 12px;
  }
  &__experience {
    $--value: 96px;
    width: $--value;
    height: $--value;
    background: $--color-grey;
    line-height: $--value;
    border-radius: 50%;
    margin: 0 auto;
  }
}

</style>
