import { ref } from "vue";
import axios   from "axios";

const usePokemon = ( pokemonId = '1' ) => {
    const pokemon      = ref();
    const isLoading    = ref( false );
    const errorMessage = ref();
    
    const searchPokemon = async ( id ) => {
        if ( !id ) return;
        
        isLoading.value = true;
        pokemon.value   = null;
        
        try {
            const response     = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ id }` );
            pokemon.value      = response.data;
            errorMessage.value = null;
        } catch ( error ) {
            errorMessage.value = "No se encontró el pokemon";
        } finally {
            isLoading.value = false;
        }
    }
    
    searchPokemon( pokemonId ).then();
    
    return {
        pokemon,
        isLoading,
        errorMessage,
        searchPokemon
    }
};

export default usePokemon;
