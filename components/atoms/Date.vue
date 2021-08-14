<template>
  <div class="container-date Date">
    <h4>{{ meses[mes] }}</h4>
    <p>{{ data }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      mes: 0,
      data: '',
      meses: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ]
    }
  },
  created() {
    this.date()
  },
  methods: {
    date(): void {
      const data = new Date()
      const dia = data.getDate()
      const mes = data.getMonth()
      const ano = data.getFullYear()

      const strData = dia + '/' + (mes + 1) + '/' + ano

      // console.log(strData)
      this.mes = mes
      this.data = strData
    }
  }
})
</script>

<style scoped>
.container-date {
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
}
h4,
p {
  font-size: 1.5rem;
  color: #636363;
}
</style>
