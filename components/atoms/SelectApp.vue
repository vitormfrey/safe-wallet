<template>
  <select name="select">
    <option value="value1" disabled>Selecione</option>
    <option :value="valor">{{ opcao }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    valor: { type: String, required: true },
    opcao: { type: String, required: true }
  }
})
</script>

<style scoped></style>
