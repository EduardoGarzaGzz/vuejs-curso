import { shallowMount } from "@vue/test-utils";
import PokemonPicture   from "@/components/PokemonPicture";


describe( 'PokemonPicture.spec.js components', () => {
	// it( 'debe de hacer match con el snapshot', () => {
	// 	const wrapper = shallowMount( PokemonPicture, {
	// 		props: {
	// 			pokemonId  : 1,
	// 			showPokemon: false
	// 		}
	// 	} );
	// 	expect( wrapper ).toMatchSnapshot();
	// } );
	
	it( 'debe de mostrar la imagen oculta y el pokemon 100', () => {
		const wrapper = shallowMount( PokemonPicture, {
			props: {
				pokemonId  : 100,
				showPokemon: false
			}
		} );
		
		const [ img1, img2 ] = wrapper.findAll( 'img' );
		
		expect( img1.exists() ).toBeTruthy();
		expect( img2 ).toBe( undefined );
		expect( img1.classes( 'hidden-pokemon' ) ).toBeTruthy()
	} );
	
	it( 'debe de mostrare el pokemon si showPokemon:true', () => {
		const wrapper = shallowMount( PokemonPicture, {
			props: {
				pokemonId  : 100,
				showPokemon: true
			}
		} );
		
		const [ , img2 ] = wrapper.findAll( 'img' );
		
		expect( img2.exists() ).toBeTruthy();
		expect( img2.classes( 'hidden-pokemon' ) ).toBe( false );
		expect( img2.classes( 'fade-in' ) ).toBe( true );
		expect( img2.attributes( 'src' ) ).toBe(
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg' );
	} );
} );
