<template>
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
          <h4 class="text-center">ZAPATOS</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
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
                <v-btn
                  rounded
                  color="#4C9CDB"
                  dark
                  class="withoutuppercase px-8 mt-10"
                  >Más Info..</v-btn
                >
              </v-col>
              <v-col cols="12" sm="8">
                <!--TODO Cambiar con api-->
                <v-img
                  src="https://i.ibb.co/Wy49mwF/eac24c2f11924b109410ae890008cb01-9366.webp"
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
                <v-btn
                  rounded
                  color="#8375E7"
                  dark
                  class="withoutuppercase px-8 mt-3"
                  >Más Info...
                </v-btn>
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
      ></ProductsView>
    </v-card>
  </v-container>
</template>

<script>
/*eslint-disable*/

import LoginPage from "./LoginPage.vue";
import HomePage from "../components/HomePage.vue";

import AppFooter from "@/components/AppFooter.vue";
import ProductsView from "../components/ProductsView.vue";
debugger;
export default {
  name: "DashboardView",
  state: {},
  //Cuando la pagina se crea, realiza el metodo que llamemos en created
  created() {
    this.getImage();
  },
  data: () => ({
    items: [
      {
        text: "Inicio",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Catalogo",
        disabled: false,
        href: "breadcrumbs_catalog",
      },
      {
        text: "Hombre",
        disabled: false,
        href: "breadcrumbs_hombre",
      },
    ],
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
    ],
    /*
        productos: [
          {
            class: "pa-0",
            sold: "-20%",
            image: "1.png",
            title: "KD 8 EXT",
            price: "$ 145.00",
          },
          {
            class: "pa-0",
            sold: "-30%",
            image: "2.png",
            title: "Jordan Galaxy",
            price: "$ 599.00",
          },
          {
            class: "py-0 pl-0",
            sold: "-17%",
            image: "3.png",
            title: "Nike SB Trainerendor Leathe",
            price: "$ 190.00",
          },
          {
            class: "pa-0",
            sold: "-22%",
            image: "4.png",
            title: "Air Jordan Spike 40 iD",
            price: "$ 220.00",
          },
          {
            class: "pa-0",
            sold: "-18%",
            image: "5.png",
            title: "Nike Air Footscape Magista Flyknit",
            price: "$ 235.00",
          },
          {
            class: "py-0 pl-0",
            sold: "-40%",
            image: "6.png",
            title: "Nike Air Zoom Huarache 2k4",
            price: "$ 190.00",
          },
          {
            class: "pa-0",
            sold: "-13%",
            image: "7.png",
            title: "Jordan Horizon",
            price: "$ 230.00",
          },
          {
            class: "pa-0",
            sold: "-15%",
            image: "8.png",
            title: "Air Jordan xx9 Low",
            price: "$ 185.00",
          },
          {
            class: "py-0 pl-0",
            sold: "-10%",
            image: "9.png",
            title: "LeBron XIII Premium AS iD",
            price: "$ 265.00",
          },
          {
            class: "pa-0",
            sold: "-19%",
            image: "10.png",
            title: "Air Jordan 1 Retro Hight Nouveau",
            price: "$ 190.00",
          },
          {
            class: "pa-0",
            sold: "-16%",
            image: "11.png",
            title: "Nike Air Presto",
            price: "$ 175.00",
          },
          {
            class: "py-0 pl-0",
            sold: "-10%",
            image: "12.png",
            title: "KD 8 Premium AS iD",
            price: "$ 245.00",
          },
        ],
        */
    imgArray: [],
    carga: false,
  }),
  methods: {
    async getImage() {
      let numberId = 0;
      debugger;
      this.miImagen = "Pensando...";
      while (this.imgArray.length < 12) {
        const data = await fetch(
          `http://localhost:3003/v1/api/productos/`
        ).then((res) => res.json());
        debugger;
        var objetoData = data.find((objeto) => {
          console.log(objeto);
          return objeto.id === `product${1}`;
        });
        console.log(data);
        this.imgArray.push(data[numberId]);
        console.log(this.imgArray);
        console.log(this.carga);
        numberId += 1;
      }
      debugger;
      console.log(this.imgArray);
      this.carga = true;
      console.log(this.carga);
    },
  },
  watch: {
    carga(val, oldval) {
      /*
            while (!val) {
              getImageId();
              this.imgArray.push(1);
              if ((this.imgArray.length = 12)) this.carga = true;
            }
            */
    },
  },
  components: { LoginPage, HomePage, AppFooter, ProductsView },
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
