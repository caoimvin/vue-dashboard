<template>
  <line-chart id="chart"></line-chart>
</template>

<script>
import LineChart from "@/components/charts/LineChart";

export default {
  name: "VueChartJS",
  components: {
    LineChart,
  },
};
</script>

<style lang="css" scoped>
#chart {
  height: 320px;
}
</style>
