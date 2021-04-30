<template>
  <button class="button">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String, required: true, default: 'Login' }
  }
})
</script>

<style scoped>
.button {
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: #126098;
  /* Texto do botão */
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;

  transition: all 0.5s ease;
}
.button:hover {
  background-color: #3977a3;
}
</style>
