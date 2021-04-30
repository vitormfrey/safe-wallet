<template>
  <div class="container">
    <div class="balance">
      <p>Saldo em conta</p>
      <WalletValue />
    </div>

    <div class="balance-text">
      <p>Receitas</p>
      <p>Despesas</p>
    </div>

    <div class="balance-value">
      <span class="cicle">
        <font-awesome-icon icon="arrow-circle-up" style="color: green" />
      </span>
      <WalletValue
        :valor="receita.quantia"
        :class="[{ expense: receita.tipo }, revenue]"
      />

      <span class="cicle">
        <font-awesome-icon icon="arrow-circle-down" style="color: red" />
      </span>
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
.container {
  /* Definindo Grid */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 30px 30px;
  grid-auto-flow: row;
  grid-template-areas:
    'balance balance balance'
    'text text text'
    'value value value';
  padding: 1.5rem;

  /* Ajustando Estilo */
  border-radius: 10px;
  box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
}
.balance {
  display: grid;
  grid-area: balance;
  justify-content: center;
}
.balance-text,
.balance-value {
  display: grid;
  grid-auto-flow: column;
}
.balance-text {
  text-align: center;
  grid-area: text;
}

.balance-value {
  grid-area: value;
  justify-content: baseline;
}
.balance-value .WalletValue {
  font-size: 15px;
}
.cicle {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  font-size: 20px;
}

.revenue {
  color: green;
}
.expense {
  color: red;
}
</style>
