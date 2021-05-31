<template>
  <div>
    <div v-if="saldo()">
      <Modal />
    </div>
    <HomeBalance />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      saldoConta: null
    }
  },
  methods: {
    saldo(): Boolean {
      if (this.saldoConta != null) {
        return false
      }
      return true
    }
  }
})
</script>

<style scoped></style>
