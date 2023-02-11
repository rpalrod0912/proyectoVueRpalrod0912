<template>
  <v-app>
    <v-main>
      <NavBar></NavBar>
      <!--Importante marcar esto para que el router cargue los componentes de nuevo cuando usesmos su metodos $route-->
      <router-view :key="$route.fullPath" />
    </v-main>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
/*eslint-disable*/

export default {
  name: "App",

  components: {
    NavBar,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.index {
  margin: 0%;
  z-index: 999;
  color: white;
}
</style>

<!--

  <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

-->
