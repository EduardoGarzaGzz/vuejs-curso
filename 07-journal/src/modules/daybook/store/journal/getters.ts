import { IJournalState } from '@/modules/daybook/store/journal/interfaces';
import { Getter }        from 'vuex';

export const getEntriesByTerm: Getter<IJournalState, IJournalState> = ( state ) => ( term: string | null = null ) => {
    return ( term )
           ? ( state.entries as any ).filter( ( entry: any ) => entry.text.toLowerCase().includes( term ) )
           : state.entries;
};


export const getEntriesById: Getter<IJournalState, IJournalState> = () => {
    console.log( 'getEntriesById: Not implemented' );
};
