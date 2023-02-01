<template>
  <v-app>
    <v-main>
      <NavBar></NavBar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/Productos">Productos</router-link>
      <router-view />
      <AppFooter></AppFooter>
    </v-main>
  </v-app>
</template>

<!--
   <v-app>
    <v-main>
      <NavBar class="index"></NavBar>
      <DashBoard></DashBoard>
      <AppFooter></AppFooter>
    </v-main>
  </v-app>
-->

<script>
//import HelloWorld from "./components/HelloWorld.vue";
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
  z-index: 9999;
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
