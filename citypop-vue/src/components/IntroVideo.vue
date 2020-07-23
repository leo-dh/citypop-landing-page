<template>
  <div ref="iframeContainer" class="iframe-container">
    <youtube
      ref="youtube"
      :video-id="videoId"
      :height="iframeHeight"
      :width="iframeWidth"
      @playing="playing"
      @paused="paused"
    ></youtube>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { videoId } from "@/store/data";
export default Vue.extend({
  name: "IntroVideo",
  data() {
    return {
      videoId: videoId,
      playerVars: {
        origin: "http://localhost:8080"
      },
      iframeHeight: 0,
      iframeWidth: 0
    };
  },
  watch: {
    "$store.state.videoPlaying": {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: function(newValue: boolean, oldValue: boolean): void {
        if (newValue) {
          this.$refs.youtube.player.playVideo();
        }
      }
    }
  },
  created() {
    addEventListener("resize", this.forceRerender);
  },
  destroyed() {
    removeEventListener("resize", this.forceRerender);
  },
  mounted() {
    this.forceRerender();
  },
  methods: {
    playing(): void {
      this.$store.state.videoPlaying = true;
    },
    paused(): void {
      this.$store.state.videoPlaying = false;
    },
    forceRerender(): void {
      this.iframeWidth = this.$refs.iframeContainer.clientWidth;
      this.iframeHeight = (this.iframeWidth / 16) * 9;
    }
  }
});
</script>

<style lang="scss" scoped>
.iframe-container {
  overflow: hidden;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
