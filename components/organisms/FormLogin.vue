<template>
  <div>
    <form class="form">
      <Input type="email" v-model="loginUser.email" placeholder="E-mail" />
      <Input type="password" v-model="loginUser.password" placeholder="Senha" />
      <Button text="Logar" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface User {
  email: string
  password: string
}
export default Vue.extend({
  data() {
    return {
      loginUser: {} as User
    }
  }
})
</script>

<style scoped>
.form {
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  align-content: center;
}
.form .button {
  width: 80px;
}
</style>
