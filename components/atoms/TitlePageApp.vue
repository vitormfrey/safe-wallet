<template>
  <div class="container">
    <h2>{{ text }}</h2>
    <hr class="line" />
  </div>
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
.container {
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  align-items: center;
}
.container h2 {
  color: #006cd0;
  font-size: 24px;
}
.line {
  border: none;
  border-bottom: 1px solid #006cd0;
}
</style>
