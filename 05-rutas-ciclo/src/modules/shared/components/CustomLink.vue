<template>
  <a v-if="isExternalLink" :href="link.to" class="normal-link">
    {{ link.name }}
  </a>
  <router-link v-else v-slot="{ isActive }" :to="route">
    <a :class=" isActive ? 'is-active': 'normal-link'">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
export default {
  name    : "CustomLink",
  props   : {
    link: {
      type    : Object,
      required: true
    }
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith( 'http' );
    },
    route() {
      return this.link.id === undefined
          ? { name: this.link.to }
          : { name: this.link.to, params: { id: this.link.id } }
    }
  }
}
</script>

<style scoped>
  div {
    padding: 0 30px;
  }

  div a {
    font-weight: bold;
    margin: 0 10px;
  }

  .is-active {
    color: #42b983;
  }

  .normal-link {
    color: #2c3e50;
  }
</style>
