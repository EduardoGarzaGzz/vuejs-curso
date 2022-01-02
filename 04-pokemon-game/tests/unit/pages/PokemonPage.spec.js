import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage             from "@/pages/PokemonPage";
import { pokemons }            from "../mock/pokemons.mock";
import PokemonPicture          from "@/components/PokemonPicture";
import PokemonOptions          from "@/components/PokemonOptions";

describe( 'PokemonPage.spec.js page component', () => {
	let wrapper = null;
	
	beforeEach( () => {
		wrapper = shallowMount( PokemonPage );
	} );
	
	it( 'debe de hacer match con el snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot();
	} );
	
	it( 'debe de llamar mixPokemonArray al montar', () => {
		const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' );
		
		wrapper = shallowMount( PokemonPage );
		
		expect( mixPokemonArraySpy ).toHaveBeenCalled();
	} );
	
	it( 'debe de hacer match con el snapshot cuando cargan los pokemons', () => {
		wrapper = mount( PokemonPage, {
			data() {
				return {
					pokemonsArr: pokemons,
					pokemon    : pokemons[ 0 ],
					showPokemon: false,
					showAnswer : false,
					message    : ''
				}
			}
		} );
		
		expect( wrapper.html() ).toMatchSnapshot();
	} );
	
	it( 'debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
		wrapper = mount( PokemonPage, {
			data() {
				return {
					pokemonsArr: pokemons,
					pokemon    : pokemons[ 0 ],
					showPokemon: false,
					showAnswer : false,
					message    : ''
				}
			}
		} );
		
		const pokemonPictureWrapper = wrapper.findComponent( PokemonPicture )
		const pokemonOptionsWrapper = wrapper.findComponent( PokemonOptions )
		
		expect( pokemonPictureWrapper.exists() ).toBeTruthy();
		expect( pokemonOptionsWrapper.exists() ).toBeTruthy();
		
		expect( pokemonPictureWrapper.vm.pokemonId ).toBe( 5 );
		expect( pokemonOptionsWrapper.vm.pokemons ).not.toBe( [] );
	} );
	
	it( 'pruebas con checkAnswer', async () => {
		wrapper = shallowMount( PokemonPage, {
			data() {
				return {
					pokemonsArr: pokemons,
					pokemon    : pokemons[ 0 ],
					showPokemon: false,
					showAnswer : false,
					message    : ''
				}
			}
		} );
		
		await wrapper.vm.checkAnswer( 5 );
		expect( wrapper.find( 'h2' ).exists() ).toBeTruthy();
		expect( wrapper.vm.showPokemon ).toBe( true );
		expect( wrapper.find( 'h2' ).text() ).toBe( `Correcto, ${ pokemons[ 0 ].name }` );
		
		await wrapper.vm.checkAnswer( 10 );
		expect( wrapper.vm.message ).toBe( `Oops, era ${ pokemons[ 0 ].name }` );
	} );
} );
