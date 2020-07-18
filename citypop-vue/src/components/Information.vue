<template>
  <div class="background-wrapper">
    <div class="grid-layout info-layout">
      <intro-text id="info1" class="sm-col4 pb-10 " />
      <intro-video id="info2" class="sm-col4 pb-12" />
      <write-up id="info3" :write-up="chunk1" class="sm-col4 pb-6 " />
      <image-card id="info4" :image-card="imageCard1" class="sm-col2-center pb-10 " />
      <write-up id="info5" :write-up="chunk2" class="sm-col4 pb-6 " />
      <image-card id="info6" :image-card="imageCard2" class="sm-col2-center pb-10 " />
      <write-up id="info7" :write-up="chunk3" class="sm-col4 pb-6 " />
      <image-card id="info8" :image-card="imageCard3" class="sm-col2-center pb-12 " />
      <album-collection class="sm-col4 lg-col-10" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IntroText from "@/components/IntroText.vue";
import IntroVideo from "@/components/IntroVideo.vue";
import WriteUp from "@/components/WriteUp.vue";
import ImageCard from "@/components/ImageCard.vue";
import AlbumCollection from "@/components/AlbumCollection.vue";
import { chunk1, chunk2, chunk3, imageCard1, imageCard2, imageCard3 } from "@/store/data";
export default Vue.extend({
  name: "Information",
  components: {
    IntroText,
    IntroVideo,
    WriteUp,
    ImageCard,
    AlbumCollection
  },
  data() {
    return {
      chunk1: chunk1,
      chunk2: chunk2,
      chunk3: chunk3,
      imageCard1: imageCard1,
      imageCard2: imageCard2,
      imageCard3: imageCard3
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
  justify-content: center;
  align-items: center;
  padding: 4em 0;
}

@media #{map-get($display-breakpoints, 'lg-only')} {
  .info-layout {
    > :nth-child(6) {
      grid-column: span 4 / -1;
      grid-row: 3 / span 1;
    }
    > :nth-child(1),
    > :nth-child(4),
    > :nth-child(8) {
      grid-column: 1 / span 4;
    }
    > :nth-child(2) {
      grid-column: span 5 / -1;
    }
    > :nth-child(5) {
      grid-column: 1 / span 5;
    }
    > :nth-child(3) {
      grid-column: span 5 / -1;
      grid-row: 2 / span 1;
    }
    > :nth-child(7) {
      grid-column: span 5 / -1;
      grid-row: 4 / span 1;
    }
  }
}
</style>
