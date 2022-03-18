import journalApi        from '@/api/journalApi';
import { IJournalState } from '@/modules/daybook/store/journal/interfaces';
import { Action }        from 'vuex';

export const loadEntries: Action<IJournalState, IJournalState> = async ( { commit } ) => {
    const { data }     = await journalApi.get( `/entries.json` );
    const entries: any = [];

    if ( !data ) {
        commit( 'setEntries', [] );
        return;
    }

    for ( const id of Object.keys( data ) ) {
        entries.push( {
            id,
            ...data[ id ]
        } );
    }

    commit( 'setEntries', entries );
};

export const updateEntry: Action<IJournalState, IJournalState> = async ( { commit }, entry ) => {
    const { id, date, picture, text } = entry;
    const { data }                    = await journalApi.put( `/entries/${ id }.json`, {
        date,
        picture,
        text
    } );
    commit( 'updateEntry', {
        id,
        ...data
    } );
};

export const createEntry: Action<IJournalState, IJournalState> = async ( { commit }, entry ) => {
    const { date, picture, text } = entry;
    const dataToSave              = { date, picture, text };
    const { data }                = await journalApi.post( `/entries.json`, dataToSave );
    commit( 'addEntry', {
        id: data.name,
        ...dataToSave
    } );
    return data.name;
};

export const deleteEntry: Action<IJournalState, IJournalState> = async ( { commit }, entry ) => {
    await journalApi.delete( `/entries/${ entry.id }.json` );
    commit( 'deleteEntry', entry );
};
