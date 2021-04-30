<template>
  <input
    class="input"
    :type="types"
    :placeholder="placeholder"
    :value="data"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    types: { type: String, required: false, default: 'text' },
    placeholder: { type: String, required: true },
    data: { type: [Number, String], default: null }
  }
})
</script>

<style scoped>
.input {
  border: solid 1px rgba(55, 135, 208, 0.53);
  border-radius: 10px;
  padding: 5px 15px;
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
