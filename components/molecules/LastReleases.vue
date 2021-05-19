<template>
  <div class="lastReleases">
    <h4>Últimos lançamentos</h4>
    <NuxtLink
      v-for="conta in limitData"
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
</template>

<script lang="ts">
import Vue from 'vue'
import { contas } from '@/store'
import { Conta } from '@/models'

export default Vue.extend({
  computed: {
    limitData(): Conta[] {
      return contas.$all.slice(0, 3)
    }
  },
  methods: {
    exibir(v: Object) {
      console.log(v)
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

a {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}
a:visited {
  text-decoration: inherit;
  color: inherit;
}
</style>
