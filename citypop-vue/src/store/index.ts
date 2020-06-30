import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    routes: [
      {
        path: "/",
        title: "Home",
        icon: "mdi-home"
      },
      {
        path: "/about",
        title: "About",
        icon: "mdi-information"
      }
    ]
  },
  getters: {
    drawer: state => {
      return state.drawer;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
