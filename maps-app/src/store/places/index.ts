import { IState }              from '@/store';
import actions                 from '@/store/places/actions';
import getters                 from '@/store/places/getters';
import mutations               from '@/store/places/mutations';
import state, { IPlacesState } from '@/store/places/state';
import { Module }              from 'vuex';

const placesModule: Module<IPlacesState, IState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};

export default placesModule;
