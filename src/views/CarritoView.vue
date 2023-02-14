<template>
  <NavBar></NavBar>
  <v-container v-if="loading">
    <h2 class="display-2 mb-4">Cesta</h2>
    <v-list two-line>
      <div
        v-for="(product, index) in this.yourCart.cesta"
        v-bind:key="product[index]"
      >
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <h2>{{ this.products[index].nombre }}</h2>
            <img height="300" :src="this.products[index].imagen" />
            <h2>
              Precio:{{
                this.products[index].precio * parseInt(product.cantidad)
              }}
            </h2>
          </v-list-tile-avatar>
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

          <v-list-tile> {{ product.price * product.qty }}$ </v-list-tile>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="red lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </div>
    </v-list>

    <v-container>
      <v-btn color="success" larger style="float: right">Go to payment</v-btn>
    </v-container>
  </v-container>
  <h2 v-else>Cargando...</h2>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
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
  }),
  methods: {
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

<style scoped></style>
