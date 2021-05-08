<template>
  <div class="lastReleases">
    <h4>Últimos lançamentos</h4>
    <DataRealeases
      v-for="conta in limitData"
      :key="conta.id"
      :categoria="conta.categoria"
      :name="conta.name"
      :tipo="conta.tipo"
      :valor="conta.valor"
    />
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
        }
      ] as Conta[]
    }
  },
  computed: {
    limitData(): Conta[] {
      return this.dados.slice(0, 3)
    }
  }
})
</script>

<style scoped>
.lastReleases {
  /* GRID */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  /* ESTILIZAÇÕES  */
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5f5;
}
.lastReleases h4 {
  color: #636363;
  font-size: 1rem;
}
</style>
