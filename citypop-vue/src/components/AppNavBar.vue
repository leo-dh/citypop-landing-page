<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon
      class="d-md-none"
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
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn v-for="route in $store.state.routes" :key="route.path" :to="route.path" class="mr-1">
        <v-icon left>{{ route.icon }}</v-icon>
        <span class="font-weight-bold text-capitalize letter-spacing-normal">{{
          route.title
        }}</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppNavbar",
  data() {
    return {};
  }
});
</script>
