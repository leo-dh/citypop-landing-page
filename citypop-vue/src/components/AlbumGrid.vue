<template>
  <div class="albumGrid">
    <template v-for="(album, i) in albums">
      <album-card :key="i" :album="album" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AlbumCard from "@/components/AlbumCard.vue";
import { Album } from "@/types/model";
export default Vue.extend({
  name: "AlbumList",
  components: {
    AlbumCard
  },
  props: {
    albums: {
      type: Array as () => Array<Album>,
      required: true
    }
  },
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.albumGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  > :first-child {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  > :nth-child(7),
  > :nth-child(13),
  > :nth-child(17) {
    grid-row: span 2;
    grid-column: span 2;
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .albumGrid {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    > :nth-child(16) {
      grid-row: span 2;
      grid-column: span 2;
    }
    > :nth-child(17) {
      grid-row: span 1;
      grid-column: span 1;
    }
  }
}
</style>
