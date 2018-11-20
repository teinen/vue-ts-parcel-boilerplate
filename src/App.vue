<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>
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
</style>
