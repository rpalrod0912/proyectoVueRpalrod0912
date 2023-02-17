import { createStore } from "vuex";
/*eslint-disable*/
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    currentAuth: false,
    currentMail: null,
    currentUser: null,
    currentCartLength: 0,
  },
  //Necesario plugin persistedState para crear estados persistenes cuando se refresca la pagina
  plugins: [createPersistedState()],
  mutations: {
    setCurrentMail(state, mail) {
      state.currentMail = mail;
    },
    setCurrentAuth(state, auth) {
      state.currentAuth = auth;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setCurrentCartLength(state, cartLength) {
      state.currentCartLength = cartLength;
    },
    logout(state) {
      state.currentAuth = null;
    },
  },
});
