<template>
  <div>
    <div>
      <UpdateRecordTemplate />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contas } from '@/store'

export default Vue.extend({
  layout: 'safeWallet',
  async asyncData({ route }) {
    await contas.singleConta({ id: route.params.id as any })
  }
  // computed: {
  //   $singleConta() {
  //     return contas.$single
  //   }
  // }
})
</script>

<style scoped></style>
