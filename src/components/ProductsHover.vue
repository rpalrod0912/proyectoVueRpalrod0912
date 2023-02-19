<template>
  <v-expand-transition>
    <div
      v-if="isHovering"
      class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text hoverClass"
      style="height: 100%; opacity: 76%"
    >
      <v-btn @click="verProducto" rounded color="black" class="ml-2 botonHover">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </div>
  </v-expand-transition>
</template>

<script>
/*eslint-disable */
export default {
  name: "ProductsHover",

  props: {
    isHovering: { type: Boolean },
    productData: { type: Object },
  },
  methods: {
    verProducto() {
      this.$router.push({
        name: "ProductView",
        query: { prodData: JSON.stringify(this.productData) },
      });
    },
  },
  watch: {
    isHovering(oldval, newVal) {
      if (oldval) {
        this.productData;
      }
    },
  },
};
</script>

<style>
.hoverClass {
  background-color: #70bcff;
  width: 100%;
  opacity: 100%;
}
</style>
