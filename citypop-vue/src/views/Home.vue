<template>
  <div>
    <hero />
    <div class="placeholder"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Hero
  }
});
</script>

<style lang="scss" scoped>
.placeholder {
  height: 100vh;
}
</style>
