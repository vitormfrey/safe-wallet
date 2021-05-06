<template>
  <div>
    <form class="form">
      <label for=""> Descrição</label>
      <InputApp />
      <label for=""> Valor</label>
      <InputApp />
      <label for=""> Categoria</label>
      <InputApp />
      <Button text="SALVAR" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      data: [
        { id: 1, mes: 'Jan' },
        { id: 2, mes: 'Fev' }
      ]
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
}
.button {
  height: 45px;
}
</style>
