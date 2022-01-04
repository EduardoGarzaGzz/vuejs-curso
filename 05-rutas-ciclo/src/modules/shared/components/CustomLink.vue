<template>
  <a v-if="isExternalLink" :href="link.to" class="normal-link">
    {{ link.name }}
  </a>
  <router-link v-else v-slot="{ href, isActive }" :to="link.to">
    <a :class=" isActive ? 'is-active': 'normal-link'"
       :href="href">
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
