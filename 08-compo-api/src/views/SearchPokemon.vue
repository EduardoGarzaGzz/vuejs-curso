<template>
	<h1>Buscar pokemon:</h1>
	<form @submit.prevent="onSubmit">
		<input ref="txtSearchId" v-model="pokemonId" autofocus placeholder="Numero del pokemon" type="number">
	</form>
	<br>
	<span>Presione enter para buscar</span>
</template>

<script>
import { onActivated, ref } from "vue";
import { useRouter }        from "vue-router";

export default {
	name: "SearchPokemon",
	setup() {
		const router      = useRouter();
		const pokemonId   = ref( 1 );
		const txtSearchId = ref();
		
		onActivated( () => {
			txtSearchId.value.select();
		} );
		
		
		return {
			pokemonId,
			txtSearchId,
			onSubmit: () => {
				router.push( { name: "pokemon-id", params: { id: pokemonId.value } } );
			}
		};
	}
}
</script>

<style scoped>

</style>
