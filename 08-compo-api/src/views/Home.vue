<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
		<h3>{{ ironman }}</h3>
		<h3>{{ hulk }}</h3>
		
		<button @click="changeIronman">changeIronman</button>
		<button @click="changeHulk">changeHulk</button>
		
		<h3>Ironman: {{ ironmanIsAlive }}</h3>
		<h3>Hulk: {{ hulkIsAlive }}</h3>
		
		<button @click="changeStatus">changeStatus</button>
  </div>
</template>

<script>

import { reactive, ref } from "vue";

export default {
	name: 'Home',
	setup() {
		const ironman = ref( { name: 'Tony', age: 30 } );
		const hulk    = reactive( { name: 'Bruce', age: 35 } );
		
		const ironmanIsAlive = reactive( false );
		const hulkIsAlive    = ref( true );
		
		const changeStatus = () => {
			ironmanIsAlive.value = !ironmanIsAlive.value;
			hulkIsAlive.value    = !hulkIsAlive.value;
		};
		
		return {
			ironman,
			hulk,
			ironmanIsAlive,
			hulkIsAlive,
			changeStatus,
			changeIronman() {
				ironman.value.name = 'Tony Stark';
			},
			changeHulk() {
				hulk.name = 'Bruce Banner';
				hulk.age  = 40;
			}
		}
	}
}
</script>
