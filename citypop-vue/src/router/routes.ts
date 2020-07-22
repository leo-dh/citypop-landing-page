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
    path: "/resources",
    name: "Resources",
    component: () => import(/* webpackChunkName: "resources" */ "../views/Resources.vue"),
    meta: {
      icon: "mdi-information"
    }
  }
];

export default routes;
