import { IState }               from '@/store';
import actions                  from '@/store/module-template/actions';
import getters                  from '@/store/module-template/getters';
import mutations                from '@/store/module-template/mutations';
import state, { IExampleState } from '@/store/module-template/state';
import { Module }               from 'vuex';

const exampleModule: Module<IExampleState, IState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};

export default exampleModule;
