<template>
  <h1>About Page</h1>
  <p>{{ name }}</p>
  <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      name: 'Eduardo'
    }
  },
  methods: {
    onChangeName() {
      this.name = 'Eduardo Garza';
    }
  },
  beforeCreate() {
    console.log( `Fun call: beforeCreate` );
  },
  created() {
    console.log( `Fun call: created` );
  },
  beforeMount() {
    console.log( `Fun call: beforeMount` );
  },
  mounted() {
    console.log( `Fun call: mounted` );
  },
  beforeUpdate() {
    console.log( `Fun call: beforeUpdate` );
  },
  updated() {
    console.log( `Fun call: updated` );
  },
  activated() {
    console.log( `Fun call: activated` );
  },
  deactivated() {
    console.log( `Fun call: deactivated` );
  },
  beforeUnmount() {
    console.log( `Fun call: beforeUnmount` );
  },
  unmounted() {
    console.log( `Fun call: unmounted` );
  },
  errorCaptured() {
    console.log( `Fun call: errorCaptured` );
  },
  renderTracked() {
    console.log( `Fun call: renderTracked` );
  },
  renderTriggered() {
    console.log( `Fun call: renderTriggered` );
  }
}
</script>

<style scoped>

</style>
