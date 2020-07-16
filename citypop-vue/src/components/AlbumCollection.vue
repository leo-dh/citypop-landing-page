<template>
  <div>
    <h1 class="pb-10">Popular Albums</h1>
    <album-grid />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AlbumGrid from "@/components/AlbumGrid.vue";
export default Vue.extend({
  name: "AlbumCollection",
  components: {
    AlbumGrid
  },
  data() {
    return {};
  }
});
</script>
