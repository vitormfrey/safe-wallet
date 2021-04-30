<template>
  <div>
    <div v-for="(conta, index) in dados" :key="conta.id">
      <template v-if="index + 1 < 4"
        ><p>{{ conta.categoria }}</p>
        <span class="dot"></span>
        <p>Descrição: {{ conta.name }}</p>
        <WalletValue :valor="conta.valor"
      /></template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      dados: [
        {
          id: 1,
          name: 'CPFL',
          categoria: 'Energia',
          valor: 1350,
          tipo: true
        },
        {
          id: 2,
          name: 'Sálario Aton',
          categoria: 'Sálario',
          valor: 1900,
          tipo: false
        },
        {
          id: 3,
          name: 'Saia Ana',
          categoria: 'Diversos',
          valor: 30,
          tipo: false
        },
        {
          id: 4,
          name: 'Vivo',
          categoria: 'Telefone',
          valor: 69,
          tipo: true
        }
      ]
    }
  }
})
</script>

<style scoped></style>
