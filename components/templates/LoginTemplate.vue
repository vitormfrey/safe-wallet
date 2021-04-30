<template>
  <div class="container-login">
    <LoginLogo />
    <FormLogin />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface User {
  id: number
  email: string
  name: String
  number: number
}
export default Vue.extend({
  data() {
    return {
      form: {} as User
    }
  },
  watch: {
    form() {
      console.log(this.form)
    }
  },
  methods: {}
})
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .container-login {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-row: 1fr;
    grid-gap: 1rem;
  }
}
</style>
