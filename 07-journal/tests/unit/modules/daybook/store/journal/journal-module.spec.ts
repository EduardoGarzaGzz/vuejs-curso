import { journalModule } from '@/modules/daybook/store/journal';
import { createStore }   from 'vuex';
import { journalState }  from '../../../../mock-data/test-journal-state';

const createVuexStore = ( initialState: any ) => createStore( {
	modules: {
		jornal: {
			...journalModule,
			state: { ...initialState }
		}
	}
} );

describe( 'Test Vuex - Pruebas en el Jornal Module', function() {
	it( 'este es el estado inicial, debe de tener este state', () => {
		const store                  = createVuexStore( journalState );
		//@ts-ignore
		const { isLoading, entries } = store.state.jornal;

		expect( isLoading ).toBeFalsy();
		expect( entries ).toEqual( journalState.entries );
	} );

	it( 'mutation: setEntries', () => {
		const store = createVuexStore( {
			isLoading: true,
			entries  : []
		} );

		store.commit( 'jornal/setEntries', journalState.entries );

		//@ts-ignore
		const { isLoading, entries } = store.state.jornal;

		expect( entries.length ).toBe( 1 );
		expect( isLoading ).toBeFalsy();
	} );
} );
