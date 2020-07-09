<template>
  <v-navigation-drawer v-model="$store.state.drawer" app disable-resize-watcher class="d-lg-none">
    <v-list nav>
      <v-list-item v-for="route in $store.state.routes" :key="route.path" :to="route.path">
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">{{ route.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppNavDrawer",
  data() {
    return {};
  }
});
</script>
>
