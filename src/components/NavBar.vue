<template>
  <v-app-bar class="header" app color="#3853D8" dark>
    <div class="titulo">
      <v-hover v-slot:default="{ isHovering, props }" open-delay="60">
        <router-link to="/">
          <img
            v-if="isHovering"
            v-bind="props"
            style="max-width: 13rem"
            src="https://i.ibb.co/dJT1MtP/2.png"
            alt="2"
          />
          <img
            v-else-if="!isHovering"
            v-bind="props"
            style="max-width: 13rem"
            src="https://i.ibb.co/hLsC5XG/whitelogo.png"
            alt="whitelogo"
          />
        </router-link>
      </v-hover>
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
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-account-outline" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item
          ><v-list-item-title v-if="!this.authentication"
            >No has iniciado sesion</v-list-item-title
          >
          <v-list-item-title v-else>Hola {{ this.email }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-divider vertical></v-divider>
    <v-btn icon class="mx-1">
      <v-badge color="black" :content="this.carritoNumero"
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
          ><router-link
            v-if="!this.authentication"
            class="linkRouter"
            to="/login"
            ><v-btn variant="flat" color="success">Login</v-btn></router-link
          ><v-btn variant="flat" color="error" @click="logOut" v-else
            >DESCONECTAR</v-btn
          >
        </v-list-item>
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
import { auth, signOut } from "@/firebaseConfig/firebaseConfig.js";
/*eslint-disable */
export default {
  name: "NavBar",
  created() {
    //OBLIGATORIO DE LO CONTRARIO NO PODEMOS TRABAJAR CON VARIABLESDFE VUE CON oAuthStateChanged
    let self = this;
    console.log(auth.currentUser);
    auth.onAuthStateChanged(async function (user) {
      if (user != null) {
        console.log("ESTAS LOGEADO");
        self.email = user.email;
        self.authentication = true;
        debugger;
        self.carritoNumero = await self.contarProd(user.uid);
      } else {
        console.log("NO ESTAS LOGEADO");
        self.authentication = false;
      }
    });
    console.log(this.text);
  },

  data() {
    return {
      text: "",
      searchsArray: [],
      authentication: null,
      email: "",
      carritoNumero: 0,
    };
  },
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
    logOut() {
      debugger;
      signOut(auth)
        .then(() => {
          this.authentication = false;
          debugger;
          this.$router.go("/");
        })
        .catch((error) => {
          console.log("ALGO OCURRIO");
        });
    },
    buscarElementos() {
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
  computed: {
    authentication: false,
  },
  watch: {
    text(newval, oldval) {
      debugger;
      this.fetchAllProductsByValue(newval);
    },
    authentication(newval, oldval) {},
    inmediate: true,
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
