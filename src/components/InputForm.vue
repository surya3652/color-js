<template>
  <div>
    <form @submit.prevent="" action="">
      <input required v-model="input" type="text" />
      <button @click="trigger()">Show</button>
      <button @click="reset()">Reset</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {
      input: "",
      isVisible: false,
    };
  },
  methods: {
    trigger() {
      if (this.input != "") {
        this.$parent.isVisible = true;
      }
      this.$parent.compute(this.input.split(","));
    },
    reset() {
      this.input = "";
      this.$parent.isVisible = false;
    },
  },
};
</script>
