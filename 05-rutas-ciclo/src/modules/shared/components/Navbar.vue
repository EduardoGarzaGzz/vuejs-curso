<template>
  <div>
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { to: 'home', name: 'Home' },
        { to: 'about', name: 'About' },
        { to: 'pokemon-id', name: 'Pokemon 50', id: 50 },
        { to: 'https://google.com', name: 'Google' },
        { to: 'dbz-characters', name: 'Dbz Characters' },
        { to: 'dbz-about', name: 'Dbz About' },
      ]
    }
  },
  components: {
    CustomLink: defineAsyncComponent(
        () => import( /* webpackChunkName: "CustomLink"  */ '@/modules/shared/components/CustomLink') )
  }
}
</script>

<style scoped>

</style>
