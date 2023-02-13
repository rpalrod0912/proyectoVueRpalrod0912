<template>
  <NavBar></NavBar>
  <v-container fluid>
    <v-card
      color="#3853D8"
      height="150px"
      tle
      flat
      class="d-flex align-center justify-center"
      dark
    >
      <v-row>
        <v-col cols="12" sm="12">
          <h2 class="text-center">RESULTADOS DE BÚSQUEDA</h2>
          <h3 class="text-center">
            Hemos encontrado:{{ this.prodFiltrados.length }} productos
          </h3>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(producto, index) in this.prodFiltrados"
          :key="index"
          class="pa-0"
        >
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              v-bind="props"
              height="300"
              class="d-flex flex-column align-center mb-3"
              text-align="center"
              variant="outlined"
            >
              <v-spacer></v-spacer>

              <v-btn v-if="producto.oferta" color="red" small dark
                >OFERTA:{{ producto.oferta }}%</v-btn
              >

              <v-img
                :src="producto.imagen"
                width="200"
                height="200"
                contain
              ></v-img>
              <v-card-text class="mt-n4">
                <strong :class="{ 'on-hover': hover }">{{
                  producto.nombre
                }}</strong>
              </v-card-text>
              <ProductsHover
                :isHovering="isHovering"
                :productData="producto"
              ></ProductsHover>
              <v-card-text class="mt-n4" style="padding: 0px">
                <strong
                  v-if="producto.oferta"
                  font-color="red"
                  class="colPrecioOfer"
                  >{{
                    this.aplicarDescuento(producto.precio, producto.oferta)
                  }}
                  €</strong
                >
                <strong v-else :class="{ 'on-hover': hover }"
                  >{{ producto.precio }} €</strong
                >
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
/*eslint-disable*/

import NavBar from "@/components/NavBar.vue";
import ProductsHover from "@/components/ProductsHover.vue";

export default {
  name: "BusquedasView",
  state: {},
  props: {
    datos: { type: Array, required: true },
  },
  data() {
    return {
      text: "",
      prodFiltrados: [],
    };
  },
  created() {
    this.prodFiltrados = JSON.parse(this.$route.query.prodFiltrados);
    console.log(this.prodFiltrados);
  },
  methods: {
    aplicarDescuento(precio, porcentaje) {
      debugger;
      const resultado = precio - (precio * porcentaje) / 100;
      return resultado;
    },
  },
  components: { ProductsHover, NavBar, NavBar },
};
</script>

<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutuppercase {
  text-decoration: none;
}

.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  widows: 100%;
}

.card1 {
  z-index: 10;
}

.card2 {
  z-index: 1;
}
</style>
