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
          <h4 class="text-center">NUESTROS PRODUCTOS</h4>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="8" class="pr-0">
          <v-card height="250px" tile flat color="#3890D8">
            <v-row>
              <v-col cols="12" sm="4" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutuppercase" small tile>
                  ¡NUEVO!
                </v-btn>
                <h6 class="white--text mt-8">AIRFORCE 1</h6>
                <h3 class="white--text mt-5">Siente el poder en tus pies</h3>
              </v-col>
              <v-col cols="12" sm="8">
                <!--TODO Cambiar con api-->
                <v-img
                  src="https://i.ibb.co/D55f9QN/af1.png"
                  max-height="400"
                  max-width="400"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="pl-0">
          <v-card height="250px" tile flat color="#6857E1">
            <v-row>
              <v-col cols="12" sm="6" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutuppercase" small tile>
                  NUEVO
                </v-btn>
                <h6 class="white--text mt-8">Sudadera</h6>
                <h3 class="white--text mt-5">Nueva Colección 2021</h3>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  :src="'sudaderaBlack.png'"
                  max-height="400"
                  max-width="420"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <ProductsView
        v-bind:carga="this.carga"
        v-bind:imgArray="this.imgArray"
        :brands="this.brands"
        :tallas="this.tallas"
        :page="this.page"
      ></ProductsView>
    </v-card>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="numeroPaginas"
        @click="cargarPagina(page)"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
/*eslint-disable*/
import { API_URL } from "@/helpers/basicFunctions";

import LoginPage from "./LoginPage.vue";

import AppFooter from "@/components/AppFooter.vue";
import ProductsView from "../components/ProductsView.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "DashboardView",
  state: {},
  //Cuando la pagina se crea, realiza el metodo que llamemos en created
  created() {
    this.getPages();
    this.cargarPagina(1);
  },
  data: () => ({
    styles: [
      { title: "Estilo de Vida", count: "1" },
      { title: "Running", count: "23" },
      { title: "Entremamiento/Gimnasio", count: "45" },
      { title: "Balonces", count: "11" },
      { title: "Fútbol", count: "15" },
      { title: "Soccer", count: "32" },
      { title: "Beisbol", count: "8" },
      { title: "Golf", count: "15" },
      { title: "Skateboarding", count: "22" },
    ],
    brands: [
      { title: "AIR", state: true },
      { title: "TN", state: false },
      { title: "JORDAN", state: true },
      { title: "OTROS", state: false },
    ],
    tallas: [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "S",
      "M",
      "L",
    ],
    imgArray: [],
    carga: false,
    numeroPaginas: [],
    page: 1,
  }),
  methods: {
    async cargarPagina(page) {
      this.carga = false;
      const data = await fetch(`${API_URL}productos/paginas/${page}`).then(
        (res) => res.json()
      );
      this.imgArray = data;
      this.carga = true;
    },

    async getPages() {
      const data = await fetch(`${API_URL}productos/paginas`).then((res) =>
        res.json()
      );
      const cantidadPaginas = Object.keys(data).length;
      this.numeroPaginas = cantidadPaginas;
    },
  },

  components: { LoginPage, AppFooter, ProductsView, NavBar },
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
