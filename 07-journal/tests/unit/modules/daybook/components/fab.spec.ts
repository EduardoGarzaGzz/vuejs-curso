import Fab              from '@/modules/daybook/components/Fab.vue';
import { shallowMount } from '@vue/test-utils';

describe( 'Test Component: Fab.vue', function() {
	it( 'debe de mostrar el icono por defecto', () => {
		const wrapper = shallowMount( Fab );
		const emEl    = wrapper.find( 'em' );

		expect( emEl.classes( 'fa-plus' ) ).toBeTruthy();
	} );

	it( 'debe de mostrar el icono por argumento: fa-circle', () => {
		const wrapper = shallowMount( Fab, {
			props: {
				icon: 'fa-circle'
			}
		} );
		const emEl    = wrapper.find( 'em' );

		expect( emEl.classes( 'fa-circle' ) ).toBeTruthy();
	} );

	it( 'debe de emitir el evento on:click cuando se hace click', () => {
		const wrapper = shallowMount( Fab, {
			props: {
				icon: 'fa-circle'
			}
		} );

		wrapper.find( 'button' ).trigger( 'click' );
		expect( wrapper.emitted( 'on:click' ) ).toHaveLength( 1 );
	} );
} );
