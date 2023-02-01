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
export default {
  name: "LoginCom",
  props: {
    validacionMail: { Function },
    validacionContraseña: { Function },
    logIn: { Function },
  },
  data: () => ({
    valid: true,
    emailLogIn: "",
    pwdLogIn: "",
  }),
};
</script>

<style></style>
