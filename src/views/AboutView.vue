<template>
  <NavBar></NavBar>

  <div class="contenedor">
    <v-card
      color="#3853D8"
      height="150px"
      tle
      flat
      class="d-flex align-center justify-center topCard"
      dark
    >
      <v-row>
        <v-col cols="12" sm="12">
          <h2 class="text-center">Más Información</h2>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="elevation-6 mt-0 formCard">
      <img
        style="width: 20rem"
        class="avatar"
        src="https://i.ibb.co/hLsC5XG/whitelogo.png"
      />
      <h2 class="text-center texto">
        Contacta con nosotros para obtener más información, te responderemos en
        un plazo de 24 horas
      </h2>
      <v-form
        ref="form"
        v-model="valid"
        @keydown.enter.prevent="this.valid ? this.submit : ''"
        miValidacion
        class="formContacto"
      >
        <v-text-field
          v-model="mail"
          label="Correo Electrónico"
          outlined
          dense
          color="blue"
          autocomplete="false"
          :rules="validacionMail"
          required
        />
        <v-textarea
          bg-color="grey-lighten-2"
          color="cyan"
          label="Label"
        ></v-textarea>
        <h3 style="color: green" v-if="exito">
          Consulta enviada con éxito, te responderemos en un plazo de 24 horas
        </h3>

        <v-btn class="btn" :disabled="!valid" color="blue" @click="submit()"
          >ENVIAR CONSULTA</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script>
/*eslint-disable */

import NavBar from "@/components/NavBar.vue";
import axios from "axios";
import { API_URL } from "@/helpers/basicFunctions";
import {
  auth,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
} from "@/firebaseConfig/firebaseConfig";
import { subnetMatch } from "ipaddr.js";

export default {
  async created() {},
  data() {
    return {
      mail: "",
      valid: false,
      exito: false,
      validacionMail: [
        (val) =>
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val) ||
          "Debe contener un @, una extensión . al final. Ejemplo: micorreo@gmail.com",
      ],
    };
  },
  methods: {
    submit() {
      this.exito = true;
      setTimeout(() => {
        this.exito = false;
      }, 2000);
    },
  },
  components: { NavBar },
};
</script>

<style scoped>
.texto {
  margin-bottom: 6rem;
}
.btn {
  display: flex;
  margin: 0 auto;
  width: 14rem;
  margin-bottom: 1rem;
}
.formContacto {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 60%;
}
.topCard {
  display: flex;
  margin: 0 auto;
  width: 80%;
  margin-top: 1rem;
}
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
.avatar {
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.profileForm {
  margin-bottom: 6rem;
}

.formCard {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 80%;
  margin-bottom: 1rem;
}
.contenedor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #49d9d9;
}
body {
  background-color: aqua;
  margin: 0%;
}
</style>
