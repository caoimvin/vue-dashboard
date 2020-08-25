<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Customer</td>
          <td>Status</td>
          <td>Date Added</td>
          <td>Total</td>
          <td></td>
        </tr>
        <tr>
          <td>354</td>
          <td>Daniel Gibson</td>
          <td>Review</td>
          <td>04-11-2018</td>
          <td>$420.40</td>
          <td><i class="fa fa-trash"></i></td>
        </tr>
        <tr>
          <td>735</td>
          <td>Connor Roberson</td>
          <td>Ongoing</td>
          <td>11-05-2018</td>
          <td>$120.10</td>
          <td><i class="fa fa-trash"></i></td>
        </tr>
        <tr>
          <td>123</td>
          <td>Seth Weber</td>
          <td>Completed</td>
          <td>08-07-2018</td>
          <td>$620.99</td>
          <td><i class="fa fa-trash"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
}
tr:nth-child(1) td {
  font-weight: bold;
}
td {
  padding: 10px;
}
tr:nth-child(even) {
  background: rgb(230, 230, 230);
}

@media only screen and (max-width: 600px) {
  td {
    font-size: 0.5em;
    padding: 10px 0;
  }
}

@media only screen and (max-width: 1400px) {
  td {
    font-size: 0.8em;
    padding: 10px 0;
  }
}
</style>
