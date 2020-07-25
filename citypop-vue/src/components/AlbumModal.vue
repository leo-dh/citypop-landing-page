<template>
  <v-dialog v-model="$store.state.albumModal" width="unset" content-class="albumModal ">
    <v-card class="maroon">
      <div class="albumModal__content">
        <img :src="$store.state.selectedAlbum.cover" alt="" class="albumModal__content__image " />
        <div>
          <div class="albumModal__content__details">
            <h1>{{ $store.state.selectedAlbum.title }}</h1>
            <h5 class="white--text">{{ $store.state.selectedAlbum.artist }}</h5>
          </div>
          <div class="albumModal__content__tracks">
            <v-carousel hide-delimiter-background :show-arrows="false" height="250">
              <v-carousel-item
                v-for="(trackSplit, i) in trackSplits"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div
                  v-for="(track, j) in trackSplit"
                  :key="j"
                  class="albumModal__content__tracks__details"
                >
                  <p>{{ track.title }}</p>
                  <p>{{ track.duration }}</p>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          class="text-none font-weight-bold text-spacing-normal"
          @click="$store.state.albumModal = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AlbumModal",
  data() {
    return {};
  },
  computed: {
    trackSplits() {
      const tracks = this.$store.state.selectedAlbum.tracks;
      const chunk = 5;
      const chunks = [];
      let i, j;
      for (i = 0, j = tracks.length; i < j; i += chunk) {
        chunks.push(tracks.slice(i, i + chunk));
      }
      return chunks;
    }
  }
});
</script>

<style lang="scss">
.albumModal {
  border-radius: 15px !important;
  &__content {
    display: flex;
    padding: 2em;
    align-items: center;
    &__image {
      width: 300px;
      height: 300px;
      border: 4px solid $color-orange;
      border-radius: 15px;
      margin-right: 60px;
    }
    &__tracks {
      height: 200px;
      &__details {
        min-width: 250px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
