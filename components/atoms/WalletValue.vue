<template>
  <p class="WalletValue">
    {{ valor | numeroPreco }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  filters: {
    numeroPreco(valor: number) {
      return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    }
  },
  props: {
    valor: { type: Number, required: true, default: 0 }
  }
})
</script>

<style scoped>
p {
  font-size: 2.25rem;
  text-align: center;
  color: #444;
}
</style>
