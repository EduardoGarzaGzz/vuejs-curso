<template>
  <h1>Pokemon Page <span>{{ id }}</span></h1>
  <div v-if="pokemon">
    <img :alt="pokemon.name" :src="pokemon.sprites.front_default">
  </div>
</template>

<script>
export default {
  name : "PokemonPage",
  props: {
    id: {
      type    : Number,
      required: true
    }
  },
  data() {
    return {
      pokemon: null
    }
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch( `https://pokeapi.co/api/v2/pokemon/${ this.id }` ).then( r => r.json() );
        this.pokemon  = pokemon;
      } catch ( e ) {
        console.log( 'Call error', e );
        this.$router.push( '/' ).then();
      }
    }
  },
  watch  : {
    id() {
      this.getPokemon();
    }
  }
}
</script>

<style scoped>

</style>
