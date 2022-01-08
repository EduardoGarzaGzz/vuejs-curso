<template>
	<template v-if="entry">
		<div class="entry-title d-flex justify-content-between p-2">
			<div>
				<span class="text-success fs-5 fw-bold">{{ day }}</span>
				<span class="mx-1 fs-5">{{ month }}</span>
				<span class="mx-2 fw-light">{{ yearDay }}</span>
			</div>
			<div>
				<button v-if="entry.id"
								class="btn btn-danger mx-2"
								@click="onDeleteEntry">Borrar <em class="fa fa-trash-alt"></em></button>
				<button class="btn btn-primary mx-2">Subir foto <em class="fa fa-upload"></em></button>
			</div>
		</div>
		<hr>
		<div class="d-flex flex-column px-3 h-75">
			<textarea v-model="entry.text" placeholder="Que sucedió hoy?"></textarea>
		</div>
		<img alt="entry-picture" class="img-thumbnail" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg">
	</template>
	<Fab icon="fa-save" @on:click="saveEntry" />
</template>

<script lang="js">
import { defineAsyncComponent }   from 'vue';
import { mapActions, mapGetters } from "vuex";
import getDayMonthYear            from "@/modules/daybook/helpers/getDayMonthYear.ts";

export default {
	name      : 'EntryView',
	props     : {
		id: {
			type    : String,
			required: true
		}
	},
	components: {
		Fab: defineAsyncComponent( () => import('@/modules/daybook/components/Fab.vue') )
	},
	data() {
		return {
			entry: {
				text: ''
			}
		}
	},
	computed: {
		...mapGetters( 'journal', {
			getEntriesById: 'getEntriesById'
		} ),
		day() {
			const { day } = getDayMonthYear( this.entry.date );
			return day;
		},
		month() {
			const { month } = getDayMonthYear( this.entry.date );
			return month;
		},
		yearDay() {
			const { yearDay } = getDayMonthYear( this.entry.date );
			return yearDay;
		}
	},
	methods : {
		...mapActions( 'journal', {
			updateEntry: "updateEntry",
			createEntry: "createEntry",
			deleteEntry: "deleteEntry"
		} ),
		loadEntry() {
			let entry = null;
			if ( this.id === 'new' ) {
				this.entry = {
					text: '',
					date: new Date().getTime()
				};
			} else {
				entry = this.getEntriesById( this.id );
				
				if ( !entry ) {
					this.$router.push( { name: 'no-entry' } );
					return;
				}
				
				this.entry = entry;
			}
		},
		async saveEntry() {
			if ( this.entry.id ) {
				await this.updateEntry( this.entry );
			} else {
				const id = await this.createEntry( this.entry );
				await this.$router.push( { name: 'entry', params: { id } } );
			}
		},
		async onDeleteEntry() {
			await this.deleteEntry( this.entry );
			await this.$router.push( { name: 'no-entry' } );
		}
	},
	created() {
		this.loadEntry();
	},
	watch: {
		id() {
			this.loadEntry();
		}
	}
};
</script>

<style lang="scss" scoped>

textarea {
	font-size: 20px;
	border: none;
	height: 100%;
	
	&:focus {
		outline: none;
	}
}

img {
	width: 200px;
	position: fixed;
	bottom: 150px;
	right: 20px;
	box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>
