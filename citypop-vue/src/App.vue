<template>
  <v-app>
    <app-nav-bar />
    <app-nav-drawer />
    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppNavBar from "@/components/AppNavBar.vue";
import AppNavDrawer from "@/components/AppNavDrawer.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppNavBar,
    AppNavDrawer
  },
  watch: {
    "$vuetify.breakpoint.mobile": {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: function(newValue: boolean, oldValue: boolean): void {
        if (!newValue) {
          this.$store.state.drawer = false;
        }
      }
    }
  }
});
</script>

<style lang="scss">
@import "@/scss/globalstyles.scss";
.main {
  background-color: $background-dark;
}
</style>
