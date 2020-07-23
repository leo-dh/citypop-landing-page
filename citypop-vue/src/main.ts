import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueYoutube from "vue-youtube";
import VueLazyLoad from "vue-lazyload";

Vue.use(VueYoutube);
Vue.use(VueLazyLoad, {
  observer: true,

  // optional
  observerOptions: {
    rootMargin: "0px",
    threshold: 0.1
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
