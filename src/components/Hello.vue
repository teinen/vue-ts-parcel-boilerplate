<template>
  <h1>Hello, {{ framework }} + {{ superset }} + {{ bundler }}</h1>
</template>

<script>
export default {
  data() {
    return {
      framework: 'Vue.js',
      superset: 'TypeScript',
      bundler: 'Parcel'
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: green;
}
</style>
