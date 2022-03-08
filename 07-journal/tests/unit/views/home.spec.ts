import Home             from '@/views/Home.vue';
import { shallowMount } from '@vue/test-utils';

describe( 'Test View: Home.vue', function() {
	it( 'debe de renderizar el componente correctamente', () => {
		const wrapper = shallowMount( Home );
		expect( wrapper.html() ).toMatchSnapshot();
	} );

	it( 'hacer click en un button debe de redireccionar a no-entry', () => {
		const $router = {
			push: jest.fn()
		};

		//@ts-ignore
		const wrapper = shallowMount( Home, {
			global: {
				mocks: {
					$router
				}
			}
		} );

		wrapper.find( 'button' ).trigger( 'click' );
		expect( $router.push ).toHaveBeenCalledTimes( 1 );
		expect( $router.push ).toHaveBeenCalledWith( { 'name': 'no-entry' } );
	} );
} );
