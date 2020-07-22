<template>
  <div>
    <h1 class="pb-10 text-lg-center text-md-center albumCollection__header fade-transition fade-in">
      Popular Albums
    </h1>
    <album-grid :albums="albums" />
  </div>
</template>

<script lang="ts">
import AlbumGrid from "@/components/AlbumGrid.vue";
import { albums } from "@/store/data";
import mixins from "vue-typed-mixins";
import FadeInMixin from "@/mixins/FadeInMixin";
export default mixins(FadeInMixin).extend({
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
.fade-transition {
  transition: all 0.2s ease-out;
}
.fade-in {
  opacity: 0;
  transform: translateY(50px);
}
</style>
