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
            data: [60, 40, 20, 50, 20, 80, 85, 10, 60, 70, 90, 10]
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
