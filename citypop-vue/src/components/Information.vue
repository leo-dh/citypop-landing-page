<template>
  <div class="background-wrapper scrollTo">
    <div class="grid-layout info-layout">
      <intro-text class="sm-span-all mb-10 mb-lg-16 " />
      <intro-video class="sm-span-all mb-12 mb-lg-16" />
      <write-up :write-up="chunk1" class="sm-span-all mb-6 " />
      <image-card :image-card="imageCard1" class="sm-col2-center mb-10 mb-md-6" />
      <write-up :write-up="chunk2" class="sm-span-all mb-6 " />
      <image-card :image-card="imageCard2" class="sm-col2-center mb-10 mb-md-6" />
      <write-up :write-up="chunk3" class="sm-span-all mb-6 " />
      <image-card :image-card="imageCard3" class="sm-col2-center mb-12 mb-md-6 " />
      <album-collection class="span-all mt-lg-16" />
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

.info-layout {
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    row-gap: 3em;
    > :nth-child(4),
    > :nth-child(6),
    > :nth-child(8) {
      grid-column: 1 / span 4;
    }
    > :nth-child(3) {
      grid-column: span 5 / -1;
      grid-row: 2 / span 1;
    }
    > :nth-child(5) {
      grid-column: span 5 / -1;
      grid-row: 3 / span 1;
    }
    > :nth-child(7) {
      grid-column: span 5 / -1;
      grid-row: 4 / span 1;
    }
    > :nth-child(1) {
      grid-column: 1 / span 5;
    }
    > :nth-child(2) {
      grid-column: span 5 / -1;
    }
  }
  @media #{map-get($display-breakpoints, 'lg-only')} {
    row-gap: 6em;
  }
}
</style>
