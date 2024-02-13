export default {
  compute(input, allowed_colors) {
    var mapping = [];
    var colors = [...allowed_colors];
    var sorted_arr = [...new Set(input)];
    var arr_len = sorted_arr.length;
    var col_len = colors.length;

    if (arr_len == col_len) {
      input.forEach((ele) => {
        if (mapping.value != ele) {
          mapping.push({
            value: ele,
            color: colors.shift(),
          });
        }
      });
    } else if (arr_len < col_len) {
      var x = Math.floor(col_len / arr_len);
      var counter = 0;
      for (let i = 0; i < col_len && counter != arr_len; i += x) {
        if (mapping.value != sorted_arr[counter]) {
          mapping.push({
            value: sorted_arr[counter],
            color: colors[i],
          });
        }
        counter++;
      }
    } else {
      for (let i = 0; i < arr_len; i++) {
        if (mapping.value != sorted_arr[i]) {
          mapping.push({
            value: sorted_arr[i],
            color: colors[i % col_len],
          });
        }
      }
    }
    return mapping;
  },
};
