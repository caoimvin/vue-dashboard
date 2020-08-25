<template>
  <div id="app">
    <div class="viewside">
      <TopNav class="topnav" @toggleSideNav="test" />
      <div id="view">
        <SideNav
          id="side-nav"
          @toggleSideNav="test"
          :class="{ test: isNavOpen }"
        />
        <!-- <button @click="test2()">ssdjfhjh</button> -->
        <transition name="fade-view" mode="out-in">
          <router-view id="router-view" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";

export default {
  data() {
    return { isNavOpen: false };
  },
  components: {
    TopNav,
    SideNav,
  },
  // computed() {
  //   return { isNavOpen: this.$store.state.test.isNavOpen };
  // },
  methods: {
    test2() {
      this.$store.commit("toggleSideNav", true);
    },
    test() {
      this.isNavOpen = !this.isNavOpen;
      // console.log(this.isNavOpen);
    },
  },
  mounted() {
    // console.log(this.isNavOpen);
  },
  // computed: {
  //   isNavOpen: function() {
  //     return { isNavOpen: this.$store.state.test.isNavOpen };
  //   }
  // }
};
</script>

<style lang="css">
.fade-view-enter-active,
.fade-view-leave-active {
  transition: opacity 0.5s;
}
.fade-view-enter, .fade-view-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
* {
  border: 0;
  padding: 0;
  margin: 0;
}
.collapsed {
  transform: translateX(-300px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
  height: 100vh;
}
.viewside {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.topnav {
  z-index: 5;
}
#side-nav {
  height: 100vh;
  transition: 0.3s ease;
  width: 250px;
  opacity: 1;
}
#side-nav.test {
  transform: translateX(-300px);
  width: 0;
  opacity: 0;
}

#view {
  /* margin-top: 4rem; */
  display: flex;
}
#router-view {
  margin-top: 50px;
  width: 100%;
  padding: 20px;
}

body {
  background: #f3f4f8;
}

@media only screen and (max-width: 600px) {
  #side-nav {
    position: absolute;
  }
  #router-view {
    margin-top: 0;
  }
}
</style>
