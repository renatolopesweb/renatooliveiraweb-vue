<template>
  <nav>
    <div class="nav-bg"></div>
    <input id="navbar" type="checkbox" />
    <label for="navbar">
      <div class="menu">
        <span class="hamburger"></span>
      </div>
    </label>
    <ul>
      <li @click="toTop()">
        <router-link to="/">
          <i class="fas fa-running"></i>Home
        </router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/links">
          <i class="fas fa-link"></i>Links
        </router-link>
      </li>
      <li @click="toTop()">
        <router-link to="/curriculo">
          <i class="far fa-file-alt"></i>Currículo
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.querySelector("input").checked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
*,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
.menu {
  cursor: pointer;
  height: 50px;
  position: absolute;
  position: fixed;
  left: 25px;
  top: 25px;
  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 4;
}

.hamburger {
  position: relative;
  top: 25px;
  width: 75px;
  height: 1px;
  border-bottom: 1px solid var(--color-primary);
  display: block;
  transform-origin: center;
  transition: 0.5s ease-in-out;
}

.hamburger:after,
.hamburger:before {
  border-bottom: 1px solid var(--color-primary);
  content: "";
  display: block;
  transition: 0.5s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

.hamburger:before {
  top: -25px;
}

.hamburger:after {
  bottom: -25px;
  width: 50%;
}

@media (max-width: 500px) {
  .hamburger,
  .hamburger:before,
  .hamburger:after {
    border-bottom: 3px solid var(--color-primary);
  }
}

input {
  display: none;
}

input:checked ~ label .menu {
  background: var(--color-bg);
  box-shadow: 0 0 0 130vw var(--color-bg), 0 0 0 130vh var(--color-bg);
}

input:checked ~ label .hamburger {
  transform: rotate(45deg);
}

input:checked ~ label .hamburger:after {
  transform: rotate(90deg);
  bottom: 0;
  opacity: 0;
}

input:checked ~ label .hamburger:before {
  transform: rotate(90deg);
  top: 0;
}

input:checked ~ ul {
  opacity: 1;
  visibility: visible;
}

ul {
  position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  font-size: 45px;
  opacity: 0;
  transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
  visibility: hidden;
  z-index: 5;
}
a {
  color: var(--color-primary);
  display: block;
  font-family: "Poiret One", cursive;
  font-size: 1em;
  font-weight: lighter;
  margin-bottom: 1em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  i {
    font-size: 0.7em;
    width: 55px;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
}
.nav-bg{
  display: none;
}
@media (max-width: 550px) {
  .nav-bg{
    background: var(--color-bg);
    display: block;
    height: 100px;
    width: 100%;
    position: absolute;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
  a {
    font-size: 0.6em;
    font-weight: bolder;
    margin-bottom: 2em;
    i {
      font-size: 0.8em;
      width: 35px;
    }
  }
}
@media (max-width: 350px) {
  a{
    margin-bottom: 1.5em;
    i{
      width: 100%;
    }
  }
}
</style>