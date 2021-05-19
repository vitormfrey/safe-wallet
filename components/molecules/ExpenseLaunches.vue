<template>
  <div class="container">
    <div class="container-card">
      <h4>Despesas</h4>
      <NuxtLink
        v-for="conta in expenseData"
        :key="conta.id"
        :to="`/updateRecord/${conta.id}`"
      >
        <DataRealeases
          :categoria="conta.categoria"
          :name="conta.name"
          :tipo="conta.tipo"
          :valor="conta.valor"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contas } from '@/store'
import { Conta } from '@/models'

export default Vue.extend({
  computed: {
    expenseData(): Conta[] {
      // Lógica pra retornar somente despesas
      // Deve ser implementado no VueX
      return contas.$all.filter((dado) => dado.tipo === true)
    }
  },
  methods: {
    contas(conta: Object) {
      console.log(conta)
    }
  }
})
</script>

<style scoped>
.container {
  height: 100%;
  display: grid;
  grid-template-columns: 400px;
  justify-content: center;
  align-content: center;
  grid-gap: 1rem;
}

.container-card {
  /* GRID */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  /* ESTILIZAÇÕES  */
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5f5;
  height: 300px;
  overflow: auto;
}

.container-card::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}
.container-card::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #555;
}

.container-card h4 {
  color: #636363;
  font-size: 1rem;
}

a {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}
a:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}
</style>
