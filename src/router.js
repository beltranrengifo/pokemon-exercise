import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import PokemonDetail from './views/PokemonDetail'
import Search from './views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pokemon/:name',
      name: 'Pokemon detail',
      component: PokemonDetail
    },
    {
      path: '/search',
      name: 'Pokemon search',
      component: Search
    }
  ]
})
