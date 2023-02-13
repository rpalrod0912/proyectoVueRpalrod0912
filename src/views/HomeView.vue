<template>
  <NavBar></NavBar>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <div
    class="d-flex justify-space-around align-center flex-column flex-md-row fill-height"
  >
    <v-btn size="x-large" color="success"> Extra large Button </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: { NavBar },
};
</script>
