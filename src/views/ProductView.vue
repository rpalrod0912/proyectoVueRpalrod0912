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
            <h1>Otras Caracteristicas del producto</h1>
            <h2>Marca:{{ productData.marca }}</h2>
            <h2>Tipo de Calzado: {{ productData.sexo }}</h2>
            <h2>Categoría: {{ productData.categoria }}</h2>
            <h2>Utilidad: {{ productData.utilidad }}</h2>
          </div>
        </div>
        <div class="textoPresentacion">
          <h2>Descripción</h2>
          <p>{{ productData.descripcion }}</p>
          <br />
          <h2>Colores Disponibles</h2>

          <v-chip
            v-for="producto in productData.color"
            :key="producto"
            class="ma-2"
            :color="encontrarColor(producto)"
          >
            {{ producto }}
          </v-chip>
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
    };
  },
  methods: {
    encontrarColor(valor) {
      debugger;
      const encontrarEstilo = this.colores.find((val) => val.color === valor);
      return encontrarEstilo.estilo;
    },
  },
};
</script>

<style>
.ordenarCaracteristicas {
}
.presentacion {
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  display: flex;
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
