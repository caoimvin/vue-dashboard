<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
        legend: {
          display: true,
          position: "left"
        },
        responsive: true,
        maintainAspectRatio: false
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Germany", "United States", "China"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#40e080", "#40e0d0", "#40a0e0"],
            data: [100, 10, 5]
          }
        ]
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  }
};
</script>
