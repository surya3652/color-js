<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" /><br />
    <Color msg="Color Sorter" />
  </div>
</template>

<script>
import Color from "./components/Color.vue";
export default {
  name: "App",
  components: {
    Color,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin: 5px;
}
</style>
