<template>
  <div>
    <hero />
    <information />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";
import Information from "@/components/Information.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Hero,
    Information
  }
});
</script>

<style lang="scss" scoped>
.placeholder {
  height: 100vh;
}
</style>
