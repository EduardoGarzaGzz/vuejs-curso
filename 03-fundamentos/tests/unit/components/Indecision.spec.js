import Indecision       from "@/components/Indecision";
import { shallowMount } from "@vue/test-utils";

describe( 'Indecision Component', () => {
	global.fetch = jest.fn( () => Promise.resolve( {
		json: () => Promise.resolve( {
			"answer": "yes",
			"forced": false,
			"image" : "https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"
		} )
	} ) );
	
	let wrapper = null;
	
	beforeEach( () => {
		wrapper = shallowMount( Indecision );
		jest.clearAllMocks();
	} );
	
	it( 'debe de hacer march con el snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot();
	} );
	
	it( 'escribir en el input no debe de disparar nada (console.log)', async () => {
		const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' );
		const clgSpy       = jest.spyOn( console, 'log' );
		const inp          = wrapper.find( 'input' );
		
		await inp.setValue( 'Hola mundo' );
		
		expect( clgSpy ).toHaveBeenCalledTimes( 1 );
		expect( getAnswerSpy ).toHaveBeenCalledTimes( 0 );
	} );
	
	it( 'escribir el symbols de "?" debe de disparar e; fetch', async () => {
		const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' );
		const inp          = wrapper.find( 'input' );
		
		await inp.setValue( 'Hola mundo?' );
		
		expect( getAnswerSpy ).toHaveBeenCalledTimes( 1 );
	} );
	
	it( 'pruebas en getAnswer', async () => {
		await wrapper.vm.getAnswer();
		
		const img = wrapper.find( 'img' );
		
		expect( img.exists() ).toBeTruthy();
		expect( wrapper.vm.img ).toBe( 'https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif' );
		expect( wrapper.vm.answer ).toBe( 'SI!' );
	} );
	
	it( 'pruebas en getAnswer - Fallo en el API', async () => {
		fetch.mockImplementationOnce( () => Promise.reject( 'API is down' ) );
		await wrapper.vm.getAnswer();
		
		const img = wrapper.find( 'img' );
		
		expect( img.exists() ).toBeFalsy();
		expect( wrapper.vm.answer ).toBe( 'No se pudo cargar del API' );
	} );
} );
