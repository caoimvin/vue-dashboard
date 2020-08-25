<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td>
            <img src="@/assets/user1.jpg" alt />
          </td>
          <td>
            <p>John Doe</p>
            <p>Developer</p>
          </td>
          <td>
            <span>Online</span>
          </td>
        </tr>
        <tr>
          <td>
            <img src="@/assets/user2.jpg" alt />
          </td>
          <td>
            <p>Billy Grant</p>
            <p>Designer</p>
          </td>
          <td>
            <span>Online</span>
          </td>
        </tr>
        <tr>
          <td>
            <img src="@/assets/user3.jpg" alt />
          </td>
          <td>
            <p>Gerald Paul</p>
            <p>Product Manager</p>
          </td>
          <td>
            <span>Online</span>
          </td>
        </tr>
        <tr>
          <td>
            <img src="@/assets/user4.jpg" alt />
          </td>
          <td>
            <p>Lucy Brown</p>
            <p>Manager</p>
          </td>
          <td>
            <span>Online</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
}
tr:nth-child(1) {
  width: 80px;
}
img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  align-content: center;
}
td p:nth-child(2) {
  color: grey;
}
</style>
