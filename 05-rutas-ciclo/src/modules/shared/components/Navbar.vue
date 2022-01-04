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
        { to: '/', name: 'home' },
        { to: '/pokemon/50', name: 'Pokemon 50' },
        { to: '/about', name: 'About' },
        { to: 'https://google.com', name: 'Google' },
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
