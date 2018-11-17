<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style lang="scss">
nav {
  font-size: 1.5em;
  margin-top: 20px;
  text-align: center;

  a {
    text-decoration: none;
  }
}
</style>
