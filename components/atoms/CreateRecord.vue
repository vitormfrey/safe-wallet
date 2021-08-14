<template>
  <div class="container-recordButton">
    <NuxtLink :to="to" class="recordButton"
      ><font-awesome-icon icon="plus" style="color: #fff" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: { type: String, required: true, default: '/record' }
  }
})
</script>

<style scoped>
.container-recordButton {
  display: grid;
  justify-content: center;
}
.recordButton {
  width: 60px;
  height: 60px;
  background-color: #126098;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
}
</style>
