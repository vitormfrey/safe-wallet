<template>
  <input class="input" @input="updateRecord" />
</template>

<script lang="ts">
import Vue from 'vue'
import { contas } from '@/store'
export default Vue.extend({
  methods: {
    updateRecord(e: any) {
      contas.updateRegister(e.target.value)
    }
  }
})
</script>

<style scoped>
.input {
  border: 1px solid #006cd0;
  padding: 5px 15px;
  background: rgba(196, 196, 196, 0.28);
  height: 40px;
  /* Verificar com o Grupo se vai querer esse estilo */
  /* filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.25)); */
}
.input:focus {
  outline: none;
  box-shadow: 0px 0px 3px 1px rgba(55, 134, 208, 0.24);
}
.input::placeholder {
  color: rgba(0, 0, 0, 0.55);
  font-size: 1rem;
}
</style>
