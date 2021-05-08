<template>
  <div class="container">
    <ExpenseLaunches />
    <RevenueLaunches />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.container {
  height: 100%;
  display: grid;
  grid-template-columns: 400px;
  justify-content: center;
  align-content: center;
  grid-gap: 2.5rem;
  margin-top: 40px;
}
</style>
