<template>
  <v-app-bar app dark hide-on-scroll elevation="0" :height="height" color="transparent">
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="$store.state.drawer = !$store.state.drawer"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div v-if="$vuetify.breakpoint.mdAndUp" class="mr-10">
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="navbar__buttons mx-2"
        :exact="route.path === '/'"
        text
      >
        {{ route.name }}
      </router-link>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import routes from "@/router/routes";

export default Vue.extend({
  name: "AppNavbar",
  data() {
    return {
      routes: routes,
      height: 0
    };
  },
  created() {
    this.setHeight();
    addEventListener("resize", this.setHeight);
  },
  destroyed() {
    removeEventListener("resize", this.setHeight);
  },
  methods: {
    setHeight(): void {
      this.height = 0.1 * window.innerHeight;
    }
  }
});
</script>

<style lang="scss" scoped>
.navbar__buttons {
  font-weight: bold;
  padding: 0.5em;
  font-size: 1.2em;
  text-decoration: none;
  color: $color-white;
  &:not(.router-link-active):hover {
    color: $color-red;
  }
}
.router-link-active {
  color: $color-orange;
}
</style>
