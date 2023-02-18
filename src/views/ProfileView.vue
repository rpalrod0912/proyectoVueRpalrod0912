<template>
  <NavBar></NavBar>

  <div class="contenedor">
    <v-card class="elevation-6 mt-10 formCard" v-if="cargando">
      <h1 class="text-center">
        {{ userComprobar.nombre + " " + userComprobar.lastName }}
      </h1>
      <v-avatar class="avatar" color="brown" size="200">
        <h1>{{ iniciales }}</h1>
      </v-avatar>
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
      <div v-if="editar">
        <v-alert
          v-if="this.errorNombre"
          class="alertError"
          type="error"
          text="Error, comprueba de nuevo el nombre"
        ></v-alert>
        <v-alert
          v-if="this.errorApellidos"
          class="alertError"
          type="error"
          text="Error, comprueba de nuevo los Apellidos"
        ></v-alert>
        <v-alert
          v-if="this.errorMail"
          class="alertError"
          type="error"
          text="Error, comprueba de nuevo el email"
        ></v-alert>
        <v-alert
          v-if="this.errorContra"
          class="alertError"
          type="error"
          text="Error, comprueba de nuevo la contraseña"
        ></v-alert>
        <v-alert
          v-if="this.errorRepContra"
          class="alertError"
          type="error"
          text="Error, no coinciden las contraseñas"
        ></v-alert>
        <v-alert
          v-if="this.errorCheck"
          class="alertError"
          type="error"
          text="Error, acepta guardar los cambios"
        ></v-alert>
      </div>
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8">
              <v-form
                class="profileForm"
                ref="form"
                miValidacion
                :disabled="!editar"
              >
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="userData.nombre"
                      label="Nombre"
                      outlined
                      dense
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
                  v-model="originalPwd"
                  label="Contraseña"
                  :placeholder="'*'.repeat(userData.pwd.length)"
                  outlined
                  active
                  dense
                  color="blue"
                  autocomplete="false"
                  type="password"
                  :rules="validacionContraseña"
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
                  color="blue"
                  style="display: flex; margin: 0 auto; margin-bottom: 2rem"
                  @click="this.step = 2"
                  ><v-icon style="padding-right: 0.5rem">mdi-pencil </v-icon
                  >EDITAR CONTRASEÑA</v-btn
                >
                <v-btn
                  v-if="editar"
                  color="blue"
                  @click="register1()"
                  dark
                  block
                  tile
                  >GUARDAR CAMBIOS</v-btn
                >
              </v-form>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item :value="2">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8">
              <v-form
                class="profileForm"
                ref="form"
                miValidacion
                :disabled="!editar"
              >
                <v-row>
                  <v-col cols="12" sm="20">
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
                      :rules="
                        validacionContraseña.concat(passwordConfirmationRule)
                      "
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
                      color="blue"
                      style="display: flex; margin: 0 auto; margin-bottom: 2rem"
                      @click="this.step = 1"
                      ><v-icon style="padding-right: 0.5rem">mdi-pencil </v-icon
                      >EDITAR INFORMACIÓN PRINCIPAL</v-btn
                    >
                    <v-btn
                      v-if="editar"
                      color="blue"
                      @click="register2()"
                      dark
                      block
                      tile
                      >GUARDAR CAMBIOS</v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card>
    <h1 v-else>CARGANGOD...</h1>
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

