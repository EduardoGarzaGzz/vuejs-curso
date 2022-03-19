import { journalModule } from '@/modules/daybook/store/journal';
import EntryView         from '@/modules/daybook/views/EntryView.vue';
import { shallowMount }  from '@vue/test-utils';
import Swal              from 'sweetalert2';
import { createStore }   from 'vuex';
import { journalState }  from '../../../mock-data/test-journal-state';

jest.mock( 'sweetalert2', () => ( {
	fire       : jest.fn(),
	showLoading: jest.fn(),
	close      : jest.fn()
} ) );

const createVuexStore = ( initialStore: any ) => createStore( {
	modules: {
		journal: {
			...journalModule,
			state: { ...initialStore }
		}
	}
} );

describe( 'Test View: EntryView.vue', function() {
	const store    = createVuexStore( journalState );
	store.dispatch = jest.fn();

	const mockRouter = {
		push: jest.fn()
	};

	let wrapper: any;

	beforeEach( () => {
		jest.clearAllMocks();

		wrapper = shallowMount( EntryView, {
			props : {
				id: '-Msr8-0x5wA7UhFR7dIB'
			},
			global: {
				mocks  : {
					$router: mockRouter
				},
				plugins: [ store ]
			}
		} );
	} );

	it( 'debe de sacar al usuario porque el id no existe', () => {
		const wrapper = shallowMount( EntryView, {
			props : {
				id: 'Este ID no existe'
			},
			global: {
				mocks  : {
					$router: mockRouter
				},
				plugins: [ store ]
			}
		} );

		expect( mockRouter.push ).toHaveBeenCalledWith( { name: 'no-entry' } );
	} );

	it( 'debe de mostrar la entrada correcta', () => {
		expect( wrapper.html() ).toMatchSnapshot();
		expect( mockRouter.push ).not.toHaveBeenCalledWith( { name: 'no-entry' } );
	} );

	it( 'debe de borrar la entrada y salir', async ( done ) => {
		//@ts-ignore
		Swal.fire.mockReturnValueOnce( Promise.resolve( { isConfirmed: true } ) );

		await wrapper.find( '.btn-danger' ).trigger( 'click' );
		expect( Swal.fire ).toHaveBeenCalledWith( {
			title            : 'Esta seguro?',
			text             : 'Una vez borrado, no se puede recuperar',
			showDenyButton   : true,
			confirmButtonText: 'Si, estoy seguro'
		} );

		setTimeout( () => {
			expect( store.dispatch ).toHaveBeenCalledWith( 'journal/deleteEntry', '-Msr8-0x5wA7UhFR7dIB' );
			expect( mockRouter.push ).toHaveBeenCalledWith( { name: 'no-entry' } );
			done();
		}, 1 );
	} );
} );
