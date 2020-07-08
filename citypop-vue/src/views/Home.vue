<template>
  <v-main>
    <HelloWorld />
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld
  }
});
</script>
