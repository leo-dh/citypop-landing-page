<template>
  <div class="albumGrid">
    <album-card :src="temp" />
    <album-card :src="temp" />
    <album-card :src="temp" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AlbumCard from "@/components/AlbumCard.vue";
export default Vue.extend({
  name: "AlbumList",
  components: {
    AlbumCard
  },
  data() {
    return {
      temp: "albumcovers/170355-dosii.jpg"
    };
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
  > *:first-child {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  &__small {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  &__big {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
}
</style>
