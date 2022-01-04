<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { Options, Vue }         from 'vue-class-component';

@Options( {
  components: {
    Counter: defineAsyncComponent( () => import('@/components/Counter.vue') )
  }
} )
export default class Home extends Vue {}
</script>
