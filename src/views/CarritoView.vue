<template>
  <NavBar></NavBar>
  <v-container v-if="loading">
    <h2 class="display-2 mb-4">Cesta</h2>
    <v-list class="ma-0 pa-0 estilo">
      <v-col
        cols="12"
        sm="4"
        v-for="(product, index) in yourCart.cesta"
        class="pa-0"
        :key="index"
      >
        <v-card
          height="530"
          max-width="600"
          class="d-flex flex-column align-center mb-3"
        >
          <h2>{{ this.products[index].nombre }}</h2>
          <img height="270" :src="this.products[index].imagen" />
          <h2>
            Precio:{{
              this.products[index].precio * parseInt(product.cantidad)
            }}
          </h2>
          <!--
          <v-list-tile-content>
            <v-list-tile-title v-html="product.title"></v-list-tile-title>
            <v-list-tile-sub-title
              v-html="product.sub_title"
            ></v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile> {{ product.price }}$ </v-list-tile>
-->
          <v-list-tile-action>
            <v-text-field
              :label="`Cantidad:${product.cantidad}`"
              :value="product.cantidad"
            ></v-text-field>
          </v-list-tile-action>

          <v-list-tile> Cantidad:{{ product.cantidad }} </v-list-tile>
          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                icon="mdi-minus"
                color="red"
                @click="
                  eliminarCarrito(
                    this.$store.state.currentUser,
                    this.products[index].id
                  );
                  this.reload();
                "
                style="margin-top: 2rem"
                v-bind="props"
              ></v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-card-text class="centradoAviso">
                  <v-icon class="text-h2 pa-12" color="red"
                    >mdi-delete-circle</v-icon
                  >
                  <div class="text-h2 pa-12">
                    Producto Eliminado del carrito
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="isActive.value = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-card>
      </v-col>
    </v-list>

    <v-container>
      <v-btn color="success" larger style="float: right">Go to payment</v-btn>
    </v-container>
  </v-container>
  <h2 v-else>Cargando...</h2>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
import { recarga } from "@/helpers/basicFunctions.js";
/*eslint-disable */
export default {
  name: "CarritoView",
  async created() {
    this.cartId = JSON.parse(this.$route.query.id);
    await this.cargarCarrito(this.cartId);
    debugger;

    await this.cargarProductos(this.yourCart.cesta);
    console.log(this.products);
  },
  data: () => ({
    products: [],
    loading: false,
    cartId: null,
    yourCart: null,
    reload: recarga,
  }),
  methods: {
    async contarProd(id) {
      let cantidad = 0;
      const data = await fetch(`http://localhost:3003/v1/api/carts/${id}`).then(
        (res) => res.json()
      );
      for (let i = 0; i <= data.cesta.length - 1; i++) {
        cantidad += parseInt(data.cesta[i].cantidad);
      }

      return cantidad;
    },
    async eliminarCarrito(userId, idProduct) {
      debugger;

      const datos = {
        userId,
        idProduct,
      };
      console.log(datos);
      const data = await axios
        .patch(`http://localhost:3003/v1/api/carts/`, datos)
        .then((res) => res.data)
        .catch((error) => console.log(error));
      console.log(data);
      debugger;
      this.$store.commit(
        "setCurrentCartLength",
        await this.contarProd(datos.userId)
      );
      this.reload();
    },
    async cargarProductos(cesta) {
      let cont = 0;
      debugger;
      console.log(cesta);
      while (cont < cesta.length) {
        const data = await fetch(
          `http://localhost:3003/v1/api/productos/${cesta[cont].idProducto}`
        ).then((res) => res.json());
        this.products.push(data);
        cont += 1;
      }
      this.loading = true;
    },
    async cargarCarrito(id) {
      debugger;
      const data = await fetch(`http://localhost:3003/v1/api/carts/${id}`).then(
        (res) => res.json()
      );
      this.yourCart = data;
    },
  },
  watch: {
    yourCart(oldval, newVal) {},
  },
  components: { NavBar },
};
</script>

<style scoped>
.centradoAviso {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.estilo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
