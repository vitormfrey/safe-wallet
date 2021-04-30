<template>
  <div class="container">
    <Date />
    <div class="bloco"><Balance /></div>
    <LastReleases />
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
}

.Date {
  margin: 40px 0px 0px;
}
</style>
