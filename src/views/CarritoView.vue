<template>
  <NavBar></NavBar>
  <v-container v-if="loading">
    <v-card
      color="#3853D8"
      height="150px"
      tle
      flat
      class="d-flex align-center justify-center"
      dark
    >
      <v-row>
        <v-col cols="12" sm="12"> <h2 class="text-center">Cesta</h2> </v-col>
      </v-row>
    </v-card>
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
      <v-btn color="success" height="70" style="display: flex; margin: 0 auto"
        >Proceder Al Pago</v-btn
      >
    </v-container>
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { API_URL, recarga } from "@/helpers/basicFunctions.js";
/*eslint-disable */
export default {
  name: "CarritoView",
  async created() {
    this.yourCart = JSON.parse(
      localStorage.getItem(`carrito_${this.$store.state.currentMail}`)
    );
    this.cartId = JSON.parse(this.$route.query.id);
    await this.cargarProductos(this.yourCart.cesta);
  },
  data: () => ({
    products: [],
    loading: false,
    cartId: null,
    yourCart: null,
    reload: recarga,
  }),
  methods: {
    /*
    async contarProd(id) {
      let cantidad = 0;
      const data = await fetch(`${API_URL}carts/${id}`).then((res) =>
        res.json()
      );
      for (let i = 0; i <= data.cesta.length - 1; i++) {
        cantidad += parseInt(data.cesta[i].cantidad);
      }

      return cantidad;
    },*/
    eliminarCarrito(userId, idProduct) {
      const datos = {
        userId,
        idProduct,
      };
      const mail = this.$store.state.currentMail;
      const carritoEditar = JSON.parse(localStorage.getItem(`carrito_${mail}`));
      const productoExiste = carritoEditar.cesta.findIndex((producto) => {
        return producto.idProduct === datos.idProduct;
      });
      if (productoExiste !== -1) {
        carritoEditar.cesta.splice(productoExiste, 1);
      }

      localStorage.setItem(`carrito_${mail}`, JSON.stringify(carritoEditar));
      this.$store.commit("setCurrentCartLength");

      this.reload();
    },
    async cargarProductos(cesta) {
      let cont = 0;
      cesta;
      while (cont < cesta.length) {
        const data = await fetch(
          `${API_URL}productos/${cesta[cont].idProduct}`
        ).then((res) => res.json());
        this.products.push(data);
        cont += 1;
      }
      this.loading = true;
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
