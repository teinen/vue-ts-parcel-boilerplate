<template>
  <HelloComponent framework="Vue.js" altjs="TypeScript" bundler="Parcel" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hello from "~/src/components/Hello.vue";

@Component({
  components: {
    HelloComponent: Hello
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
