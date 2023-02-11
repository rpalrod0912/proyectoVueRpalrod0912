<template>
  <v-expand-transition>
    <div
      v-if="isHovering"
      class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text hoverClass"
      style="height: 100%; opacity: 76%"
    >
      <v-btn rounded color="black" class="ml-2 botonHover">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
      <v-btn rounded color="black" class="ml-2 botonHover">
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
      <v-btn fab small color="black" class="ml-2 botonHover">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </div>
  </v-expand-transition>
</template>

<script>
export default {
  name: "ProductsHover",
  props: {
    isHovering: { type: Boolean },
  },
};
</script>

<style></style>
