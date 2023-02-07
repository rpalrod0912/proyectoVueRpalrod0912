<template>
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
              <v-list-item-subtitle v-text="style.count"></v-list-item-subtitle>
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
              <v-checkbox color="primary" v-model="brand.state"></v-checkbox>
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

          <v-chip filter class="ma-2" outlined color="green" text-color="white">
            VERDE
          </v-chip>
        </v-chip-group>
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

              <v-btn v-if="producto.oferta" color="black" small dark
                >{{ producto.oferta }}%</v-btn
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
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
    <v-col v-else>
      <h1>Cargando...</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  /*eslint-disable */
  //Pasamos Propiedades del componente padre
  name: "ProductsView",
  props: {
    carga: {
      type: Boolean,
    },
    imgArray: {
      type: Array,
    },
    brands: {
      type: Array,
    },
    tallas: {
      type: Array,
    },
  },
};
</script>

<style></style>
