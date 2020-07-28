<template>
  <div class="background-wrapper scrollTo">
    <div class="grid-layout info-layout">
      <intro-text class="xs-span-all sm-span-all mb-10 mb-lg-16 mb-xl-16" />
      <intro-video class="xs-span-all sm-span-all mb-12 mb-sm-14 mb-lg-16 mb-xl-16" />
      <template v-for="(section, i) in sections">
        <write-up
          :key="i"
          :write-up="section.writeUp"
          class="xs-span-all sm-span-all mb-6 mb-sm-10"
        />
        <image-card
          :key="i + sections.length"
          :image-card="section.imageCard"
          class="xs-col2-center sm-col2-center mb-10 mb-sm-16 mb-md-6"
        />
      </template>
      <album-collection class="span-all mt-2 mt-lg-16 mt-xl-16" />
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
import { sections } from "@/store/data";
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
      sections: sections
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
  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    row-gap: 6em;
  }
}
</style>
