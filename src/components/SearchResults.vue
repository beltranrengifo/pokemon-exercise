<template>
  <ul class="search-results">
    <li
      class="search-results__item"
      v-for="item in filteredItems"
      :key="item.name"
      @click="handleItemClick(item.name)">
      <span> {{ item.name }} </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SearchResults',

  props: {
    items: {
      type: Array,
      required: true
    },

    val: {
      type: String,
      required: true
    }
  },

  computed: {
    filteredItems () {
      return this.items.filter(e => {
        return e.name.includes(this.val)
      })
    }
  },

  methods: {
    handleItemClick (name) {
      this.$emit('itemSelected', name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-results {
    position: absolute;
    width: 100%;
    z-index: 9;
    background: white;
    box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.15);
    max-height: 380px;
    overflow-y: scroll;

    &__item {
      line-height: 36px;
      padding-top: 6px;
      text-transform: capitalize;
      border-bottom: 1px dotted $--color-grey;
      cursor: pointer;
      transition: background .15s;
      &:hover {
        background: lighten($--color-grey, 8%);
      }
    }
  }
</style>
