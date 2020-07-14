import { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      icon: "mdi-home"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      icon: "mdi-information"
    }
  }
];

export default routes;
