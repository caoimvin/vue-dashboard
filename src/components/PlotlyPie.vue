<template>
  <pie-chart id="chart"></pie-chart>
</template>

<script>
import PieChart from "@/components/charts/PieChart";

export default {
  name: "VueChartJS",
  components: {
    PieChart,
  },
};
</script>

<style lang="css" scoped>
#chart {
  height: 320px;
}
</style>
