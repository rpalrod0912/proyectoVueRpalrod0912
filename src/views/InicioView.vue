<template>
  <v-carousel
    height="400"
    hide-delimiter-background
    show-arrows-on-hover="hover"
    v-if="this.carga"
  >
    <v-carousel-item v-for="(elemento, i) in carrouselElem[0]" :key="i">
      <v-sheet :color="colores[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h4">{{ elemento.title }}</div>
          <v-img :src="elemento.image" />
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <div v-else>
    <h2>Cargando..</h2>
  </div>
</template>

<!--
<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slide }} Slide</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
-->
<script>
export default {
  /*eslint-disable*/
  //Ejemplo usando https://fakestoreapi.com/
  name: "InicioView",
  created() {
    this.getHomeProducts(5);
  },
  data() {
    return {
      colores: ["blue", "black", "red", "deep-purple accent-4", "orange"],
      carrouselElem: [],
      carga: false,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  methods: {
    async getHomeProducts(limit) {
      debugger;
      const data = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      ).then((res) => res.json());
      console.log(data);
      this.carrouselElem.push(data);
      console.log(this.carrouselElem);
      console.log(this.carga);

      this.carga = true;
    },
  },
};
</script>
<style></style>
