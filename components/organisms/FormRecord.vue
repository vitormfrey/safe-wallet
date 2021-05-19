<template>
  <div>
    <form class="form" @submit.prevent="enviar">
      <label for=""> Descrição</label>
      <InputApp v-model="recordForm.description" />

      <label for=""> Valor</label>
      <InputApp v-model="recordForm.value" />

      <label for=""> Categoria</label>
      <InputApp v-model="recordForm.category" />

      <label for=""> Data</label>
      <InputApp v-model="recordForm.day" type="date" />

      <!-- <div class="select-container">
        <label for="">Dia</label>
        <select v-model="recordForm.day" class="select">
          <option></option>
        </select>

        <label for="">Mês</label>
        <select v-model="recordForm.month" class="select">
          <option></option>
        </select>

        <label for="">Ano</label>
        <select v-model="recordForm.year" class="select">
          <option></option>
        </select>
      </div> -->

      <div class="radio-container">
        <div class="radio">
          <input v-model="recordForm.type" type="radio" :value="true" />
          <label for="">Despesa</label>
        </div>

        <div class="radio">
          <input v-model="recordForm.type" type="radio" :value="false" />
          <label for="">Receita</label>
        </div>
      </div>

      <Button text="SALVAR" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface RecordForm {
  description: String
  value: Number
  category: String
  day: Number
  month: Number
  year: Number
  type: boolean
}
export default Vue.extend({
  data() {
    return {
      recordForm: {} as RecordForm,
      month: [
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
      ],
      day: Number,
      year: Number
    }
  },
  methods: {
    enviar() {
      console.log(this.recordForm)
    }
  }
})
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  justify-content: center;
  margin-top: 20px;
}
.button {
  height: 45px;
}
/* SELECT ESTILO */
.select-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 20px 1fr;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
}
.select {
  border: 1px solid #006cd0;
  padding: 5px 15px;
  background: rgba(196, 196, 196, 0.28);
  height: 40px;
  /* Verificar com o Grupo se vai querer esse estilo */
  /* filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.25)); */
}
.select:focus {
  outline: none;
  border: 1px solid #006cd0;
}

/* RADIO ESTILO */
.radio-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  justify-items: center;
  grid-auto-rows: 90px;
}
.radio {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  justify-items: end;
  align-items: center;
  grid-gap: 0.5rem;
}
</style>
