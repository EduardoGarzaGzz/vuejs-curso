<template>
  <div class="home">
    <MapView />
  </div>
</template>

<script lang="ts">

import MapViewComponent    from '@/components/map-view/map-view.component.vue';
import { usePlacesStore }  from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';

export default defineComponent( {
	name      : 'HomeView',
	components: {
		MapView: MapViewComponent
	},
	setup() {
		usePlacesStore();
	}
} );
</script>
