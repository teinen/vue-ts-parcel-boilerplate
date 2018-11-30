<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  /** data */
  message: string = "This is About page.";
}
</script>

<style lang="scss" scoped></style>
