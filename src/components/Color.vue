<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>Enter the comma seperated integers in the below tag</h4>
    <InputForm />
    <table v-if="isVisible">
      <tr>
        <th>Number</th>
        <th>Corresponding Hex Code</th>
        <th>Color Representation</th>
      </tr>
      <tr v-for="(element, index) in inputArray" :key="index">
        <td>{{ element }}</td>
        <td>
          {{ getColor(element) }}
        </td>
        <td>
          <div
            :style="{
              backgroundColor: getColor(element),
            }"
            class="small-div"
          ></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import InputForm from "./InputForm.vue";
import service from "../service";
export default {
  name: "Color",
  props: {
    msg: String,
  },

  components: {
    InputForm,
  },

  data() {
    return {
      inputArray: [],
      isVisible: false,
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
  methods: {
    getColor(element) {
      const mapping = service.compute(this.inputArray,this.allowed_colors);
      const available = mapping.find((e) => e.value === element);
      return available ? available.color : "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
tr,
th,
td {
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}
td {
  font-weight: 800;
}
.small-div {
  height: 20px;
  width: auto;
  border-radius: 0px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
