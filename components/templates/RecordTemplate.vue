<template>
  <div class="container">
    <TitlePageApp text="Criar Registro" />
    <FormRecord />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.container {
  height: 100%;
  display: grid;
  grid-template-columns: 350px;
  justify-content: center;
  align-content: center;
  grid-gap: 1rem;
  margin-top: 20px;
}
</style>
