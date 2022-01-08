import { IJournalState } from '@/modules/daybook/store/journal/interfaces';
import { Getter }        from 'vuex';

export const getEntriesByTerm: Getter<IJournalState, IJournalState> = ( state ) => ( term: string | null = null ): any => {
    const list: any = state.entries;

    if ( !term ) return list;
    return list.filter( ( entry: any ) => entry.text.toLowerCase().includes( term ) );
};


export const getEntriesById: Getter<IJournalState, IJournalState> = ( state ) => ( id = '' ) => {
    const entry = ( state.entries as any ).find( ( entry: any ) => entry.id === id );

    if ( !entry ) return undefined;

    return { ...entry };
};
