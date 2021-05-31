<template>
  <div class="modal">
    <div class="modal-content">
      <p>Cadastre sua carteira clicando a baixo</p>
      <NuxtLink to="/record">
        <Button text="Cadastro" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  justify-items: center;
  background-color: #fefefe;
  margin: 50% auto;
  padding: 20px;
  border-radius: 15px;
  width: 250px;
}
.modal-content > p {
  text-align: center;
}
</style>
