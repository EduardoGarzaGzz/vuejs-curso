<template>
  <h1>Counter - vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button :disabled="isLoading" @click="incrementRandomInt">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>

  <h2>Direct getter: {{ $store.getters.squareCount }}</h2>
</template>

<script>
import { Options, Vue }         from "vue-class-component";
import { mapActions, mapState } from "vuex";

@Options( {
  name    : "Counter",
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState( 'counter', {
      count    : 'count',
      isLoading: 'isLoading'
    } ),
  },
  methods : {
    increment() {
      this.$store.commit( 'counter/increment' );
    },
    incrementBy() {
      this.$store.commit( 'counter/incrementBy', 5 );
    },
    ...mapActions( 'counter', {
      incrementRandomInt: 'incrementRandomInt'
    } )
  }
} )
export default class Counter extends Vue {
}
</script>

<style scoped>

</style>
