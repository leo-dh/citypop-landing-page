import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    videoPlaying: false,
    albumModal: false,
    selectedAlbum: {
      title: "",
      artist: "",
      tracks: [],
      cover: ""
    }
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
