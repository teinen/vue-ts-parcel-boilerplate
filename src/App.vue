<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>

    <footer>
      © 2018 Akira Kanno
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

nav {
  font-size: 1em;
  margin-top: 20px;
  text-align: center;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1 {
  text-align: center;
  color: #2c3e50;
}

footer {
  align-items: center;
  border-top: 1px solid #2c3e50;
  bottom: 0;
  display: flex;
  height: 60px;
  left: 0;
  justify-content: center;
  position: fixed;
  right: 0;
}
</style>
