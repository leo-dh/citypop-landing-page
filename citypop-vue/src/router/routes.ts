import { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
export const baseRoutes: Array<RouteConfig> = [
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
export const routes: Array<RouteConfig> = [
  ...baseRoutes,
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "../views/NotFound.vue")
  }
];
