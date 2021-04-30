<template>
  <div>
    <p>Saldo em conta</p>
    <WalletValue />
    <div class="average">
      <p>Receitas</p>
      <WalletValue
        :valor="receita.quantia"
        :class="[{ expense: receita.tipo }, revenue]"
      />
      <p>Despesas</p>
      <WalletValue
        :valor="despesa.quantia"
        :class="[{ revenue: despesa.tipo }, expense]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      despesa: {
        quantia: 1234,
        tipo: true
      },
      receita: {
        quantia: 5600,
        tipo: false
      },
      revenue: 'revenue',
      expense: 'expense'
    }
  }
})
</script>

<style scoped>
p {
  text-align: center;
}
.average {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr;
}
.average .WalletValue {
  font-size: 15px;
}
.revenue {
  color: green;
}
.expense {
  color: red;
}
</style>
