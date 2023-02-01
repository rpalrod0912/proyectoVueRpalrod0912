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
export default {
  name: "RegisterCom",
  data: () => ({
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
    register: { Function },
    passwordConfirmationRule: { Function },
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
