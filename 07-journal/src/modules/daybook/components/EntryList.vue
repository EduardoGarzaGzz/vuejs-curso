<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input v-model="term" class="form-control" placeholder="Buscar entrada" type="text">
    </div>
    <div class="entry-scrollarea">
      <p v-for="entry in entriesByTerm" :key="entry.id"><Entry :entry="entry" /></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { mapGetters }           from 'vuex';

export default {
	name      : 'EntryList',
	components: {
		Entry: defineAsyncComponent( () => import('@/modules/daybook/components/Entry.vue') )
	},
	data() {
		return {
			term: ''
		};
	},
	computed: {
		...mapGetters( 'journal', {
			getEntriesByTerm: 'getEntriesByTerm'
		} ),
		entriesByTerm() {
			return this.getEntriesByTerm( this.term );
		}
	}
};
</script>

<style lang="scss" scoped>
.entry-list-container {
	border-right: 1px solid #2C3E50;
	height: calc(100vh - 56px);
}

.entry-scrollarea {
	height: calc(100vh - 110px);
	overflow: scroll;
}
</style>
