<template>
  <v-app>
    <app-nav-bar />
    <app-nav-drawer />
    <v-main class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppNavBar from "@/components/AppNavBar.vue";
import AppNavDrawer from "@/components/AppNavDrawer.vue";
import axios from "axios";

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
  },
  created() {
    axios.get("https://leodh.dev/citypop/api/albums?limit=18").then(result => {
      this.$store.state.albums = result.data;
    });
  }
});
</script>

<style lang="scss">
@import "@/scss/globalstyles.scss";
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.main {
  background-color: $background-dark;
}
</style>
