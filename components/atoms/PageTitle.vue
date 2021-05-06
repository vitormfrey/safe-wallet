<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String, required: true }
  }
})
</script>

<style scoped>
.title {
  margin: 0;
  padding: 0;
  font-size: 2.25rem; /*36px*/
  text-align: center;
}
</style>
