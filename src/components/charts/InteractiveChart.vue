<template>
  <div>
    <Plotly
      :data="data"
      :layout="layout"
      :display-mode-bar="false"
      id="chart"
    ></Plotly>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";

export default {
  components: {
    Plotly,
  },
  data() {
    return {
      data: [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: "scatter",
        },
      ],
      layout: {
        margin: {
          l: 40,
          t: 40,
          r: 40,
          b: 40,
          pad: 0,
        },
        // title: "My graph",
      },
    };
  },
};
</script>

<style lang="css" scoped>
#chart {
  height: 320px;
}
</style>
