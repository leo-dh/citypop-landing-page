<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon
      class="d-lg-none"
      @click="$store.state.drawer = !$store.state.drawer"
    ></v-app-bar-nav-icon>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>
    <v-spacer></v-spacer>
    <v-btn v-for="route in $store.state.routes" :key="route.path" :to="route.path" class="mr-1">
      <v-icon left>{{ route.icon }}</v-icon>
      <span>{{ route.title }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppNavBar extends Vue {
  data() {
    return {};
  }
}
</script>
