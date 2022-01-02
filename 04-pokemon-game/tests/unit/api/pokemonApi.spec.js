import pokemonApi from "@/api/pokemonApi";

describe( 'pokemonApi.spec.js api', () => {
	it( 'axios debe de estar configurado con el api de pokemon', () => {
		expect( pokemonApi.defaults.baseURL ).toBe( 'https://pokeapi.co/api/v2/pokemon' );
	} );
} );
