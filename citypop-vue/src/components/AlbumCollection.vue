<template>
  <div>
    <h1 class="pb-10 text-lg-center albumCollection__header">Popular Albums</h1>
    <album-grid :albums="albums" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AlbumGrid from "@/components/AlbumGrid.vue";
import { albums } from "@/store/data";
export default Vue.extend({
  name: "AlbumCollection",
  components: {
    AlbumGrid
  },
  data() {
    return {
      albums: albums
    };
  }
});
</script>

<style lang="scss" scoped>
.albumCollection__header {
  @media #{map-get($display-breakpoints, 'lg-only')} {
    font-size: 3em;
  }
}
</style>
