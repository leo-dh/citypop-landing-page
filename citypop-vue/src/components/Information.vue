<template>
  <div class="background-wrapper">
    <div class="grid-layout">
      <intro-text class="sm-col4 pb-10" />
      <intro-video class="sm-col4" />
      <write-up :write-up="chunk1" class="sm-col4" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IntroText from "@/components/IntroText.vue";
import IntroVideo from "@/components/IntroVideo.vue";
import WriteUp from "@/components/WriteUp.vue";
import { chunk1 } from "@/store/data";
export default Vue.extend({
  name: "Information",
  components: {
    IntroText,
    IntroVideo,
    WriteUp
  },
  data() {
    return {
      chunk1: chunk1
    };
  }
});
</script>

<style lang="scss" scoped>
.background-wrapper {
  background-image: url("~@/assets/people-walking-on-the-street-between-buildings-2385210.jpg");
  background-color: $background-dark;
  background-size: auto 100%;
  background-blend-mode: multiply;
  display: flex;
  padding: 4em 0;
}
</style>
