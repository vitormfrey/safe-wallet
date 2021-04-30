<template>
  <div class="saldo-container">
    <HomeTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'safeWallet'
})
</script>

<style scoped>
#app {
  height: 100%;
}

.saldo-container {
  height: 100%;
}
</style>
