<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button class="btn btn-primary" @click="goToDayBook">Primary</button>
    <button class="btn btn-secondary" @click="goToDayBook">Secondary</button>
    <button class="btn btn-success" @click="goToDayBook">Success</button>
  </div>
</template>

<script>
export default {
	name      : 'Home',
	components: {},
	methods   : {
		goToDayBook() {
			this.$router.push( { name: 'no-entry' } );
		}
	}
}
</script>
