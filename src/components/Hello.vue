<template>
  <h1>Hello, {{ framework }} + {{ superset }} + {{ bundler }}</h1>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Hello extends Vue {
  /** data */
  framework: string = 'Vue.js'
  superset: string = 'TypeScript'
  bundler: string = 'Parcel'
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: green;
}
</style>
