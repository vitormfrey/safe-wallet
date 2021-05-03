<template>
  <div class="container">
    <Date />
    <Balance />
    <LastReleases />
    <CreateRecord />
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
  grid-gap: 1rem;
}

.Date {
  margin: 40px 0px 0px;
}
</style>
