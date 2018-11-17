<template>
  <div>
    <HelloComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hello from '~/src/components/Hello.vue'

export default Vue.extend({
  components: {
    HelloComponent: Hello
  }
});
</script>

<style>

</style>
