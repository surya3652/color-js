<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <table>
      <tr>
        <th>Number</th>
        <th>Corresponding Hex Code</th>
        <th>Color Representation</th>
      </tr>
      <tr v-for="(element, index) in inputArray" :key="index">
        <td>{{ element }}</td>
        <td>{{ colorMap[element] }}</td>
        <td>
          <div
            :style="{ backgroundColor: colorMap[element] }"
            class="small-div"
          ></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Color",
  props: {
    msg: String,
    input: String,
    allowed_colors: Array,
  },
  data() {
    return {
      colorMap: {},
      inputArray: [],
    };
  },
  created() {
    var arr = this.input.split(",");
    var colors = this.allowed_colors;
    var sorted_arr = [...new Set(arr)];
    var mapping = {};

    if (sorted_arr.length == colors.length) {
      arr.forEach((ele) => {
        if (!mapping[ele]) {
          mapping[ele] = colors.shift();
        }
      });
    } else if (sorted_arr.length <= colors.length) {
      var x = Math.floor(colors.length / sorted_arr.length);
      var counter = 0;
      for (
        let i = 0;
        i < colors.length && counter != sorted_arr.length;
        i += x
      ) {
        mapping[sorted_arr[counter++]] = colors[i];
      }
    } else {
      for (let i = 0; i < sorted_arr.length; i++) {
        mapping[sorted_arr[i]] = colors[(i % (colors.length))];

      }
    }
    this.colorMap = mapping;
    this.inputArray = this.input.split(",");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
tr,
th,
td {
  border: px solid black;
  margin-left: auto;
  margin-right: auto;
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
