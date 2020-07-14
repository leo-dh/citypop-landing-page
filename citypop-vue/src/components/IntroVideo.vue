<template>
  <div class="iframe-container">
    <youtube
      ref="youtube"
      :video-id="videoId"
      :fit-parent="true"
      @playing="playing"
      @paused="paused"
    ></youtube>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IntroVideo",
  data() {
    return {
      videoId: "_cOFCiiQIvI",
      playerVars: {
        origin: "http://localhost:8080"
      }
    };
  },
  watch: {
    "$store.state.videoPlaying": {
      handler: function(newValue: boolean, oldValue: boolean): void {
        if (newValue) {
          this.$refs.youtube.player.playVideo();
        }
      }
    }
  },
  methods: {
    playing(): void {
      this.$store.state.videoPlaying = true;
    },
    paused(): void {
      this.$store.state.videoPlaying = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.iframe-container {
  overflow: hidden;
  position: relative;
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
