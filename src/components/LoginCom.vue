<template>
  <v-col cols="12" md="6">
    <v-form
      ref="form"
      @keydown.enter.prevent="this.valid ? this.logIn() : ''"
      v-model="this.valid"
      miValidacion
    >
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
            <h3 style="color: red" v-if="userNotFound || passwordNotFound">
              Usuario o Contraseña Incorrectas
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
import { API_URL } from "@/helpers/basicFunctions";

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
    passwordNotFound: false,
  }),
  methods: {
    logIn() {
      this.$refs.form.validate();
      this.logInFirebase();
      //this.encontrarUsuario(this.emailLogIn, this.pwdLogIn);
      //this.logInFirebase();
    },

    async logInFirebase() {
      const logInData = {
        mail: this.emailLogIn,
        pwd: this.pwdLogIn,
      };
      await signInWithEmailAndPassword(auth, logInData.mail, logInData.pwd)
        .then((userCredential) => {
          this.userNotFound = false;
          this.passwordNotFound = false;
          const user = userCredential.user;
          this.encontrarUsuario(user.email);
          this.$store.commit("setCurrentMail", user.email);
          if (localStorage.getItem(`carrito_${user.email}`) === null) {
            localStorage.setItem(
              `carrito_${user.email}`,
              JSON.stringify({ userId: user.uid, cesta: [] })
            );
            ("CREADO!!");
          }
          ("NO CREADO YA EXISTE");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/user-not-found") {
            this.userNotFound = true;
          }
          if (errorCode === "auth/wrong-password") {
            this.passwordNotFound = true;
          }
        });
      this.userNotFound;
    },
    async encontrarUsuario(email) {
      const mail = email;
      const foundUser = await fetch(`${API_URL}users/login/${mail}`).then(
        (res) => res.json()
      );
      foundUser;

      if (foundUser !== "NOTFOUND") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
