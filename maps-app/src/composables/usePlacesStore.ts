import { IState }              from '@/store';
import { computed, onMounted } from 'vue';
import { useStore }            from 'vuex';

export const usePlacesStore = () => {
    const store = useStore<IState>();

    onMounted( () => {
        if ( !store.getters[ 'places/isUserLocationReady' ] ) {
            store.dispatch( 'places/getInitialLocation' ).then();
        }
    } );

    return {
        isLoading          : computed<boolean>( () => store.state.places.isLoading ),
        userLocation       : computed( () => store.state.places.userLocation ),
        isUserLocationReady: computed<boolean>( () => store.getters[ 'places/isUserLocationReady' ] )
    };
};
