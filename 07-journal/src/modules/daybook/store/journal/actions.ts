import { IJournalState } from '@/modules/daybook/store/journal/interfaces';
import { Action }        from 'vuex';

export const loadEntries: Action<IJournalState, IJournalState> = async () => {
    console.log( 'loadEntries: Not implemented' );
};

export const updateEntry: Action<IJournalState, IJournalState> = async () => {
    console.log( 'updateEntry: Not implemented' );
};

export const createEntry: Action<IJournalState, IJournalState> = async () => {
    console.log( 'createEntry: Not implemented' );
};
