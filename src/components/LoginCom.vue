<template>
  <v-col cols="12" md="6">
    <v-form ref="form" v-model="this.valid" miValidacion>
      <v-card-text class="mt-12">
        <h4 class="text-center">Inicia Sesión en tu cuenta</h4>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="emailLogIn"
              label="Correo Electrónico"
              outlined
              dense
              color="blue"
              autocomplete="false"
              class="mt-16"
              :rules="validacionMail"
              required
            />
            <v-text-field
              v-model="pwdLogIn"
              label="Contraseña"
              outlined
              dense
              :rules="validacionContraseña"
              color="blue"
              autocomplete="false"
              type="password"
              required
            />
            <v-row>
              <v-col cols="12" sm="7">
                <v-checkbox label="Recordar" class="mt-n1" color="blue">
                </v-checkbox>
              </v-col>
            </v-row>
            <h3 style="color: red" v-if="userNotFound">
              USUARIO NO ENCONTRADO
            </h3>
            <v-btn
              :disabled="!valid"
              color="success"
              dark
              block
              tile
              @click="logIn()"
              >INICIAR SESIÓN</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-col>
</template>

<script>
/*eslint-disable */
import {
  auth,
  signInWithEmailAndPassword,
} from "@/firebaseConfig/firebaseConfig.js";
import { getAuth } from "@firebase/auth";
export default {
  name: "LoginCom",
  props: {
    validacionMail: { Function },
    validacionContraseña: { Function },
  },
  data: () => ({
    valid: true,
    emailLogIn: "",
    pwdLogIn: "",
    userNotFound: false,
  }),
  methods: {
    logIn() {
      debugger;
      this.$refs.form.validate();
      this.logInFirebase();
      //this.encontrarUsuario(this.emailLogIn, this.pwdLogIn);
      //this.logInFirebase();
    },

    async logInFirebase() {
      debugger;

      const logInData = {
        mail: this.emailLogIn,
        pwd: this.pwdLogIn,
      };
      await signInWithEmailAndPassword(auth, logInData.mail, logInData.pwd)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log("Iniciado sesion con exito");
        })
        .catch((error) => {
          debugger;
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("INVALIDO");
        });
    },
    async encontrarUsuario(mail, contra) {
      const datosEnviar = mail + "&" + contra;
      const foundUser = await fetch(
        `http://localhost:3003/v1/api/users/login/${datosEnviar}`
      ).then((res) => res.json());
      console.log(foundUser);
      if (foundUser !== "NOTFOUND") {
        this.$router.push("/");
      }
      this.userNotFound = true;
    },
  },
};
</script>

<style></style>
