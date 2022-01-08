import { IState }       from '@/store';
import { IPlacesState } from '@/store/places/state';
import { GetterTree }   from 'vuex';

const getters: GetterTree<IPlacesState, IState> = {
    isUserLocationReady: ( s ) => !!s.userLocation
};

export default getters;
