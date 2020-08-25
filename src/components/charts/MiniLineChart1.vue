<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "rgba(0,0,0,0)",
            // pointBackgroundColor: "",
            borderWidth: 5,
            borderColor: "#2794ff",
            // pointBorderColor: "white",
            pointBorderWidth: 2,
            data: [2345, 2555, 2800, 2000, 1500, 1845, 2500]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  }
};
</script>
