import * as actions   from './actions';
import * as getters   from './getters';
import * as mutations from './mutations';
import state          from './state';

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default counterStore;
