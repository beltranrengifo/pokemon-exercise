<template>
  <div class="main-header">
    <div class="main-header__logo">
      <div class="main-header__logo-container">
        <router-link to="/">
          <img src="@/assets/pokeball.svg" alt="Pokemon Ball" class="main-header__logo">
        </router-link>
      </div>
    </div>
    <nav class="main-header__nav">
      <ul class="nav__ul">
        <li class="nav__li">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav__li">
          <router-link to="/search">Search</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .main-header {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    &__logo {
      width: 80px;
    }
    .nav {
      &__ul {
        display: flex;
        align-items: center;
        height: 100%;
      }
      &__li {
        padding: 0 12px;
        a {
          text-decoration: none;
          &.router-link-exact-active {
            color: $--color-accent;
          }
        }
      }
    }
  }

</style>
