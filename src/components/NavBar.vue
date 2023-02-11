<template>
  <v-app-bar class="header" app color="#3853D8" dark>
    <div class="titulo">
      <h4>Rafael Palomino</h4>
    </div>

    <v-spacer></v-spacer>
    <div class="busquedaProd">
      <v-text-field
        color="white"
        v-model="text"
        filled
        variant="solo"
        label="Buscar Producto"
        clearable
      ></v-text-field>
    </div>
    <v-btn @click="buscarElementos" icon class="mx-1">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <SearchBar />
    <v-divider vertical></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    <v-divider vertical></v-divider>
    <v-btn icon class="mx-1">
      <v-badge color="#94D0EF" content="2"
        ><v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-menu" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item
          ><router-link class="linkRouter" to="/"
            ><v-list-item-title>Home</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link class="linkRouter" to="/about"
            ><v-list-item-title>About</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link class="linkRouter" to="/login"
            ><v-list-item-title>Login</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link class="linkRouter" to="/Productos"
            ><v-list-item-title>Productos</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link class="linkRouter" to="/Inicio"
            ><v-list-item-title>Inicio</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link class="linkRouter" to="/Perfil"
            ><v-list-item-title>Perfil</v-list-item-title></router-link
          ></v-list-item
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
/*eslint-disable */
export default {
  name: "NavBar",
  data() {
    return { text: "", searchsArray: [] };
  },
  methods: {
    buscarElementos() {
      debugger;

      this.$router.push({
        name: "BusquedasView",
        query: { prodFiltrados: JSON.stringify(this.searchsArray) },
      });
    },
    async fetchAllProductsByValue(val) {
      const data = await fetch(`http://localhost:3003/v1/api/productos`).then(
        (res) => res.json()
      );
      let index = 0;
      let encontrados = [];
      while (index < data.length) {
        if (
          data[index].nombre
            .split(" ")
            .join("")
            .toLowerCase()
            .includes(val.split(" ").join("").toLowerCase())
        ) {
          encontrados.push(data[index]);
        }
        index += 1;
      }
      this.searchsArray = encontrados;
    },
  },
  watch: {
    text(newval, oldval) {
      debugger;
      this.fetchAllProductsByValue(newval);
    },
  },
};
</script>

<style>
.linkRouter {
  text-decoration: none;
  text-decoration: inherit;
  color: inherit;
}
.header {
  height: 73px;
}
.busquedaProd {
  width: 20rem;
  margin-top: 1.4rem;
}
.titulo {
  display: flex;
  position: absolute;
  margin-left: 1rem;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.v-toolbar__title {
  font-size: 1rem;
}

.v-badge__badge {
  font-size: 10px;
  height: 18px;
  min-width: 18px;
}
</style>
