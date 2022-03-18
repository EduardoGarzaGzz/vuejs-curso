import Entry            from '@/modules/daybook/components/Entry.vue';
import { shallowMount } from '@vue/test-utils';
import { journalState } from '../../../mock-data/test-journal-state';

describe( 'Test Component: Entry.vue', function() {
	const mockRouter = {
		push: jest.fn()
	};

	const wrapper = shallowMount( Entry, {
		props : {
			entry: journalState.entries[ 0 ]
		},
		global: {
			mocks: {
				$router: mockRouter
			}
		}
	} );

	it( 'debe de hacer match con el snapshot', () => {
		expect( wrapper.html() ).toMatchSnapshot();
	} );

	it( 'debe de redireccionar al hacer click en el entry-container', () => {
		const entryContainer = wrapper.find( '.entry-container' );
		entryContainer.trigger( 'click' );

		expect( mockRouter.push ).toHaveBeenCalled();
		expect( mockRouter.push ).toHaveBeenCalledWith( {
			name  : 'entry',
			params: {
				id: journalState.entries[ 0 ].id
			}
		} );
	} );

	it( 'pruebas en las propiedades computadas', () => {
		expect( wrapper.vm.day ).toBe( 23 );
		expect( wrapper.vm.month ).toBe( 'Julio' );
		expect( wrapper.vm.yearDay ).toBe( '2021, Viernes' );
	} );
} )
;
