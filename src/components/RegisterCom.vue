<template>
  <v-card-text class="mt-12">
    <h4 class="text-center">Registrate para crear tu cuenta</h4>

    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <v-form ref="form" v-model="valid" miValidacion>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="registerNombre"
                label="Nombre"
                outlined
                dense
                color="blue"
                autocomplete="false"
                class="mt-4"
                :rules="validacionNombre"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="registerApellidos"
                label="Apellidos"
                outlined
                dense
                color="blue"
                autocomplete="false"
                class="mt-4"
                :rules="validacionNombre"
                required
              />
            </v-col>
          </v-row>
          <v-text-field
            v-model="registerMail"
            label="Correo Electrónico"
            outlined
            dense
            color="blue"
            autocomplete="false"
            :rules="validacionMail"
            required
          />
          <v-text-field
            v-model="registerPwd"
            label="Contraseña"
            outlined
            dense
            color="blue"
            autocomplete="false"
            type="password"
            :rules="validacionContraseña"
            required
          />
          <v-text-field
            v-model="registerConfirmPwd"
            label="Repetir Contraseña"
            outlined
            dense
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
                label="Acepto términos y condiciones"
                class="mt-n1"
                color="blue"
                required
              >
              </v-checkbox>
            </v-col>
          </v-row>
          <h3 style="color: red" v-if="userFound">EL USUARIO YA EXISTE</h3>
          <h3 style="color: green" v-if="exito">
            REGISTRO CON EXITO, INICIA SESION
          </h3>
          <v-btn
            :disabled="!valid"
            color="blue"
            @click="register()"
            dark
            block
            tile
            >REGISTRARME</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
/*eslint-disable */
import {
  app,
  auth,
  createUserWithEmailAndPassword,
} from "@/firebaseConfig/firebaseConfig.js";
import router from "@/router";
import axios from "axios";

export default {
  name: "RegisterCom",
  data: () => ({
    exito: false,
    userFound: false,
    valid: true,
    registerNombre: "",
    registerApellidos: "",
    registerMail: "",
    registerPwd: "",
    registerConfirmPwd: "",
    registerChecked: false,
  }),
  props: {
    validacionCheck: { Function },
    validacionNombre: { Function },
    validacionContraseña: { Function },
    validacionMail: { Function },
    validacionRepetirContra: { Function },
    passwordConfirmationRule: { Function },
  },
  methods: {
    /*eslint-disable */
    register() {
      this.userFound = false;
      this.exito = false;
      debugger;
      console.log("Hola");
      this.$refs.form.validate();
      //this.postForm();
      this.registerFireBase();
    },
    async registerFireBase() {
      debugger;

      const registerData = {
        name: this.registerNombre,
        mail: this.registerMail,
        password: this.registerPwd,
      };
      await createUserWithEmailAndPassword(
        auth,
        registerData.mail,
        registerData.password
      )
        .then((userCredential) => {
          this.exito = true;
          this.userFound = false;

          const user = userCredential.user;
          console.log(user);
          console.log(data);
          console.log("Registrado con exito");
          router.push("/");
        })
        .catch((error) => {
          debugger;

          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            this.exito = false;
            console.log("YA EXISTE");

            this.userFound = true;
          }
        });
    },
    async postForm() {
      this.userFound = false;
      this.exito = false;
      const registerData = {
        name: this.registerNombre,
        mail: this.registerMail,
        password: this.registerPwd,
      };
      debugger;
      console.log("REGISTRANDO");
      const data = await axios
        .post("http://localhost:3003/v1/api/users/", registerData)
        .then((res) => res.data)
        .catch((error) => console.log(error));
      if (data === "YAEXISTE") {
        this.userFound = true;
      } else {
        this.exito = true;
      }
    },
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
