<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      // required: true
      default: 100,
      // validator( val ) {
      //   return val > 100;
      // }
    }
  },
  data() {
    return {
      counter: this.start
    }
  },
  methods : {
    getSquareValue() {
      console.log( 'getSquareValue' );
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    }
  },
  computed: {
    squareCounter() {
      console.log( 'squareCounter' );
      return this.getSquareValue();
    },
    customTitle() {
      return this.title || 'Contador'
    }
  }
}
</script>

<style>
  button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: #FFFFFF;
    margin: 0 5px;
    cursor: pointer;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #5AA67B;
    transition: 0.3s ease-in-out;
  }
</style>
