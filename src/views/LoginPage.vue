<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <LoginCom
                  :validacionMail="this.validacionMail"
                  :validacionContraseña="this.validacionContraseña"
                ></LoginCom>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿No tienes una cuenta?</h3>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++"
                        >REGISTRATE</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿Ya estás registrado?</h3>
                      <h6 class="text-center">Inicia sesión en tu cuenta</h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--"
                        >INICIAR SESIÓN</v-btn
                      >
                    </div>
                  </div>
                </v-col>
                <RegisterCom
                  :validacionCheck="this.validacionCheck"
                  :validacionNombre="this.validacionNombre"
                  :validacionContraseña="this.validacionContraseña"
                  :validacionMail="this.validacionMail"
                  :validacionRepetirContra="this.validacionRepetirContra"
                  :passwordConfirmationRule="this.passwordConfirmationRule"
                ></RegisterCom>
                <v-col cols="12" md="6"> </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginCom from "@/components/LoginCom.vue";
import RegisterCom from "@/components/RegisterCom.vue";

export default {
  /*eslint-disable */
  /*Documentacion de Vuetify Validacion */
  /*https://vuetifyjs.com/en/components/forms/#vuelidate */
  data: () => ({
    valid: true,
    //emailLogIn: "",
    //pwdLogIn: "",

    registerNombre: "",
    registerApellidos: "",
    registerMail: "",
    registerPwd: "",
    registerConfirmPwd: "",
    registerChecked: false,

    step: 1,

    validacionNombre: [
      (val) => !!val || "El nombre es obligatorio",
      (val) =>
        (val && val.length <= 15) || "El nombre debe ser menor a 10 caracteres",
    ],
    validacionContraseña: [
      (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/.test(val) ||
        " 8 a 24 caracteres Debe incluir Letras maysuculas y minusculas, un numero",
    ],
    validacionMail: [
      (val) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val) ||
        "Debe contener un @, una extensión . al final. Ejemplo: micorreo@gmail.com",
    ],
    validacionRepetirContra: [
      (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(val) ||
        " 8 a 24 caracteres Debe incluir Letras maysuculas y minusculas, un numero y un caracter especial",
    ],
    validacionCheck: [
      (v) => !!v || "Debes aceptar terminos y condiciones para registrarte",
    ],
  }),

  props: {
    source: String,
  },
  /*Para validar contraseñas tenemos que llamar a varias variables de data, como es un metodo mas complego,
    realizamos un metodo para validar en computed
    llamando variables de data, luiego en template llamamos al metodo en :rules=metodo1.concat(metodo2)
    para aplicar las reglas de distintos metodos, pues son dos arrays con metodos y buscamos concatenarlos
    */
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.registerPwd === this.registerConfirmPwd ||
        "Las contraseñas deben coincidir";
    },
  },
  components: { LoginCom, RegisterCom },
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
