<template>
  <div class="container">
    <div class="container-card">
      <h4>Receitas</h4>
      <DataRealeases
        v-for="conta in expenseData"
        :key="conta.id"
        :categoria="conta.categoria"
        :name="conta.name"
        :tipo="conta.tipo"
        :valor="conta.valor"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface Conta {
  id: Number
  name: String
  categoria: String
  valor: Number
  tipo: Boolean
}

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
        },
        {
          id: 5,
          name: 'CPFL',
          categoria: 'Energia',
          valor: 1350,
          tipo: true
        },
        {
          id: 6,
          name: 'CPFL',
          categoria: 'Energia',
          valor: 1350,
          tipo: true
        },
        {
          id: 7,
          name: 'CPFL',
          categoria: 'Energia',
          valor: 1350,
          tipo: true
        },
        {
          id: 8,
          name: 'CPFL',
          categoria: 'Energia',
          valor: 1350,
          tipo: true
        },
        {
          id: 9,
          name: 'CPFL',
          categoria: 'Energia',
          valor: 1350,
          tipo: true
        },
        {
          id: 10,
          name: 'CPFL',
          categoria: 'Energia',
          valor: 1350,
          tipo: true
        }
      ] as Conta[]
    }
  },
  computed: {
    expenseData(): Conta[] {
      // Lógica pra retornar somente despesas
      // Deve ser implementado no VueX
      return this.dados.filter((dado) => dado.tipo === false)
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
</style>
