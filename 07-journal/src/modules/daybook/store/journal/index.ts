import * as actions              from '@/modules/daybook/store/journal/actions';
import * as getters              from '@/modules/daybook/store/journal/getters';
import { IJournalState }         from '@/modules/daybook/store/journal/interfaces';
import * as mutations            from '@/modules/daybook/store/journal/mutations';
import { journalState as state } from '@/modules/daybook/store/journal/state';
import { Module }                from 'vuex';

export const journalModule: Module<IJournalState, IJournalState> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
