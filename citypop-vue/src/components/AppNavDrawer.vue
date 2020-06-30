<template>
  <v-navigation-drawer v-model="$store.state.drawer" app disable-resize-watcher class="d-lg-none">
    <v-list nav>
      <v-list-item v-for="route in $store.state.routes" :key="route.path" :to="route.path">
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppNavDrawer extends Vue {
  data() {
    return {};
  }
}
</script>
>
