<template>
  <div>
    <nav>
      <div class="logo">
        <p>Vue Dashbaord</p>
        <div class="hamburger" @click="test">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
      <div class="nav-seccond" @click="isActive = !isActive">
        <!-- <img src="../assets/topnav_seccond.svg" @click="isActive = !isActive" /> -->
        <div class="dot1"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
      </div>
      <ul class="nav-links" :class="{ open: isActive }">
        <li>
          <a href="#" class="demo-link">Solutions</a>
        </li>
        <li>
          <a href="#" class="demo-link">Products</a>
        </li>
        <li>
          <a href="#" class="demo-link">Services</a>
        </li>
        <li>
          <router-link to="login">
            <button class="login-button">Login</button>
          </router-link>
        </li>
        <li>
          <button class="join-button">Join</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return { isActive: false };
  },
  methods: {
    test() {
      this.$emit("toggleSideNav");
    }
  },
  mounted() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.add("toggle");
    const dots = document.querySelector(".nav-seccond");
    // const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    dots.addEventListener("click", () => {
      //Animate Links
      //   navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });
      dots.classList.toggle("dots-toggle");
    });
    //Hamburger Animation
    hamburger.addEventListener("click", () =>
      hamburger.classList.toggle("toggle")
    );
  }
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  color: #2c3e50;
  font-family: sans-serif;
  letter-spacing: 1px;
  font-weight: 300;
}
body {
  overflow-x: hidden;
  background: black;
}
nav {
  height: 4rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
}

/*Styling logo*/
.logo {
  padding: 1vh 1vw;
  text-align: center;
  display: flex;
}
.logo p {
  width: 50%;
}

/*Styling Links*/
.nav-links {
  display: flex;
  list-style: none;
  width: 30vw;
  padding: 0 0.7vw;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
}
.nav-links li .demo-link {
  text-decoration: none;
  margin: 0 0.7vw;
}
.nav-links li .demo-link:hover {
  color: #2c3e50;
}
.nav-links li {
  position: relative;
}
.nav-links li .demo-link::before {
  content: "";
  display: block;
  height: 3px;
  width: 0%;
  background-color: #2c3e50;
  position: absolute;
  transition: all ease-in-out 250ms;
  margin: 0 0 0 10%;
}
.nav-links li .demo-link:hover::before {
  width: 80%;
}

/*Styling Buttons*/
.login-button {
  background-color: transparent;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  padding: 0.6rem 0.8rem;
  margin-left: 2vw;
  font-size: 1rem;
  cursor: pointer;
}
.login-button:hover {
  color: #131418;
  background-color: #f2f5f7;
  border: 1.5px solid #f2f5f7;
  transition: all ease-in-out 350ms;
}
.join-button {
  color: #131418;
  background-color: #f2f5f7;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
}
.join-button:hover {
  /* color: #f2f5f7; */
  background-color: transparent;
  border: 1.5px solid #f2f5f7;
  transition: all ease-in-out 350ms;
}

/*Styling Hamburger Icon*/
.hamburger div {
  width: 30px;
  height: 3px;
  background: #cacacc;
  margin: 5px;
  transition: all 0.3s ease;
}
.hamburger {
  display: block;
  cursor: pointer;
  margin: auto 10px;
}
.nav-seccond {
  display: none;
}
.nav-seccond div {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #f2f5f7;
  margin: 5px;
  transition: all 0.3s ease-out;
}

/*Stying for small screens*/
@media screen and (max-width: 800px) {
  .nav-seccond {
    display: block;
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 2;
  }
  nav {
    position: fixed;
    z-index: 3;
  }
  .hamburger {
    display: block;
    /* position: absolute;
    cursor: pointer;
    left: 50%;
    top: 50%;
    transform: translate(-5%, -50%); */
    z-index: 0;
    transition: all 0.7s ease;
  }
  .nav-links {
    position: fixed;
    background: #131418;
    width: 100%;
    flex-direction: column;
    clip-path: circle(50px at 90% -20%);
    -webkit-clip-path: circle(50px at 90% -10%);
    transition: all 0.5s ease-out;
    pointer-events: none;
    height: 100%;
  }
  .nav-links.open {
    clip-path: circle(1000px at 90% -10%);
    -webkit-clip-path: circle(1000px at 90% -10%);
    pointer-events: all;
    /* height: 100%; */
    background: #ffffff;
  }
  .nav-links li {
    opacity: 0;
  }
  .nav-links .demo-link {
    color: #f2f5f7;
  }
  .nav-links li:nth-child(1) {
    transition: all 0.5s ease 0.2s;
  }
  .nav-links li:nth-child(2) {
    transition: all 0.5s ease 0.4s;
  }
  .nav-links li:nth-child(3) {
    transition: all 0.5s ease 0.6s;
  }
  .nav-links li:nth-child(4) {
    transition: all 0.5s ease 0.7s;
  }
  .nav-links li:nth-child(5) {
    transition: all 0.5s ease 0.8s;
  }
  .nav-links li:nth-child(6) {
    transition: all 0.5s ease 0.9s;
    margin: 0;
  }
  .nav-links li:nth-child(7) {
    transition: all 0.5s ease 1s;
    margin: 0;
  }
  li.fade {
    opacity: 1;
  }
}
/*Animating Hamburger Icon on Click*/
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
  transition: all 0.1s ease;
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

.dots-toggle .dot1 {
  transform: translate(0, 10px);
}
.dots-toggle .dot2 {
  transform: translate(-10px, 0);
}
.dots-toggle .dot3 {
  transform: translate(10px, -10px);
}
</style>
