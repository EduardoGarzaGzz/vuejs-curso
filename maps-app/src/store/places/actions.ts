import { IState }       from '@/store';
import { IPlacesState } from '@/store/places/state';
import { ActionTree }   from 'vuex';

const actions: ActionTree<IPlacesState, IState> = {
    getInitialLocation: async ( { commit } ) => {
        navigator.geolocation.getCurrentPosition(
            ( { coords } ) => commit( 'setLngLat', { lng: coords.longitude, lat: coords.latitude } ),
            ( err ) => {
                console.error( err );
                throw new Error( 'No geolocation :c' );
            }
        );
    }
};

export default actions;
