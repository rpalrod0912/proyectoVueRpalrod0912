<template>
  <NavBar></NavBar>

  <div class="contenedor">
    <v-card class="elevation-6 mt-10 formCard" v-if="cargando">
      <h1 class="text-center">
        {{ userComprobar.nombre + " " + userComprobar.lastName }}
      </h1>
      <v-avatar class="avatar" color="surface-variant" size="200"></v-avatar>
      <v-btn
        v-if="!editar"
        color="success"
        style="display: flex; margin: 0 auto; margin-bottom: 2rem"
        @click="this.editar = true"
        ><v-icon style="padding-right: 0.5rem">mdi-pencil </v-icon>EDITAR
        INFORMACIÓN</v-btn
      >
      <v-btn
        v-else
        color="error"
        style="display: flex; margin: 0 auto; margin-bottom: 2rem"
        @click="this.editar = false"
      >
        <v-icon style="padding-right: 0.5rem">mdi-cancel </v-icon> CANCELAR
      </v-btn>

      <v-row align="center" justify="center">
        <v-col cols="12" sm="8">
          <v-form
            class="profileForm"
            ref="form"
            miValidacion
            v-model="valid"
            :disabled="!editar"
          >
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="userData.nombre"
                  label="Nombre"
                  variant="solo"
                  clearable
                  active
                  color="blue"
                  class="mt-4"
                  :rules="this.validacionNombre"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="userData.lastName"
                  label="Apellidos"
                  outlined
                  dense
                  active
                  color="blue"
                  autocomplete="false"
                  class="mt-4"
                  :rules="validacionNombre"
                  required
                />
              </v-col>
            </v-row>
            <v-text-field
              v-model="userData.mail"
              label="Correo Electrónico"
              outlined
              dense
              active
              color="blue"
              autocomplete="false"
              :rules="validacionMail"
              required
            />
            <v-text-field
              v-model="userData.pwd"
              label="Contraseña"
              outlined
              active
              dense
              color="blue"
              autocomplete="false"
              type="password"
              :rules="validacionContraseña"
            />
            <v-text-field
              v-if="editar"
              v-model="registerConfirmPwd"
              label="Repetir Contraseña"
              outlined
              dense
              active
              color="blue"
              autocomplete="false"
              type="password"
              :rules="validacionContraseña.concat(passwordConfirmationRule)"
              required
            />
            <v-row>
              <v-col cols="12" sm="7">
                <v-checkbox
                  v-model="registerChecked"
                  :rules="validacionCheck"
                  label="Quiero realizar cambios en mi cuenta"
                  class="mt-n1"
                  color="blue"
                  required
                >
                </v-checkbox>
              </v-col>
            </v-row>
            <v-btn
              v-if="editar"
              :disabled="!valid"
              color="blue"
              @click="register()"
              dark
              block
              tile
              >GUARDAR CAMBIOS</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-card>
    <h1 v-else>CARGANGOD...</h1>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { API_URL } from "@/helpers/basicFunctions";
/*eslint-disable */
export default {
  async created() {
    this.cargando = false;
    debugger;
    this.userComprobar = await this.fetchUserData(
      this.$store.state.currentUser
    );
    this.userData = await this.fetchUserData(this.$store.state.currentUser);
    debugger;
    console.log(this.userData);
    this.cargando = true;
  },
  data() {
    return {
      valid: false,
      editar: false,
      cargando: false,
      userData: null,
      userComprobar: null,
      test: "true",
      esValido: false,
      valid: true,
      //emailLogIn: "",
      //pwdLogIn: "",
      registerConfirmPwd: "",
      registerChecked: false,
      validacionNombre: [
        (val) => !!val || "El nombre es obligatorio",
        (val) =>
          (val && val.length <= 15) ||
          "El nombre debe ser menor a 10 caracteres",
      ],
      validacionContraseña: [
        (val) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/.test(val) ||
          " 8 a 24 caracteres Debe incluir Letras maysuculas y minusculas, un numero y un caracter especial",
      ],
      validacionMail: [
        (val) =>
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val) ||
          "Debe contener un @, una extensión . al final. Ejemplo: micorreo@gmail.com",
      ],
      validacionRepetirContra: [
        (val) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/.test(val) ||
          " 8 a 24 caracteres Debe incluir Letras maysuculas y minusculas, un numero y un caracter especial",
      ],
      validacionCheck: [
        (v) => !!v || "Debes aceptar terminos y condiciones para registrarte",
      ],
    };
  },
  methods: {
    register() {
      console.log("Hola");
      this.$refs.form.validate();
    },
    async fetchUserData(id) {
      const data = await fetch(`${API_URL}users/id/${id}`).then((res) =>
        res.json()
      );
      return data;
    },
  },

  computed: {
    passwordConfirmationRule() {
      return () =>
        this.userData.pwd === this.registerConfirmPwd ||
        "Las contraseñas deben coincidir";
    },
    validateName() {
      console.log(this.userData.nombre);
      this.userData.nombre.length <= 15 ? true : false;
    },
  },
  watch: {
    /*
    userData: {
      handler(newVal, oldVal) {
        if()
      },
      deep: true,
    },
    */
  },
  components: { NavBar },
};
</script>

<style scoped>
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
  width: 80%;
  margin-bottom: 1rem;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #49d9d9;
}
body {
  background-color: aqua;
  margin: 0%;
}
</style>
