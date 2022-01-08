import placesModule     from '@/store/places';
import { IPlacesState } from '@/store/places/state';
import { createStore }  from 'vuex';

export interface IState {
    places: IPlacesState;
}

export default createStore<IState>( {
    modules: {
        places: placesModule
    }
} );
