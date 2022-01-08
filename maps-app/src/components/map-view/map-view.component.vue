<script lang="ts" src="./map-view.component.ts" />

<template>
	<div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
		<div class="text-center">
			<h3>Espere por favor</h3>
			<span>Localizando...</span>
		</div>
	</div>
	<div v-show="isUserLocationReady" ref="mapElement" class="map-container" />
</template>

<style scoped>

.loading-map {
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 99999;
	background-color: rgba(0, 0, 0, 0.8);
}

.map-container {
	position: fixed;
	width: 100vw;
	height: 100vh;
}
</style>
