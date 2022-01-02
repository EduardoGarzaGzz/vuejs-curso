import PokemonOptions   from "@/components/PokemonOptions";
import { shallowMount } from "@vue/test-utils";
import { pokemons }     from "../mock/pokemons.mock";

describe( 'PokemonOptions.spec.js components', () => {
	let wrapper = null;
	
	beforeEach( () => {
		wrapper = shallowMount( PokemonOptions, {
			props: {
				pokemons
			}
		} );
	} );
	
	// it( 'debe de hacer match con el snapshot', () => {
	// 	expect( wrapper ).toMatchSnapshot();
	// } );
	
	it( 'debe de mostrar las 4 opciones correctamente', () => {
		const pokemonList = wrapper.findAll( 'li' );
		
		expect( pokemonList.length ).toBe( 4 );
		expect( pokemonList[ 0 ].text() ).toEqual( pokemons[ 0 ].name );
		expect( pokemonList[ 1 ].text() ).toEqual( pokemons[ 1 ].name );
		expect( pokemonList[ 2 ].text() ).toEqual( pokemons[ 2 ].name );
		expect( pokemonList[ 3 ].text() ).toEqual( pokemons[ 3 ].name );
		
	} );
	
	it( 'debe de emitir "selection" con sus respectivos valores', () => {
		const [ li1, li2, li3, li4 ] = wrapper.findAll( 'li' );
		
		li1.trigger( 'click' );
		li2.trigger( 'click' );
		li3.trigger( 'click' );
		li4.trigger( 'click' );
		
		expect( wrapper.emitted( 'selection' ).length ).toBe( 4 );
		expect( wrapper.emitted( 'selection' )[ 0 ] ).toEqual( [ pokemons[ 0 ].id ] );
		expect( wrapper.emitted( 'selection' )[ 1 ] ).toEqual( [ pokemons[ 1 ].id ] );
		expect( wrapper.emitted( 'selection' )[ 2 ] ).toEqual( [ pokemons[ 2 ].id ] );
		expect( wrapper.emitted( 'selection' )[ 3 ] ).toEqual( [ pokemons[ 3 ].id ] );
	} );
} );
