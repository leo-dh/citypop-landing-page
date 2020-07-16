<template>
  <div class="background-wrapper">
    <div class="grid-layout">
      <intro-text class="sm-col4 pb-10" />
      <intro-video class="sm-col4 pb-12" />
      <write-up :write-up="chunk1" class="sm-col4 pb-6" />
      <image-card :image-card="imageCard1" class="sm-col2-center pb-10" />
      <write-up :write-up="chunk2" class="sm-col4 pb-6" />
      <image-card :image-card="imageCard2" class="sm-col2-center pb-10" />
      <write-up :write-up="chunk3" class="sm-col4 pb-6" />
      <image-card :image-card="imageCard3" class="sm-col2-center pb-12" />
      <album-collection class="sm-col4" />
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
  padding: 4em 0;
}
</style>
