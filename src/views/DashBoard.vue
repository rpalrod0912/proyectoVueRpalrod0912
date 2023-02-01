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
                  :src="'af1.png'"
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

      <v-row>
        <v-col cols="12" sm="3" class="mt-n6 pr-0">
          <v-toolbar flat outlined>
            <v-toolbar-title><strong>Filtro</strong></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon class="m1-1">
              <v-icon color="#3853D8"> mdi-sync </v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              DEPORTE POR:<span>Precio €-€€</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4">
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 px-0">
          <v-toolbar flat outlined class="">
            <v-toolbar-title>MOSTRAR: <span>12</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4">
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 p1-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="#3853D8"> mdi-apps </v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn icon class="mx-1">
              <v-icon color="grey">mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-toolbar-title class="m1-2">
              <strong>COMPARAR: </strong>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-badge color="#3853D8" content="3" class="mr-2"></v-badge>
          </v-toolbar>
        </v-col>
        <v-col cols="3" class="py-0 pr-0 mt-n3">
          <v-card flat otulined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>CATEGORIAS</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-list dense class="mt-n5">
              <v-list-item v-for="style in styles" :key="style.title">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="style.title"
                    class="ml-8"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-subtitle
                    v-text="style.count"
                  ></v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
              <strong>PRECIO</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-toolbar flat>
              <v-text-field
                placeholder="50€"
                filled
                rounded
                dense
                class="mx-2"
              ></v-text-field>
              <v-text-field
                placeholder="2000€"
                filled
                rounded
                dense
                class="mx-2"
              ></v-text-field>
            </v-toolbar>
            <v-range-slider color="blue" max="40" min="-30"></v-range-slider>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>MODELOS</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-list dense class="mt-n5">
              <v-list-item v-for="brand in brands" :key="brand.title">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="brand.title"
                    class="m1-6"
                  ></v-list-item-title
                ></v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    color="primary"
                    v-model="brand.state"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>COLOR</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-chip-group column multiple>
              <v-chip filter class="ma-2" color="lightgrey"> BLANCO </v-chip>

              <v-chip filter class="ma-2" color="grey"> NEGRO </v-chip>

              <v-chip filter class="ma-2" color="blue"> AZUL </v-chip>

              <v-chip filter class="ma-2" color="red" text-color="white"
                >ROJO</v-chip
              >

              <v-chip
                filter
                class="ma-2"
                outlined
                color="green"
                text-color="white"
              >
                VERDE
              </v-chip>
            </v-chip-group>

            <!--

 <v-chip-group column multiple>
              <v-chip
                filter
                outlined
                color="black"
                text-color="black"
                class="ml-2"
              ></v-chip>
              <v-chip filter color="#E6E6E6" text-color="black"></v-chip>
              <v-chip filter color="#FFB500" text-color="white"></v-chip>
              <v-chip filter color="#F27229" text-color="white"> </v-chip>
              <v-chip filter color="#EB3427" text-color="white"> </v-chip>
              <v-chip filter color="#923FA3" text-color="white"> </v-chip>

              <v-chip filter color="#3A51DF" text-color="white" class="ml-2">
              </v-chip>
              <v-chip filter color="#23A7F5" text-color="white"> </v-chip>
              <v-chip filter color="#5EB524" text-color="white"> </v-chip>
              <v-chip filter color="#7C5F4D" text-color="white"> </v-chip>
              <v-chip filter color="black" text-color="white"> </v-chip>
              <v-chip filter color="lime" text-color="white"> </v-chip>
            </v-chip-group>
            -->
          </v-card>
          <v-card flat outlined>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>TAMAÑO</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-chip-group column multiple class="m1-2">
              <v-chip
                filter
                color="blue white--text"
                v-for="talla in tallas"
                :key="talla"
                :value="talla"
              >
                {{ talla }}</v-chip
              >
            </v-chip-group>
          </v-card>
        </v-col>

        <v-col v-if="carga" cols="9" class="mt-n3">
          <v-row>
            <v-col
              cols="12"
              sm="4"
              v-for="(producto, index) in this.imgArray"
              :key="index"
              class="pa-0"
            >
              <v-hover v-slot="{ hover }" open-delay="200">
                <v-card
                  :elevation="hover ? 16 : 2"
                  height="300"
                  class="d-flex flex-column align-center mb-3"
                  text-align="center"
                  variant="outlined"
                >
                  <v-spacer></v-spacer>
                  <v-btn color="black" small dark>{{ producto.sold }}</v-btn>
                  <v-img
                    :src="imgArray[index].url"
                    width="200"
                    height="200"
                    contain
                  ></v-img>
                  <v-card-text class="mt-n4">
                    <strong :class="{ 'on-hover': hover }">{{
                      producto.title
                    }}</strong>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else>
          <h1>Cargando...</h1>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
/*eslint-disable*/

import { ref } from "vue";
debugger;
export default {
  name: "DashBoard",
  state: {},

  props: {
    hola: String,
  },
  //Cuando la pagina se crea, realiza el metodo que llamemos en created
  created() {
    this.getImage(12);
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
    async getImage(id) {
      let numberId = 1;
      debugger;
      this.miImagen = "Pensando...";
      while (this.imgArray.length < 12) {
        const data = await fetch(
          `https:/jsonplaceholder.typicode.com/photos/${numberId}`
        ).then((res) => res.json());
        console.log(data);
        this.imgArray.push(data);
        console.log(this.imgArray);
        console.log(this.carga);
        numberId += 1;
      }
      this.carga = true;
      console.log(this.carga);
    },

    cargar() {
      debugger;
      while (!this.carga) {
        getImageId();
        this.imgArray.push(1);
        if ((this.imgArray.length = 12)) this.carga = true;
      }
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
