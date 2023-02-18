<template>
  <v-app>
    <v-main>
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
import { inject } from "vue";
import { auth } from "@/firebaseConfig/firebaseConfig.js";
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
