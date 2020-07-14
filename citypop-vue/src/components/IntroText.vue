<template>
  <div>
    <h1 class="pb-8">What is City pop?</h1>
    <p>
      City pop (シティーポップ) is a genre of music popular in Japan in the late 70s and 80s that
      blended pop, jazz, and funk
    </p>
    <p class="text-cursive pb-7">Music made by city people, for city people</p>
    <v-btn class="primary-btn " rounded @click="playVideo()">
      <span class="text-spacing-normal text-sans-serif">
        PLAY SAMPLE
      </span>
      <v-icon right>mdi-play-circle</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IntroText",
  data() {
    return {};
  },
  methods: {
    playVideo() {
      this.$store.state.videoPlaying = true;
    }
  }
});
</script>

<style lang="scss" scoped></style>
