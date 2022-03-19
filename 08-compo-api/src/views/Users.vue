<template>
	<h2 v-if="isLoading">Espere por favor...</h2>
	<h2 v-else>Usuarios</h2>
	<h5 v-if="errorMsg && errorMsg !== ''">Error en la carga... # {{ errorMsg }} #</h5>
	
	<div v-if="users.length > 0">
		<ul>
			<li v-for="{first_name, last_name, email, id} in users" :key="id">
				<h4>{{ first_name }} {{ last_name }}</h4>
				<h6>{{ email }}</h6>
			</li>
		</ul>
	</div>
	
	<button @click="lastPage">Atras</button>
	<button @click="nextPage">Siguiente</button>
	<p>Pagina: {{ currentPage }}</p>
</template>

<script>
import useUser from "@/composables/useUser";

export default {
	name: "Users",
	setup() {
		return {
			...useUser()
		}
	}
}
</script>

<style scoped>
	h2 {
		text-align: center;
		width: 100%;
	}
	
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	
	ul {
		list-style: none;
		width: 100%;
	}
	
</style>
