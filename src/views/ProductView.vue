<template>
  <NavBar></NavBar>
  <div class="contenedor">
    <v-card class="elevation-6 mt-10">
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
        <div style="width: 40%">
          <v-card color="#c0bdbd" width="600" height="430" class="d-flex ml-10">
            <v-img :src="productData.imagen"></v-img>
          </v-card>
          <div
            style="
              display: flex;
              flex-direction: column;
              width: 50%;
              justify-content: center;
              margin: 4rem;
              font-size: 1.4rem;
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

          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                rounded="pill"
                @click="this.añadirCarrito"
                :disabled="!boton"
                style="margin-top: 2rem"
                color="#69F801"
                v-bind="props"
                >AÑADIR AL CARRITO</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card v-if="$store.state.currentUser === null">
                <v-card-text class="centradoAviso">
                  <v-icon class="text-h2 pa-12" color="red">mdi-cancel</v-icon>
                  <div class="text-h2 pa-12">
                    Inicia sesión para añadir al carrito
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="isActive.value = false"
                    >Cerrar</v-btn
                  >
                </v-card-actions>
              </v-card>
              <v-card v-else>
                <v-card-text class="centradoAviso">
                  <v-icon class="text-h2 pa-12" color="blue"
                    >mdi-checkbox-marked-circle</v-icon
                  >
                  <div class="text-h2 pa-12">Producto añadido al carrito</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="isActive.value = false"
                    >Cerrar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { recarga } from "@/helpers/basicFunctions.js";
import { API_URL } from "@/helpers/basicFunctions";

/*eslint-disable */
export default {
  name: "ProductView",
  created() {
    this.productData = JSON.parse(this.$route.query.prodData);
    this.productData;
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
      reload: recarga,
      añadido: false,
      mensaje: null,
    };
  },
  methods: {
    añadirCarrito() {
      if (this.$store.state.currentUser === null) {
        return;
      }
      const id = this.$store.state.currentUser;
      const email = this.$store.state.currentMail;
      const datos = {
        userId: id,
        idProduct: this.productData.id,
      };
      datos;

      const carritoEditar = JSON.parse(
        localStorage.getItem(`carrito_${email}`)
      );
      const productoExiste = carritoEditar.cesta.findIndex((producto) => {
        return producto.idProduct === datos.idProduct;
      });
      if (productoExiste !== -1) {
        carritoEditar.cesta[productoExiste].cantidad += 1;
      } else {
        carritoEditar.cesta.push({
          idProduct: datos.idProduct,
          cantidad: 1,
        });
      }
      localStorage.setItem(`carrito_${email}`, JSON.stringify(carritoEditar));

      this.añadido = true;
      return true;
    },
    async contarProd(id) {
      let cantidad = 0;
      const data = await fetch(`${API_URL}carts/${id}`).then((res) =>
        res.json()
      );
      for (let i = 0; i <= data.cesta.length - 1; i++) {
        cantidad += parseInt(data.cesta[i].cantidad);
      }

      return cantidad;
    },
    activarBoton() {
      if (this.tallaElegida !== false && this.colorElegido !== false) {
        this.boton = true;
      }
    },
    selectTalla(talla) {
      if (this.tallaElegida !== talla) {
        this.tallaElegida = talla;
        this.tallaElegida;
        this.activarBoton();
      }
    },
    selectColor(color) {
      if (this.colorElegido !== color) {
        this.colorElegido = color;
        this.colorElegido;
        this.activarBoton();
      }
    },
    encontrarColor(valor) {
      this.productData;
      const encontrarEstilo = this.colores.find((val) => val.color === valor);
      return encontrarEstilo.estilo;
    },
  },
  components: { NavBar },
  watch: {
    añadido(newval, oldval) {
      if (newval === true) {
        this.reload();
      }
    },
  },
};
</script>

<style>
@media (max-width: 1300px) {
  .presentacion {
  }
}
@media (max-width: 1200px) {
  .presentacion {
    flex-wrap: wrap;
  }
}
.presentacion {
  width: auto;
  justify-content: space-evenly;
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  display: flex;
  flex-wrap: no-wrap;
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

.centradoAviso {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
