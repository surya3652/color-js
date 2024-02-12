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
          {{
            mapping.find((e) => {
              if (e.value === element) {
                return true;
              }
            }).color
          }}
        </td>
        <td>
          <div
            :style="{
              backgroundColor: mapping.find((e) => {
                if (e.value === element) {
                  return true;
                }
              }).color,
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
      mapping: [],
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
    compute(input) {
      this.inputArray = input;
      var colors = this.allowed_colors;
      var sorted_arr = [...new Set(this.inputArray)];
      var arr_len = sorted_arr.length;
      var col_len = colors.length;

      if (arr_len == col_len) {
        this.inputArray.forEach((ele) => {
          if (this.mapping.value != ele) {
            this.mapping.push({
              value: ele,
              color: colors.shift(),
            });
          }
        });
      } else if (arr_len < col_len) {
        var x = Math.floor(col_len / arr_len);
        var counter = 0;
        /* counter variable is intialized to stop assigning colors to input
      values when input values comes to an end
      Ex : col_len = 13 , arr_len = 5
      so the step size should be 2 i.e. 0,2,4,6,8 indices of color array are
      taken to assign them to 5 values.
      The loop usually runs upto i reaches 12, but it should stop when i = 8.
      so maintained a counter variable to stop iteration thereafter.
      */
        for (let i = 0; i < col_len && counter != arr_len; i += x) {
          if (this.mapping.value != sorted_arr[counter]) {
            this.mapping.push({
              value: sorted_arr[counter],
              color: colors[i],
            });
          }
          counter++;
        }
      } else {
        for (let i = 0; i < arr_len; i++) {
          if (this.mapping.value != sorted_arr[i]) {
            this.mapping.push({
              value: sorted_arr[i],
              color: colors[i % col_len],
            });
          }
        }
      }
      // console.log(JSON.parse(JSON.stringify(this.mapping)));
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
