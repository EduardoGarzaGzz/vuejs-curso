import { journalModule } from '@/modules/daybook/store/journal';
import { IJournalState } from '@/modules/daybook/store/journal/interfaces';
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

	it( 'mutation: updateEntry', () => {
		const store = createVuexStore( {
			isLoading: true,
			entries  : [ {
				id  : '-MfKM3yA5ij3hnmLFfqv',
				date: 1627077227978,
				text: 'Hola mundo desde mock data'
			} ]
		} );

		const updateEntry = {
			id  : '-MfKM3yA5ij3hnmLFfqv',
			date: 1627077227978,
			text: 'Hola mundo desde mock data (Editado)'
		};

		store.commit( 'jornal/updateEntry', updateEntry );

		//@ts-ignore
		const { entries } = store.state.jornal as IJournalState;
		const entry       = entries.find( ( entry ) => entry.id === updateEntry.id );

		expect( entries.length ).toBe( 1 );
		expect( entry ).toEqual( updateEntry );
	} );

	it( 'mutation: addEntry, deleteEntry', () => {
		const store = createVuexStore( {
			isLoading: true,
			entries  : [ {
				id  : '-MfKM3yA5ij3hnmLFfqv',
				date: 1627077227978,
				text: 'Hola mundo desde mock data'
			} ]
		} );

		const entryTest = { id: 'ABC-123', date: 1627077227978, text: 'Hola mundo (Nuevo)' };
		store.commit( 'jornal/addEntry', entryTest );
		//@ts-ignore
		const entries = ( store.state.jornal as IJournalState ).entries;
		expect( entries.length ).toBe( 2 );
		expect( entries.find( ( entry ) => entry.id === entryTest.id ) ).toBeTruthy();

		store.commit( 'jornal/deleteEntry', entryTest );

		//@ts-ignore
		expect( ( store.state.jornal as IJournalState ).entries.length ).toBe( 1 );
		//@ts-ignore
		expect( ( store.state.jornal as IJournalState ).entries.find( ( entry ) => entry.id === entryTest.id ) ).toBeUndefined();
	} );

	it( 'getters: getEntriesByTerm getEntryById', () => {
		const store = createVuexStore( journalState );

		expect( store.getters[ 'jornal/getEntriesByTerm' ]( '' ).length ).toBe( 1 );
		expect( store.getters[ 'jornal/getEntriesByTerm' ]( 'werwerwerewwerwerwe' ).length ).toBe( 0 );
		expect( store.getters[ 'jornal/getEntriesByTerm' ]( 'mock' ).length ).toBe( 1 );
		expect( store.getters[ 'jornal/getEntriesByTerm' ]( '-Msr8-0x5wA7UhFR7dIB' ) ).toBeTruthy();
		expect( store.getters[ 'jornal/getEntriesByTerm' ]( '-Msr8-' ) ).toEqual( [] );
	} );

	it( 'actions: loadEntries', async () => {
		const store = createVuexStore( {
			isLoading: true,
			entries  : []
		} );

		await store.dispatch( 'jornal/loadEntries' );

		//@ts-ignore
		expect( store.state.jornal.entries.length ).toBe( 4 );
	} );

	it( 'actions: updateEntry', async () => {
		const store = createVuexStore( {
			isLoading: true,
			entries  : []
		} );

		const updateEntry = {
			'id'        : '-Msr8-0x5wA7UhFR7dIB',
			'date'      : 1641602609458,
			'text'      : 'Test 1',
			'tags'      : [
				'test'
			],
			'isFavorite': false,
			'isPublic'  : false
		};

		await store.dispatch( 'jornal/updateEntry', updateEntry );

		//@ts-ignore
		const { entries } = store.state.jornal as IJournalState;
		const entry       = entries.find( ( entry ) => entry.id === updateEntry.id );
		//@ts-ignore
		expect( store.state.jornal.entries.find( e => e.id === updateEntry.id ) ).toEqual( {
			'id'  : '-Msr8-0x5wA7UhFR7dIB',
			'date': 1641602609458,
			'text': 'Test 1'
		} );
	} );

	it( 'actions: createEntry deleteEntry', async () => {
		const store = createVuexStore( journalState );

		const newEntry = {
			'date': 1641602609458,
			'text': 'Test Nueva Entrada'
		};

		const id = await store.dispatch( 'jornal/createEntry', newEntry );
		expect( typeof id ).toBe( 'string' );

		//@ts-ignore
		let { entries } = store.state.jornal as IJournalState;
		let entry       = entries.find( ( el ) => el.id === id );

		//@ts-ignore
		expect( entry ).toBeTruthy();

		await store.dispatch( 'jornal/deleteEntry', entry );

		//@ts-ignore
		entries = ( store.state.jornal as IJournalState ).entries;
		entry   = entries.find( ( el ) => el.id === id );

		//@ts-ignore
		expect( entry ).toBeFalsy();
	} );
} );
