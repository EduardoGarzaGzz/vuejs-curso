import { IJournalState } from '@/modules/daybook/store/journal/interfaces';
import { Mutation }      from 'vuex';

export const setEntries: Mutation<IJournalState> = ( state, entries: any ) => {
    state.entries   = [ ...( state.entries as any ), ...entries ];
    state.isLoading = false;
};

export const updateEntry: Mutation<IJournalState> = ( state, entryUpdated: any ) => {
    const idx = ( state.entries as any ).map( ( e: any ) => e.id ).indexOf( entryUpdated.id );

    if ( idx !== -1 ) {
        ( state.entries as any )[ idx ] = entryUpdated;
    } else {
        ( state.entries as any ).push( { ...entryUpdated } );
    }
};

export const addEntry: Mutation<IJournalState> = ( state, entry ) => {
    state.entries = [ entry, ...state.entries ];
};

export const deleteEntry: Mutation<IJournalState> = ( state, entry ) => {
    state.entries = state.entries.filter( e => e.id !== entry.id );
};