export default {
  async created() {
    this.cargando = false;
    this.userComprobar = await this.fetchUserData(
      this.$store.state.currentUser
    );
    this.userData = await this.fetchUserData(this.$store.state.currentUser);
    this.iniciales =
      this.userComprobar.nombre["0"].toUpperCase() +
      this.userComprobar.lastName["0"].toUpperCase();
    this.userData;
    this.cargando = true;
  },
  data() {
    return {
      iniciales: "",
      originalPwd: "",
      step: 1,
      valid: false,
      editar: false,
      cargando: false,
      userData: null,
      userComprobar: null,
      test: "true",
      esValido: false,
      valid: true,
      errorNombre: false,
      errorApellidos: false,
      errorMail: false,
      errorContra: false,
      errorRepContra: false,
      errorCheck: false,
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
    //ACLARION: EL cambio de datos normales esta separado del cambio de contaseña porque firebase desactiva el token de credenciales
    //cuando se realiza un cambio importante, es decir, solo se permite un cambio de email o un cambio de contraseña en un mismo incio de sesion
    //pero no permite ambos en un mismo inicio de sesion
    updateProfile() {
      this.patchForm(this.userData);
      if (this.step === 1) {
        updateEmail(auth.currentUser, this.userData.mail)
          .then(() => {
            ("ACTUALIZADO MAIL");
          })
          .catch((error) => {
            error;
          });
      }
      if (this.step === 2) {
        updatePassword(auth.currentUser, this.userData.pwd)
          .then(() => {
            ("ACTUALIZADO PWD!!");
          })
          .catch((error) => {
            error;
          });
      }
      this.$router.push({
        name: "LoginPage",
        query: { cambio: "SI" },
      });
    },
    async patchForm(objetoUsuario) {
      objetoUsuario;
      const data = await axios
        .patch(`${API_URL}users/${objetoUsuario.idUser}`, objetoUsuario)
        .then((res) => res.data)
        .catch((error) => error);
    },
    register1() {
      if (
        this.validarNombre(this.userData.nombre) &&
        this.validarNombre(this.userData.lastName) &&
        this.validarContraOriginal(this.originalPwd) &&
        this.validarMail(this.userData.mail) &&
        this.validarCheck(this.registerChecked)
      ) {
        ("Hola");
        this.updateProfile();
        this.$refs.form.validate();
      } else {
        if (!this.validarNombre(this.userData.nombre)) {
          this.errorNombre = true;
        } else {
          this.errorNombre = false;
        }
        if (!this.validarNombre(this.userData.lastName)) {
          this.errorApellidos = true;
        } else {
          this.errorApellidos = false;
        }
        if (!this.validarContraOriginal(this.originalPwd)) {
          this.errorContra = true;
        } else {
          this.errorContra = false;
        }

        if (!this.validarMail(this.userData.mail)) {
          this.errorMail = true;
        } else {
          this.errorMail = false;
        }
        if (!this.validarCheck(this.registerChecked)) {
          this.errorCheck = true;
        } else {
          this.errorCheck = false;
        }
      }
    },
    register2() {
      if (
        this.validarNombre(this.userData.nombre) &&
        this.validarNombre(this.userData.lastName) &&
        this.validarContra(this.userData.pwd) &&
        this.validarRepContra(this.registerConfirmPwd) &&
        this.validarMail(this.userData.mail) &&
        this.validarCheck(this.registerChecked)
      ) {
        ("Hola");
        this.updateProfile();
        this.$refs.form.validate();
      } else {
        if (!this.validarNombre(this.userData.nombre)) {
          this.errorNombre = true;
        } else {
          this.errorNombre = false;
        }
        if (!this.validarNombre(this.userData.lastName)) {
          this.errorApellidos = true;
        } else {
          this.errorApellidos = false;
        }
        if (!this.validarContra(this.userData.pwd)) {
          this.errorContra = true;
        } else {
          this.errorContra = false;
        }
        if (!this.validarRepContra(this.registerConfirmPwd)) {
          this.errorRepContra = true;
        } else {
          this.errorRepContra = false;
        }
        if (!this.validarMail(this.userData.mail)) {
          this.errorMail = true;
        } else {
          this.errorMail = false;
        }
        if (!this.validarCheck(this.registerChecked)) {
          this.errorCheck = true;
        } else {
          this.errorCheck = false;
        }
      }
    },
    validarContraOriginal(datos) {
      if (datos === this.userComprobar.pwd) {
        return true;
      }
      return false;
    },
    validarNombre(datos) {
      if (datos !== "" && datos.length <= 15) {
        return true;
      }
      return false;
    },
    validarContra(datos) {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/.test(datos)) {
        return true;
      }
      return false;
    },
    validarRepContra(datos) {
      if (datos === this.userData.pwd) {
        return true;
      }
      return false;
    },
    validarMail(datos) {
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(datos)) {
        return true;
      }
      return false;
    },
    validarCheck(datos) {
      if (datos) {
        return true;
      }
      return false;
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
      this.userData.nombre;
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
.alertError {
  display: flex;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  width: 30rem;
  justify-content: center;
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
