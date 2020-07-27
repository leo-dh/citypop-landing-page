<template>
  <v-dialog
    v-model="$store.state.albumModal"
    width="unset"
    content-class="albumModal"
    :fullscreen="$vuetify.breakpoint.smAndDown"
  >
    <v-card class="maroon albumModal__vcard">
      <div class="albumModal__content">
        <img :src="$store.state.selectedAlbum.cover" alt="" class="albumModal__content__image " />
        <div style="height: 300px, left: 20px;">
          <div class="albumModal__content__details mb-lg-9 mb-md-9 mb-8">
            <h1 class="albumModal__content__details__title">
              {{ $store.state.selectedAlbum.title }}
            </h1>
            <h5 class="albumModal__content__details__artist white--text">
              {{ $store.state.selectedAlbum.artist }}
            </h5>
          </div>
          <div class="albumModal__content__tracks" :style="{ height: containerHeight + 'px' }">
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
import { Album } from "@/types/model";

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
      },
      containerHeight: 180
    };
  },
  watch: {
    "$store.state.selectedAlbum": {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: function(newValue: Album, oldValue: Album): void {
        this.setContainerHeight();
      }
    }
  },
  created() {
    addEventListener("resize", this.setContainerHeight);
  },
  destroyed() {
    removeEventListener("resize", this.setContainerHeight);
  },
  methods: {
    setContainerHeight(): void {
      let result: number;
      if (this.$vuetify.breakpoint.smOnly) {
        const minHeight = this.$store.state.selectedAlbum.tracks.length * 40;
        const calcHeight = window.innerHeight - 48 - 300 - 40 - 72 - 32 - 52;
        result = Math.min(minHeight, calcHeight);
      } else if (this.$vuetify.breakpoint.xsOnly) {
        const minHeight = this.$store.state.selectedAlbum.tracks.length * 40;
        const calcHeight = window.innerHeight - 48 - 250 - 28 - 72 - 32 - 52;
        result = Math.min(minHeight, calcHeight);
      } else {
        result = 180;
      }
      this.containerHeight = result;
    }
  }
});
</script>

<style lang="scss">
.albumModal {
  border-radius: 15px !important;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__vcard {
    display: flex !important;
    flex-direction: column;
  }
  &__content {
    display: flex;
    padding: 80px 80px 48px;
    align-items: center;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      flex-direction: column;
      padding: 48px 80px 0px;
      flex: 1 1 0%;
      justify-content: center;
    }
    &__details {
      padding-left: 24px;
      &__title {
        font-size: 3em;
        line-height: 1.25em;
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          font-size: 2.5em;
        }
      }
      &__artist {
        font-size: 1.25em;
        line-height: 1.2em;
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          font-size: 1.1em;
        }
      }
    }
    &__image {
      width: 300px;
      height: 300px;
      border: 4px solid $color-orange;
      border-radius: 15px;
      margin-right: 90px;
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        margin-right: 0px;
        margin-bottom: 40px;
      }
      @media #{map-get($display-breakpoints, 'xs-only')} {
        width: 250px;
        height: 250px;
        margin-bottom: 28px;
      }
    }
    &__tracks {
      // height: 180px;
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
      &__details {
        width: 300px;
        padding-right: 2em;
        display: flex;
        justify-content: space-between;
        @media #{map-get($display-breakpoints, 'xs-only')} {
          width: 250px;
        }
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
