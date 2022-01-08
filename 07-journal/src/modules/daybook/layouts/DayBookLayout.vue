<template>
  <Navbar />
	<div v-if="isLoading" class="row justify-content-md-center">
		<div class="col-3 alert-info text-center mt-5">
			<p>Espere por favor...</p>
			<h3 class="mt-2"><em class="fa fa-spin fa-sync"></em></h3>
		</div>
	</div>
  <div v-else class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="js">
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default {
	name      : 'DayBookLayout',
	components: {
		Navbar   : defineAsyncComponent( () => import('@/modules/daybook/components/Navbar.vue') ),
		EntryList: defineAsyncComponent( () => import('@/modules/daybook/components/EntryList.vue') )
	},
	methods   : {
		...mapActions( 'journal', {
			loadEntries: 'loadEntries'
		} )
	},
	computed  : {
		...mapState( 'journal', {
			isLoading: "isLoading"
		} )
	},
	created() {
		this.loadEntries();
	}
};
</script>
