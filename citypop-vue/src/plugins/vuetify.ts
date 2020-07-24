import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        maroon: "#392f43",
        lavender: "#8260a3",
        offwhite: "#e5e5e5",
        peach: "#da7c71",
        cherry: "#c23d40"
      }
    }
  }
});
