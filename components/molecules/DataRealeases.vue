<template>
  <div class="card">
    <p class="category">{{ categoria }}</p>
    <p class="description">Descrição: {{ name }}</p>
    <div class="dot" :class="tipo ? 'expense' : 'revenue'"></div>
    <WalletValue :valor="valor" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    categoria: { type: String, required: true },
    name: { type: String, required: true },
    valor: { type: Number, required: true },
    tipo: { type: Boolean, required: true }
  },
  data() {
    return {
      revenue: 'revenue',
      expense: 'expense'
    }
  },
  computed: {}
})
</script>

<style scoped>
/* CARD */
.card {
  /* Grid */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 25px);
  grid-auto-flow: column;
  max-height: 80px;
  padding: 1rem;
  /* Estilização */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
}
.card:hover {
  background-color: #f5f5f5f5;
  cursor: pointer;
}

.category,
.description {
  justify-self: start;
}
.WalletValue,
.dot {
  justify-self: end;
}

/* Estilizações adicionais */
.WalletValue {
  font-size: 1.3rem;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.revenue {
  background-color: green;
}
.expense {
  background-color: red;
}
</style>
