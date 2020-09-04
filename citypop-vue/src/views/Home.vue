<template>
  <div>
    <hero />
    <information />
    <end-section />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";
import Information from "@/components/Information.vue";
import EndSection from "@/components/EndSection.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Hero,
    Information,
    EndSection
  }
});
</script>

<style lang="scss" scoped></style>
