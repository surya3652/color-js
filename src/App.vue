<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" /><br />
    <h4>Enter the comma seperated integers in the below tag</h4>
    <form @submit.prevent="show = !show" action="">
      <input required v-model="input" type="text" />
      <input type="submit" />
    </form>

    <Color
      v-if="show"
      msg="Color Sorter"
      :input="input"
      :allowed_colors="allowed_colors"
    />
  </div>
</template>

<script>
import Color from "./components/Color.vue";

export default {
  name: "App",
  data() {
    return {
      input: "",
      show: false,
      allowed_colors: [
        "#32294D",
        "#473E79",
        "#5C4F89",
        "#6b5e9a",
        "#8171ad",
        "#8f7fbc",
        "#9d8cca",
        "#ab9bd8",
        "#bbaae7",
        "#ccbdf4",
        "#dacefa",
        "#edd7ff",
        "#f5eafe",
      ],
    };
  },
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
