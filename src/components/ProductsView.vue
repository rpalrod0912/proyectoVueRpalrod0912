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
    <v-col cols="12" sm="3" class="mt-n6 p1-0 salesFilter">
      <v-toolbar flat outlined>
        <v-checkbox
          v-model="saleFilter"
          @change="filtrarOfertas"
          label="Ofertas"
        ></v-checkbox>
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
        <v-chip-group column mandatory>
          <v-chip
            @click="colorFilterState('Ninguno')"
            filter
            class="ma-2"
            color="lightgrey"
          >
            TODOS
          </v-chip>
          <v-chip
            v-for="color in colores"
            :key="color.color"
            @click="colorFilterState(color.color)"
            filter
            class="ma-2"
            :color="color.estilo"
          >
            {{ color.color }}
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
        <v-chip-group column mandatory="m1-2">
          <v-chip
            filter
            color="blue white--text"
            @click="sizeFilterState('Ninguno')"
          >
            TODOS
          </v-chip>
          <v-chip
            filter
            color="blue white--text"
            @click="sizeFilterState(talla)"
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
      <v-row v-if="saleFilter">
        <v-col
          cols="12"
          sm="4"
          v-for="(producto, index) in this.ofertasArray"
          :key="index"
          class="pa-0"
        >
          <v-hover v-slot:default="{ isHovering, props }" open-delay="100">
            <v-card
              v-bind="props"
              height="300"
              class="d-flex flex-column align-center mb-3"
              text-align="center"
            >
              <v-spacer></v-spacer>

              <v-btn color="red" small dark
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
              <ProductsHover :isHovering="isHovering" :productData="producto" />

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
      <v-row v-else-if="filterValue">
        <v-col
          cols="12"
          sm="4"
          v-for="(producto, index) in this.filterArray"
          :key="index"
          class="pa-0"
        >
          <v-hover v-slot:default="{ isHovering, props }" open-delay="100">
            <v-card
              v-bind="props"
              height="300"
              class="d-flex flex-column align-center mb-3"
              text-align="center"
            >
              <v-spacer></v-spacer>

              <v-btn color="red" small dark
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
              <ProductsHover :isHovering="isHovering" :productData="producto" />

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
      <v-row v-else>
        <v-col
          cols="12"
          sm="4"
          v-for="(producto, index) in this.imgArray"
          :key="index"
          class="pa-0"
        >
          <v-hover v-slot:default="{ isHovering, props }" open-delay="100">
            <v-card
              v-bind="props"
              height="300"
              class="d-flex flex-column align-center mb-3"
              text-align="center"
            >
              <v-spacer></v-spacer>

              <v-btn v-if="producto.oferta" color="red" small dark
                >OFERTA:{{ producto.oferta }}%</v-btn
              >

              <v-img :src="producto.imagen" width="200" height="200" contain>
              </v-img>
              <v-card-text class="mt-n4">
                <strong :class="{ 'on-hover': hover }">{{
                  producto.nombre
                }}</strong>
              </v-card-text>
              <ProductsHover :isHovering="isHovering" :productData="producto" />

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
    </v-col>

    <v-col v-else>
      <h1>Cargando...</h1>
    </v-col>
  </v-row>
</template>

<script>
import ProductsHover from "./ProductsHover.vue";

export default {
  /*eslint-disable*/
  //Pasamos Propiedades del componente padre
  name: "ProductsView",
  data() {
    return {
      colores: [
        {
          color: "Blanco",
          estilo: "lightgrey",
        },
        {
          color: "Negro",
          estilo: "lightgrey",
        },
        {
          color: "Azul",
          estilo: "blue",
        },
        {
          color: "Rojo",
          estilo: "red",
        },
        {
          color: "Verde",
          estilo: "green",
        },
      ],
      icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
      saleFilter: false,
      ofertasArray: [],
      filterArray: [],
      loadOfertas: false,
      sizesFilter: false,
      tipoFiltro: null,
      filterValue: false,
      tallaSeleccionada: null,
      colorSeleccionado: null,
    };
  },
  computed: {},
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
    page: {
      type: Number,
    },
  },
  watch: {
    imgArray(oldValue, newValue) {
      if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
        debugger;
        if (this.saleFilter) {
          this.filterSalesArr();
        }
        if (this.filterValue) {
          if (this.tipoFiltro === "tallas") {
            this.sizeFilterState(this.tallaSeleccionada);
          }
          if (this.tipoFiltro === "color") {
            this.colorFilterState(this.colorSeleccionado);
          }
        }
      }
    },
  },
  methods: {
    aplicarDescuento(precio, porcentaje) {
      const resultado = precio - (precio * porcentaje) / 100;
      return resultado;
    },
    filterSalesArr() {
      debugger;
      this.loadOfertas = true;
      this.ofertasArray = this.imgArray.filter((objeto) =>
        objeto.hasOwnProperty("oferta")
      );
      return this.ofertasArray;
    },
    sizeFilterState(talla) {
      this.tipoFiltro = "tallas";
      debugger;
      this.tallaSeleccionada = talla;
      console.log(this.tallaSeleccionada);
      const tallasRopa = ["S", "M", "L", "XL"];
      if (talla === "Ninguno") {
        this.filterValue = false;
      } else if (!tallasRopa.includes(talla)) {
        this.filterArray = this.imgArray.filter((objeto) =>
          objeto.talla.includes(parseInt(talla))
        );
        this.filterValue = true;
      } else {
        this.filterArray = this.imgArray.filter((objeto) =>
          objeto.talla.includes(talla)
        );
        this.filterValue = true;
      }
    },
    colorFilterState(color) {
      this.tipoFiltro = "color";
      this.colorSeleccionado = color;
      if (color === "Ninguno") {
        this.filterValue = false;
      } else {
        this.filterArray = this.imgArray.filter((objeto) =>
          objeto.color.includes(color)
        );
        this.filterValue = true;
      }
    },
    filtrarOfertas() {
      if (this.saleFilter) {
        this.filterSalesArr();
      }
    },
  },
  components: { ProductsHover },
};
</script>

<style>
.botonHover {
  opacity: 100%;
}
.colPrecioOfer {
  color: red;
}

.salesCheck {
  color: black;
}
</style>
