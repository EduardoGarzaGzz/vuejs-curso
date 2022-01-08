import { IJournalState } from '@/modules/daybook/store/journal/interfaces';
import { Store }         from 'vuex';

declare module '@vue/runtime-core' {

    interface State {
        journal: IJournalState;
    }

    interface ComponentCustomProperties {
        $store: Store<State>;
    }

}
