<template>
  <div class="container">
    <div class="header-page">
      <BurgerButton
        :active="menuActive"
        @toggle-menu="menuActive = !menuActive"
      />
      <h2>test</h2>
    </div>
    <Sidebar v-show="menuActive" @toggle-menu="menuActive = !menuActive">
      <ul class="sidebar-panel-nav">
        <li><NuxtLink to="/home">Home</NuxtLink></li>
        <li><NuxtLink to="/login">Carteira</NuxtLink></li>
        <li><NuxtLink to="/releases">Despesas e Receitas</NuxtLink></li>
        <li><NuxtLink to="/test">Investimentos Seguros</NuxtLink></li>
      </ul>
    </Sidebar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      menuActive: false,
      titlePage: ''
    }
  }
})
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1rem;
  justify-content: start;
  grid-auto-flow: column;
  padding: 1rem;
  border-radius: 0px 0px 5px 5px;
  background-color: #006cd0;
}

.header-page {
  display: grid;
  grid-template-columns: 50px;
  grid-auto-flow: column;
  justify-items: space-between;
}

html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: 'Lato';
  height: 100%;
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: 'Lato';
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
  margin-bottom: 30px;
}
</style>
