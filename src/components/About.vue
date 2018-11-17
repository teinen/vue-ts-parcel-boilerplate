<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class About extends Vue {
  /** data */
  message: string = 'This is About page.'
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: blue;
}
</style>
