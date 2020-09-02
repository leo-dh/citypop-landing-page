<template>
  <v-hover v-slot:default="{ hover }">
    <img
      v-lazy="album.cover"
      :class="{ 'on-hover': hover }"
      class="albumImage"
      @click="openModal"
    />
  </v-hover>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Album } from "@/types/model";
export default Vue.extend({
  name: "AlbumCard",
  props: {
    album: {
      type: Object as PropType<Album>,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    openModal(): void {
      this.$store.state.albumModal = true;
      this.$store.state.selectedAlbum = this.album;
    }
  }
});
</script>

<style lang="scss" scoped>
.albumImage {
  width: 100%;
  opacity: 0.65;
  transition: opacity 0.3s ease-in-out;

  &[lazy="loaded"] {
    animation-name: fadein;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-timing-function: ease-out;
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.65;
      }
    }
    &.on-hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>
