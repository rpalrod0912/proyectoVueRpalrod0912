<template>
  <v-app>
    <v-main>
      <NavBar class="index"></NavBar>
      <DashBoard></DashBoard>
      <AppFooter></AppFooter>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import DashBoard from "./components/DashBoard.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",

  components: {
    NavBar,
    DashBoard,
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
