<template>
  <div class="contenedor">
    <v-card class="elevation-6 mt-10 formCard">
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
            <h2 class="text-center">{{ productData.nombre }}</h2>
          </v-col>
        </v-row>
      </v-card>
      <div class="presentacion">
        <div>
          <v-card color="#c0bdbd" width="600" height="430" class="d-flex ml-10">
            <v-img :src="productData.imagen"></v-img>
          </v-card>
          <div
            style="
              display: flex;
              flex-direction: column;
              width: 50rem;
              justify-content: center;
              margin: 4rem;
            "
          >
            <h2>Descripción</h2>
            <p>{{ productData.descripcion }}</p>
          </div>
        </div>
        <div class="textoPresentacion">
          <h1>Caracteristicas del producto</h1>
          <p>Marca:{{ productData.marca }}</p>
          <p>Tipo de Calzado: {{ productData.sexo }}</p>
          <p>Categoría: {{ productData.categoria }}</p>
          <p>Utilidad: {{ productData.utilidad }}</p>

          <br />
          <h2>Colores Disponibles</h2>
          <v-chip-group column mandatory>
            <v-chip
              v-for="colorProd in productData.color"
              :key="colorProd"
              filter
              @click="selectColor(colorProd)"
              class="ma-2"
              :color="encontrarColor(colorProd)"
            >
              {{ colorProd }}
            </v-chip>
          </v-chip-group>

          <h2>Tallas Disponibles</h2>
          <v-chip-group column mandatory>
            <v-chip
              v-for="talla in productData.talla"
              filter
              @click="selectTalla(talla)"
              :key="talla"
              class="ma-2"
            >
              {{ talla }}
            </v-chip>
          </v-chip-group>
          <div>
            <p v-if="!boton" style="color: red">
              Selecciona un color y una talla para añadir al carrito
            </p>
          </div>

          <v-btn
            rounded="pill"
            :disabled="!boton"
            style="margin-top: 2rem"
            color="#69F801"
            >AÑADIR AL carrito</v-btn
          >
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  name: "ProductView",
  created() {
    this.productData = JSON.parse(this.$route.query.prodData);
    console.log(this.productData);
  },
  data() {
    return {
      productData: null,
      tallaElegida: false,
      colorElegido: false,
      boton: false,
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
        { color: "Gris", estilo: "lightgrey" },
        { color: "Rosa", estilo: "pink" },
        {
          color: "Rojo",
          estilo: "red",
        },
        {
          color: "Verde",
          estilo: "green",
        },
      ],
    };
  },
  methods: {
    activarBoton() {
      if (this.tallaElegida !== false && this.colorElegido !== false) {
        this.boton = true;
      }
    },
    selectTalla(talla) {
      if (this.tallaElegida !== talla) {
        this.tallaElegida = talla;
        console.log(this.tallaElegida);
        this.activarBoton();
      }
    },
    selectColor(color) {
      if (this.colorElegido !== color) {
        this.colorElegido = color;
        console.log(this.colorElegido);
        this.activarBoton();
      }
    },
    encontrarColor(valor) {
      debugger;
      console.log(this.productData);
      const encontrarEstilo = this.colores.find((val) => val.color === valor);
      return encontrarEstilo.estilo;
    },
  },
};
</script>

<style>
.presentacion {
  justify-content: space-evenly;
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: 6rem;
  margin-right: 6rem;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #e8ebeb;
}
.textoPresentacion {
  font-size: 1.4rem;
  margin-left: 6rem;
  width: 40rem;
}
.formCard {
  width: 80%;
  margin-bottom: 1rem;
}
</style>
