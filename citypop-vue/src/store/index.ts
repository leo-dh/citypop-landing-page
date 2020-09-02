import Vue from "vue";
import Vuex from "vuex";
import { Album } from "@/types/model";

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
    },
    albums: [] as Album[]
  },
  getters: {
    drawer: state => {
      return state.drawer;
    },
    albums: state => {
      return state.albums;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
