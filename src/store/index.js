import { createStore } from "vuex";
/*eslint-disable*/
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: { currentAuth: false, currentUser: null },
  //Necesario plugin persistedState para crear estados persistenes cuando se refresca la pagina
  plugins: [createPersistedState()],
  mutations: {
    setCurrentAuth(state, auth) {
      state.currentAuth = auth;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    logout(state) {
      state.currentAuth = null;
    },
  },
});
