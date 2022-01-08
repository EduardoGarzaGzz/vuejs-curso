import { IPlacesState } from '@/store/places/state';
import { MutationTree } from 'vuex';

const mutations: MutationTree<IPlacesState> = {
    setLngLat: ( state, { lng, lat }: { lng: number, lat: number } ) => {
        state.userLocation = [ lng, lat ];
        state.isLoading    = false;
    }
};

export default mutations;
