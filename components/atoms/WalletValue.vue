<template>
  <p class="WalletValue">
    {{ convertValor | numeroPreco }}
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
    valor: {
      type: [String, Number],
      default: '0'
    }
  },
  computed: {
    convertValor() {
      const valor: any = this.valor
      return parseInt(valor)
    }
  }
})
</script>

<style scoped>
p {
  margin: 0px;
  padding: 0px;
  font-size: 2.25rem;
  color: #444;
}
</style>
