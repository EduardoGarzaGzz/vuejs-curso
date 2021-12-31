import { shallowMount } from "@vue/test-utils";
import Counter          from "@/components/Counter";

describe( 'Counter Component', () => {
	let wrapper = null;
	
	beforeEach( () => {
		wrapper = shallowMount( Counter );
	} );
	
	it( 'h2 debe de tener el valor por defecto', () => {
		const h2 = wrapper.find( 'h2' );
		
		expect( h2.exists() ).toBeTruthy();
		expect( h2.text() ).toBe( 'Contador' );
	} );
	
	it( 'el valor por defecto debe de ser 100 en el etiqueta p', () => {
		const pTags = wrapper.find( '[data-testid="counter"]' );
		
		expect( pTags.exists() ).toBeTruthy();
		expect( pTags.text() ).toBe( '100' );
	} );
	
	it( 'debe de incrementar en 1 el valor y luego decrementar 2 el valor del contador', async () => {
		const [ btnIncrease, btnDecrease ] = wrapper.findAll( 'button' );
		const p                            = wrapper.find( '[data-testid="counter"]' );
		
		await btnIncrease.trigger( 'click' );
		
		expect( p.text() ).toBe( '101' );
		
		await btnDecrease.trigger( 'click' );
		await btnDecrease.trigger( 'click' );
		
		expect( p.text() ).toBe( '99' );
	} );
	
	it( 'debe de establecer el valor por defecto', () => {
		const { start } = wrapper.props();
		const p         = wrapper.find( '[data-testid="counter"]' );
		
		expect( Number( p.text() ) ).toBe( start );
	} );
	
	it( 'debe de mostrar la prop title', () => {
		const title   = 'Hola mundo !!!';
		const wrapper = shallowMount( Counter, {
			props: {
				title
			}
		} );
		
		expect( wrapper.find( 'h2' ).text() ).toBe( title );
	} );
} );
