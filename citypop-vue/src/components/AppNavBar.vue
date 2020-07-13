<template>
  <v-app-bar app dark hide-on-scroll elevation="0" color="transparent">
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="$store.state.drawer = !$store.state.drawer"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn v-for="route in $store.state.routes" :key="route.path" :to="route.path" class="mr-1">
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

<style lang="scss" scoped></style>
