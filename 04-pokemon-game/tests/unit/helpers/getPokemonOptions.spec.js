import { getPokemonOptions, getPokemons, getPokemonsNames } from "@/helpers/getPokemonOptions";

describe( 'getPokemonOptions.spec.js helpers', () => {
	it( 'debe de regresar un arreglo de numeros', () => {
		const pokemons = getPokemons();
		
		expect( pokemons.length ).toBe( 650 );
		expect( pokemons[ 0 ] ).toBe( 1 );
		expect( pokemons[ 345 ] ).toBe( 346 );
		expect( pokemons[ 649 ] ).toBe( 650 );
	} );
	
	it( 'debe de retornar un arreglo de 4 elementos con nombres de pokemons', async () => {
		const pokemons = await getPokemonsNames( [ 1, 2, 3, 4 ] );
		
		expect( pokemons.length ).toBe( 4 );
		expect( pokemons[ 0 ].name ).toBe( 'bulbasaur' );
		expect( pokemons[ 1 ].name ).toBe( 'ivysaur' );
		expect( pokemons[ 2 ].name ).toBe( 'venusaur' );
		expect( pokemons[ 3 ].name ).toBe( 'charmander' );
	} );
	
	it( 'getPokemonOptions debe de retornar un arreglo mezclado', async () => {
		const pokemons = await getPokemonOptions();
		
		expect( pokemons.length ).toBe( 4 );
		expect( pokemons ).toEqual( [
			{ name: expect.any( String ), id: expect.any( Number ) },
			{ name: expect.any( String ), id: expect.any( Number ) },
			{ name: expect.any( String ), id: expect.any( Number ) },
			{ name: expect.any( String ), id: expect.any( Number ) }
		] )
	} );
} );
