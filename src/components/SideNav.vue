<template>
  <div>
    <div id="nav">
      <!-- <router-link to="/">#LOGO#</router-link> -->
      <div class="nav-links">
        <router-link to="/">
          <i class="fa fa-pie-chart"></i>&nbsp;Dashboard
        </router-link>
        <!-- <router-link to="/about">About</router-link> -->
        <!-- <router-link to="/small-boxes">Small Boxes</router-link> -->
        <!-- <router-link to="/large-boxes">Large Boxes</router-link> -->
        <router-link to="/chat-bot">
          <i class="fa fa-comments"></i>&nbsp;Chat Bot
        </router-link>
        <router-link to="/login">
          <i class="fa fa-sign-in"></i>&nbsp;Login
        </router-link>
        <a href="#">
          <i class="fa fa-user-circle"></i>&nbsp;Register
        </a>
        <a href="#">
          <i class="fa fa-book"></i>&nbsp;Ressources
        </a>
        <a href="#">
          <i class="fa fa-user"></i>&nbsp;People
        </a>
      </div>
    </div>
    <div class="backdrop" @click="test"></div>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$emit("toggleSideNav");
      document.querySelector(".hamburger").classList.remove("toggle");
    }
  },
  mounted() {
    // function animation() {
    //   document.querySelector(".hamburger").classList.remove("toggle");
    // }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 15px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  // width: 200px;
  height: 100%;
  z-index: 1;
  transition: 0.3s ease;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 200px;

  .nav-links {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 250px;
    a {
      width: 50%;
      margin: 10px 0;
      padding: 20px;
      text-decoration: none;
      // border: 1px solid black;
      border-radius: 5px;
      &.router-link-exact-active {
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }

  a {
    font-weight: bold;
    color: #a2a2a2;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}

.backdrop {
  display: none;
}

@media only screen and (max-width: 600px) {
  #nav {
    position: fixed;
    width: 200px;
    // top: 49px;
    // display: none;
    z-index: 2;
  }
  .backdrop {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0;
    z-index: 1;
  }
}
</style>
