<template>
  <h1>Counter - vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <!--  <h2>Computed: {{ countComputed }}</h2>-->

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapState }     from "vuex";

@Options( {
  name    : "Counter",
  computed: {
    // ...mapState( [ 'count' ] ),
    ...mapState( {
      count: state => state.count
    } ),
  }
} )
export default class Counter extends Vue {
}
</script>

<style scoped>

</style>
