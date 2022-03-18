<template>
  <div class="about">
    <h1>This is an about page # {{ title }} #</h1>
		<button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
import {
	onActivated,
	onBeforeMount,
	onBeforeUpdate,
	onDeactivated,
	onErrorCaptured,
	onMounted,
	onRenderTracked,
	onRenderTriggered,
	onServerPrefetch,
	onUnmounted,
	onUpdated,
	ref
} from 'vue';

export default {
	name: 'About',
	setup() {
		onMounted( () => {
			console.log( 'About mounted' );
		} );
		onUpdated( () => {
			console.log( 'About updated' );
		} );
		onUnmounted( () => {
			console.log( 'About unmounted' );
		} );
		onBeforeMount( () => {
			console.log( 'About before mount' );
		} );
		onBeforeUpdate( () => {
			console.log( 'About before update' );
		} );
		onErrorCaptured( () => {
			console.log( 'About error captured' );
		} );
		onRenderTracked( () => {
			console.log( 'About render tracked' );
		} );
		onRenderTriggered( () => {
			console.log( 'About render triggered' );
		} );
		onActivated( () => {
			console.log( 'About activated' );
		} );
		onDeactivated( () => {
			console.log( 'About deactivated' );
		} );
		onServerPrefetch( () => {
			console.log( 'About server prefetch' );
		} );
		
		const title = ref( 'About' );
		return {
			title,
			changeTitle: () => title.value = 'About 2'
		};
	}
}
</script>
