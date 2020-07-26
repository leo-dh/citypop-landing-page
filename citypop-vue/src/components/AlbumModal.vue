<template>
  <v-dialog v-model="$store.state.albumModal" width="unset" content-class="albumModal ">
    <v-card class="maroon">
      <div class="albumModal__content">
        <img :src="$store.state.selectedAlbum.cover" alt="" class="albumModal__content__image " />
        <div style="height: 300px, left: 20px;">
          <div class="albumModal__content__details mb-9">
            <h1 class="albumModal__content__details__title">
              {{ $store.state.selectedAlbum.title }}
            </h1>
            <h5 class="albumModal__content__details__artist white--text">
              {{ $store.state.selectedAlbum.artist }}
            </h5>
          </div>
          <div class="albumModal__content__tracks">
            <vue-custom-scrollbar class="scroll-area" :settings="scrollBarOptions">
              <div
                v-for="(track, i) in $store.state.selectedAlbum.tracks"
                :key="i"
                class="albumModal__content__tracks__details font-weight-bold"
              >
                <div class="albumModal__content__tracks__details__title">
                  <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        :class="{ visibilityHidden: !track.titleTrack }"
                        small
                        class="mb-4 mr-2"
                        color="peach"
                        v-bind="attrs"
                        v-on="on"
                        >mdi-star-circle</v-icon
                      ></template
                    >
                    <span>Title Track</span>
                  </v-tooltip>
                  <p>{{ track.title }}</p>
                </div>
                <p>{{ track.duration }}</p>
              </div>
            </vue-custom-scrollbar>
            <!-- <v-carousel hide-delimiter-background :show-arrows="false" height="250">
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
            </v-carousel> -->
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
import vueCustomScrollbar from "vue-custom-scrollbar";
import { Track } from "@/types/model";

export default Vue.extend({
  name: "AlbumModal",
  components: {
    vueCustomScrollbar
  },
  data() {
    return {
      scrollBarOptions: {
        suppressScrollX: true,
        minScrollbarLength: 60
      }
    };
  },
  computed: {
    trackSplits() {
      const tracks = this.$store.state.selectedAlbum.tracks;
      const chunk = 5;
      let splits: Track[] = [];
      for (let i = 0; i < tracks.length; i += chunk) {
        splits = [...splits, tracks.splice(i, i + chunk)];
      }
      return splits;
    }
  }
});
</script>

<style lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: auto;
  overflow-x: hidden;
  height: 100%;
}
.ps .ps__rail-y:hover,
.ps .ps__rail-y:focus,
.ps .ps__rail-y.ps--clicking {
  opacity: 0.9;
  background-color: transparent;
}
.ps__thumb-y {
  opacity: 0.3;
  transition: background-color 0.2s linear, width 0.2s ease-in-out, opacity 0.2s linear;
}
.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: $color-orange;
  opacity: 1;
}

.ps__rail-y {
  opacity: 0.6;
}

.albumModal {
  border-radius: 15px !important;
  &__content {
    display: flex;
    padding: 80px 80px 48px;
    align-items: center;
    &__details {
      padding-left: 24px;
      &__title {
        font-size: 3em;
        line-height: 1.25em;
      }
      &__artist {
        font-size: 1.25em;
        line-height: 1.2em;
      }
    }
    &__image {
      width: 300px;
      height: 300px;
      border: 4px solid $color-orange;
      border-radius: 15px;
      margin-right: 90px;
    }
    &__tracks {
      height: 180px;
      &__details {
        min-width: 300px;
        padding-right: 2em;
        display: flex;
        justify-content: space-between;
        &__title {
          display: flex;
        }
      }
    }
  }
}
.visibilityHidden {
  visibility: hidden;
}
</style>
