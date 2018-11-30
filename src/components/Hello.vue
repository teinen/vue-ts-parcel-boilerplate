<template>
  <h1>Hello, {{ framework }} + {{ altjs }} + {{ bundler }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Hello extends Vue {
  /** data */
  @Prop() private framework!: string;
  @Prop() private altjs!: string;
  @Prop() private bundler!: string;
}
</script>

<style lang="scss" scoped></style>
