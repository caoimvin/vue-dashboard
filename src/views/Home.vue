<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <button class="btn btn-outline-primary btn-large">hello test</button> -->
    <div class="test-div">
      <div class="test">
        <MiniChart1 class="test-chart" />
        <div class="test-text">
          <p>
            <strong>$3.456,54</strong>
            <br />Weekly Sales
          </p>
        </div>
      </div>
      <div class="test">
        <MiniChart2 class="test-chart" />
        <div class="test-text">
          <p>
            <strong>$43.576,43</strong>
            <br />Monthly Sales
          </p>
        </div>
      </div>
      <div class="test">
        <MiniChart3 class="test-chart" />
        <div class="test-text">
          <p>
            <strong>2304</strong>
            <br />Unique Visitors
          </p>
        </div>
      </div>
      <div class="test">
        <MiniChart4 class="test-chart" />
        <div class="test-text">
          <p>
            <strong>30240</strong>
            <br />Unique visits
          </p>
        </div>
      </div>
    </div>
    <div class="icons-list">
      <div class="icon">
        <i class="fa fa-user"></i>
        <p>User</p>
      </div>
      <div class="icon">
        <i class="fa fa-map-marker"></i>
        <p>Map</p>
      </div>
      <div class="icon">
        <i class="fa fa-flask"></i>
        <p>Lab</p>
      </div>
      <div class="icon">
        <i class="fa fa-paper-plane"></i>
        <p>Delivery</p>
      </div>
      <div class="icon">
        <i class="fa fa-bar-chart"></i>
        <p>Charts</p>
      </div>
      <div class="icon">
        <i class="fa fa-comments"></i>
        <p>Comments</p>
      </div>
      <div class="icon">
        <i class="fa fa-address-book"></i>
        <p>Contacts</p>
      </div>
      <div class="icon">
        <i class="fa fa-calendar-check-o"></i>
        <p>Todo List</p>
      </div>
      <div class="icon">
        <i class="fa fa-gear"></i>
        <p>Settings</p>
      </div>
    </div>
    <div class="card">
      <div class="card-div chart-one">
        <div class="heading">
          <p>Visitors by Country</p>
          <p>last week</p>
        </div>
        <div class="chart">
          <PlotlyPie />
        </div>
      </div>
      <div class="card-div chart-two">
        <div class="heading">
          <p>Total Visitors</p>
          <p>this year</p>
        </div>
        <div class="chart">
          <PlotlyLine />
        </div>
      </div>
    </div>
    <div class="card messages">
      <div class="card-div table-one">
        <div class="heading">
          <p>Lates orders</p>
          <p>3 Orders</p>
        </div>
        <div class="chart">
          <CustomersTable />
        </div>
      </div>
      <div class="card-div table-two">
        <div class="heading">
          <p>Users</p>
          <p>last 24 hours</p>
        </div>
        <div class="chart">
          <UserTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import InteractiveChart from "@/components/charts/InteractiveChart.vue";
import PlotlyLine from "@/components/PlotlyLine.vue";
import PlotlyPie from "@/components/PlotlyPie.vue";
import MiniChart1 from "@/components/PlotlyMini1.vue";
import MiniChart2 from "@/components/PlotlyMini2.vue";
import MiniChart3 from "@/components/PlotlyMini3.vue";
import MiniChart4 from "@/components/PlotlyMini4.vue";
import CustomersTable from "@/components/CustomersTable.vue";
import UserTable from "@/components/UserTable.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    // InteractiveChart,
    PlotlyLine,
    PlotlyPie,
    MiniChart1,
    MiniChart2,
    MiniChart3,
    MiniChart4,
    CustomersTable,
    UserTable
  }
};
</script>

<style lang="scss" scoped>
.test-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  .test {
    background: white;
    width: 23%;
    height: 100px;
    display: flex;
    padding: 10px;
    .test-chart {
      width: 50%;
    }
    .test-text {
      padding-left: 20px;
      margin: auto 0;
    }
  }
}

.icons-list {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  .icon {
    background: white;
    width: 10%;
    height: 100px;
    text-align: center;
    transition: 0.3s ease;
    i {
      transform: scale(2);
      margin: 30px 0 10px;
    }
    &:hover {
      box-shadow: none;
      cursor: pointer;
    }
  }
}

.card {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  height: 400px;
  .card-div {
    height: 320px;
    .heading {
      display: flex;
      justify-content: space-between;
      p {
        padding: 10px 0;
        &:nth-child(1) {
          font-weight: bold;
        }
      }
    }
  }
  .chart {
    background: white;
    height: 100%;
    padding: 20px;
  }
  .chart-one {
    width: 39%;
  }
  .chart-two {
    width: 59%;
  }
  .table-one {
    width: 69%;
  }
  .table-two {
    width: 29%;
  }
}

.messages {
  .card-div {
    height: 200px;
  }
}

.test,
.icon,
.chart {
  // -webkit-box-shadow: 0px 0px 53px 2px rgba(0, 0, 0, 0.29);
  // -moz-box-shadow: 0px 0px 53px 2px rgba(0, 0, 0, 0.29);
  // box-shadow: 0px 0px 53px 2px rgba(0, 0, 0, 0.29);
  border-radius: 5px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 600px) {
  .test-div {
    flex-direction: column;
    margin-top: 80px;
    .test {
      margin: 10px 0;
      width: 100%;
    }
  }

  .icons-list {
    flex-wrap: wrap;
    .icon {
      margin: 10px 1px;
      width: 30%;
    }
  }

  .card {
    flex-direction: column;
    justify-content: center;
    height: 700px;
    .card-div,
    .chart-one,
    .chart-two {
      width: 100%;
      margin: 50px 1px;
    }
  }
}

@media only screen and (max-width: 800px) {
  .test-text {
    font-size: 0.8em;
  }
}
</style>
