import { usePlacesStore }                  from '@/composables/usePlacesStore';
import mapboxgl                            from 'mapbox-gl';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent( {
    name : 'MapView',
    setup: () => {
        const store      = usePlacesStore();
        const mapElement = ref<HTMLDivElement>();
        const initMap    = async () => {
            await Promise.resolve();

            if ( !mapElement.value ) return;
            if ( !store.userLocation ) return;

            const userLocation: any = store.userLocation.value;
            const map               = new mapboxgl.Map( {
                container: mapElement.value,
                style    : 'mapbox://styles/mapbox/satellite-streets-v11',
                center   : userLocation,
                zoom     : 15
            } );

            const popup = new mapboxgl.Popup()
                .setLngLat( userLocation )
                .setHTML( `<h4>Aqui estoy perros</h4><p>${ userLocation }</p>` )
                .addTo( map );

            new mapboxgl.Marker()
                .setLngLat( userLocation )
                .setPopup( popup )
                .addTo( map );
        };

        onMounted( () => {
            if ( store.isUserLocationReady ) return initMap();
        } );

        return {
            ...store,
            mapElement
        };
    }
} );
