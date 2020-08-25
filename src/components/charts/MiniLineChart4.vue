<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
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
            data: [60, 40, 50, 50, 90, 50, 20, 40, 50, 20, 30, 60]
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
