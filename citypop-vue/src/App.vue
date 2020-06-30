<template>
  <v-app>
    <AppNavBar />
    <AppNavDrawer />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import AppNavBar from "@/components/AppNavBar.vue";
import AppNavDrawer from "@/components/AppNavDrawer.vue";

@Component({
  components: {
    AppNavBar,
    AppNavDrawer
  }
})
export default class App extends Vue {
  data() {
    return {};
  }

  @Watch("$vuetify.breakpoint.mobile")
  onPropertyChanged(newValue: boolean, oldValue: boolean) {
    if (!newValue) {
      this.$store.state.drawer = false;
    }
  }
}
</script>
