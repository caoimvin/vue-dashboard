<template>
  <MiniLineChart id="chart" />
</template>

<script>
import MiniLineChart from "@/components/charts/MiniLineChart1";

export default {
  name: "VueChartJS",
  components: {
    MiniLineChart,
  },
};
</script>

<style lang="css" scoped>
#chart {
  height: 100px;
  /* width: 50px; */
}
</style>
