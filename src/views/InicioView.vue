<template>
  <NavBar></NavBar>
  <v-card elevation="20" class="mx-auto" rounded width="80%">
    <v-carousel
      height="400"
      hide-delimiter-background
      show-arrows-on-hover="hover"
      v-if="this.carga"
    >
      <v-carousel-item v-for="(elemento, i) in carrouselElem" :key="i">
        <v-sheet :color="colores[i]" height="100%">
          <div class="cartaCarrusel">
            <div class="text-h4 tituloProducto">
              {{ carrouselElem[i].nombre }}
            </div>
            <img class="imgProducto" :src="carrouselElem[i].imagen" />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div v-else>
      <h2>Cargando..</h2>
    </div>
  </v-card>
  <v-container fluid id="features" class="mt-2">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="space-around">
          <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> -->
          <v-col
            cols="12"
            sm="4"
            class="text-center"
            v-for="(feature, i) in features"
            :key="i"
          >
            <v-hover v-slot:default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'blue' : undefined"
                height="300px"
              >
                <v-img
                  :src="feature.img"
                  width="200px"
                  height="200px"
                  class="d-block ml-auto mr-auto"
                ></v-img>

                <h1 class="font-weight-regular">{{ feature.title }}</h1>
                <h4 class="font-weight-regular subtitle-1">
                  {{ feature.text }}
                </h4>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  /*eslint-disable*/
  //Ejemplo usando https://fakestoreapi.com/
  name: "InicioView",
  created() {
    this.getHomeProducts();
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
      features: [
        {
          img: require("@/assets/img/paquete.png"),
          title: "Envío Rápido",
          text: "Ofrecemos envío en 24 horas de forma totalmente gratuita en envios de más de 10€.",
        },
        {
          img: require("@/assets/img/nuevo.png"),
          title: "Productos Nuevo",
          text: "Tenemos stock nuevo cada semana",
        },
        {
          img: require("@/assets/img/oferta.png"),
          title: "Ofertas constante",
          text: "Todos los días disponemos de ofertas nuevas para satisfacer a nuestros usuarios",
        },
      ],
    };
  },
  methods: {
    async getHomeProducts() {
      let numberId = 0;
      debugger;
      const data = await fetch(`http://localhost:3003/v1/api/productos/`).then(
        (res) => res.json()
      );
      while (this.carrouselElem.length < 5) {
        this.carrouselElem.push(data[numberId]);
        numberId += 1;
      }
      console.log(data);
      console.log(this.carrouselElem);
      console.log(this.carga);
      console.log(this.carrouselElem[0].imagen);
      this.carga = true;
    },
  },
  components: { NavBar },
};
</script>
<style>
.cartaCarrusel {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.imgProducto {
  margin-top: 1.8rem;
  max-height: 30vh;
}
.tituloProducto {
  margin-top: 1.6rem;
}
</style>
