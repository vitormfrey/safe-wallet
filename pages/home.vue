<template>
  <div class="saldo-container">
    <HomeTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contas } from '@/store'
export default Vue.extend({
  layout: 'safeWallet',
  async asyncData() {
    await contas.index()
  }
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
