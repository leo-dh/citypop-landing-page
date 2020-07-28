<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    app
    disable-resize-watcher
    class="d-lg-none d-xl-none d-md-none maroon"
  >
    <v-list nav flat>
      <v-list-item-group active-class="peach--text ">
        <v-list-item v-for="route in routes" :key="route.path" :to="route.path">
          <v-list-item-icon>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ route.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import routes from "@/router/routes";

export default Vue.extend({
  name: "AppNavDrawer",
  data() {
    return {
      routes: routes
    };
  }
});
</script>
