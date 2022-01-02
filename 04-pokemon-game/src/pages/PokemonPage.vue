<template>
  <h1 v-if="!pokemon">Espere por favor....</h1>
  <template v-else>
    <h1>Quien es este pokemon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonsArr" @selection="checkAnswer" />
  </template>

  <template v-if="showAnswer" class="fade-in">
    <h2>{{ message }}</h2>
    <button @click="newGame">Nuevo juego</button>
  </template>
</template>

<script>
import PokemonPicture    from "@/components/PokemonPicture";
import PokemonOptions    from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonsArr: [],
      pokemon    : null,
      showPokemon: false,
      showAnswer : false,
      message    : ''
    }
  },
  methods: {
    async mixPokemonArray() {
      const rndInt = Math.floor( Math.random() * 4 );

      this.pokemonsArr = await getPokemonOptions();
      this.pokemon     = this.pokemonsArr[ rndInt ];
    },
    checkAnswer( pokemonId ) {
      this.showPokemon = true;
      this.showAnswer  = true;

      if ( pokemonId === this.pokemon.id ) {
        this.message = `Correcto, ${ this.pokemon.name }`;
      } else {
        this.message = `Oops, era ${ this.pokemon.name }`;
      }
    },
    newGame() {
      this.pokemon     = null;
      this.showPokemon = false;
      this.showAnswer  = false;
      this.message     = '';

      this.mixPokemonArray();
    }
  },
  mounted() {
    this.mixPokemonArray();
  }
}
</script>

<style>

</style>
