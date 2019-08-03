<template>
  <section
    class="pokemon__details"
     v-if="pokemon">
    <h1 class="pokemon__title">
      <span>#{{pokemon.id}}</span>
      {{ pokemon.name }}
    </h1>
    <section class="pokemon__sprites">
      <p
        v-for="image in pokemon.sprites"
        :key="image">
        <img
          v-if="image"
          :src="image" alt="pokemon.sprites">
      </p>
    </section>
    <section class="pokemon__info-boxes">
      <article class="pokemon__info-box">
        <div class="info-box__title">
          <h2>Abilities</h2>
        </div>
        <div class="info-box__content">
          <p
            class="capitalize"
            v-for="ability in pokemon.abilities"
            :key="ability.ability.name">
            {{ ability.ability.name | undoKebabCase }}
          </p>
        </div>
      </article>
      <article class="pokemon__info-box">
        <div class="info-box__title">
          <h2>Base Experience</h2>
        </div>
        <div class="info-box__content">
          <p>
            <strong>{{pokemon.base_experience}}</strong>
          </p>
        </div>
      </article>
      <article class="pokemon__info-box">
        <div class="info-box__title">
          <h2>Heigth & Weight</h2>
        </div>
        <div class="info-box__content">
          <p>
            Heigth: <strong>{{pokemon.height}}</strong>
          </p>
          <p>
            Weight: <strong>{{pokemon.weight}}</strong>
          </p>
        </div>
      </article>
      <article class="pokemon__info-box">
        <div class="info-box__title">
          <h2>Types</h2>
        </div>
        <div class="info-box__content">
          <p
            class="capitalize"
            v-for="type in pokemon.types"
            :key="type.type.name">
            {{ type.type.name | undoKebabCase }}
          </p>
        </div>
      </article>
      <article class="pokemon__info-box">
        <div class="info-box__title">
          <h2>Stats</h2>
        </div>
        <div class="info-box__content">
          <p
            class="capitalize"
            v-for="stat in pokemon.stats"
            :key="stat.stat.name">
            {{ stat.stat.name | undoKebabCase }}: <strong>{{ stat.base_stat }}</strong>
          </p>
        </div>
      </article>
      <article class="pokemon__info-box">
        <div class="info-box__title">
          <h2>Moves</h2>
        </div>
        <div class="info-box__content">
          <p
            class="capitalize"
            v-for="move in pokemon.moves"
            :key="move.move.name">
            {{ move.move.name | undoKebabCase }}
          </p>
        </div>
      </article>
    </section>
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
    width: 960px;
    margin: 0 auto;
  }
  &__title {
    font-size: 48px;
    font-weight: 500;
    text-transform: capitalize;
    border-bottom: 1px solid rgb(225, 225, 225);
    padding-bottom: 48px;
    margin-bottom: 24px;
  }
  &__sprites {
    display: flex;
    justify-content: space-evenly;
  }
  &__info-boxes {
    display: flex;
    flex-wrap: wrap;
  }
  &__info-box {
    border: 1px dotted $--color-dark-grey;
    width: calc(25% - 12px);
    margin: 6px;
    padding: 32px 24px;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: left;
    min-height: 200px;
  }
}
.info-box {
  &__title {
    margin-bottom: 12px;
    border-bottom: 1px dotted $--color-grey;
    padding-bottom: 8px;
    h2 {
      font-size: 20px;
    }
  }
  &__content {
    max-height: 150px;
    overflow-y: scroll;
    p {
      margin-bottom: 6px;
      line-height: 18px;
    }
  }
}

</style>
