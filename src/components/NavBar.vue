<template>
  <v-app-bar app color="#3853D8" dark>
    <!--<v-btn icon
      >º
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  -->
    <!--
    <v-toolbar-title>
      <span class="caption">Select</span><br />Categoría
    </v-toolbar-title>
    -->
    <div class="titulo">
      <h4>Rafael Palomino</h4>
    </div>

    <v-spacer></v-spacer>
    <v-icon>mdi-magnify</v-icon>
    <!--
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="BUscar Productos"
      solo-inverted
    ></v-autocomplete>
    -->
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
          ><router-link to="/"
            ><v-list-item-title>Home</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link to="/about"
            ><v-list-item-title>About</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link to="/login"
            ><v-list-item-title>Login</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link to="/Productos"
            ><v-list-item-title>Productos</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link to="/Inicio"
            ><v-list-item-title>Inicio</v-list-item-title></router-link
          ></v-list-item
        >
        <v-list-item
          ><router-link to="Perfil"
            ><v-list-item-title>Perfil</v-list-item-title></router-link
          ></v-list-item
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavBar",
  data: () => ({
    items: [],
    loading: false,
    search: null,
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style>
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
