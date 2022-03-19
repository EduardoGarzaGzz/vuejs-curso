import EntryList         from '@/modules/daybook/components/EntryList.vue';
import { journalModule } from '@/modules/daybook/store/journal';
import { shallowMount }  from '@vue/test-utils';
import { createStore }   from 'vuex';
import { journalState }  from '../../../mock-data/test-journal-state';

const createVuexStore = ( initialStore: any ) => createStore( {
	modules: {
		journal: {
			...journalModule,
			state: { ...initialStore }
		}
	}
} );

describe( 'Test Component: EntryList.vue', function() {
	const store      = createVuexStore( journalState );
	const mockRouter = {
		push: jest.fn()
	};

	let wrapper: any;

	beforeEach( () => {
		jest.clearAllMocks();

		wrapper = shallowMount( EntryList, {
			global: {
				mocks  : {
					$router: mockRouter
				},
				plugins: [ store ]
			}
		} );
	} );

	it( 'debe de llamar el getEntriesByTerm sin termino y mostrar 2 entradas', async () => {
		expect( wrapper.findAll( 'entry-stub' ).length ).toBe( 1 );
		expect( wrapper.html() ).toMatchSnapshot();
	} );

	it( 'debe de llamar el getEntriesByTerm y filtrar las entradas', () => {
		const input = wrapper.find( 'input' );
		input.setValue( 'Hola' );

		expect( wrapper.findAll( 'entry-stub' ).length ).toBe( 1 );
	} );

	it( 'el buton de nuevo debe de redireccionar a /new', () => {
		const button = wrapper.find( 'button' );
		button.trigger( 'click' );

		expect( mockRouter.push ).toHaveBeenCalledWith( { name: 'entry', params: { id: 'new' } } );
	} );
} );
