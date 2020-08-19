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
        <div class="albumModal__content__text">
          <div
            class="albumModal__content__text__details mb-xl-9 mb-lg-9 mb-md-9 mb-8 text-center text-xl-left text-lg-left text-md-left"
          >
            <h1 class="albumModal__content__text__details__title">
              {{ $store.state.selectedAlbum.title }}
            </h1>
            <h5 class="albumModal__content__text__details__artist white--text">
              {{ $store.state.selectedAlbum.artist }}
            </h5>
          </div>
          <div
            class="albumModal__content__text__tracks"
            :style="{ height: containerHeight + 'px' }"
          >
            <vue-custom-scrollbar
              :key="scrollBarKey"
              class="scroll-area"
              :settings="scrollBarOptions"
            >
              <div
                v-for="(track, i) in $store.state.selectedAlbum.tracks"
                :key="i"
                class="albumModal__content__text__tracks__details font-weight-bold"
                :style="{ paddingRight: scrollContainerPadding + 'px' }"
              >
                <div class="albumModal__content__text__tracks__details__title">
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
        suppressScrollY: false,
        minScrollbarLength: 60
      },
      containerHeight: 180,
      scrollBarKey: 0,
      scrollContainerPadding: 0
    };
  },
  watch: {
    "$store.state.selectedAlbum": {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: function(newValue: Album, oldValue: Album): void {
        this.initContainerHeight();
      }
    }
  },
  created() {
    addEventListener("resize", this.initContainerHeight);
  },
  destroyed() {
    removeEventListener("resize", this.initContainerHeight);
  },
  methods: {
    initContainerHeight(): void {
      this.setContainerHeight();
      this.forceScrollbarRender();
      this.adjustContainerHeight();
    },
    forceScrollbarRender(): void {
      this.$nextTick(() => {
        this.scrollBarKey++;
      });
    },
    async adjustContainerHeight(): Promise<void> {
      await this.$nextTick();
      const el = document.getElementsByClassName("albumModal__content__text__details")[0];
      this.setContainerHeight(el.clientHeight);
    },
    setContainerHeight(detailsHeight = 70): void {
      let calcHeight = 180;
      if (this.$vuetify.breakpoint.smOnly) {
        calcHeight = window.innerHeight - 48 - 300 - 40 - detailsHeight - 32 - 52;
      } else if (this.$vuetify.breakpoint.xsOnly) {
        calcHeight = window.innerHeight - 48 - 250 - 28 - detailsHeight - 32 - 52;
      }
      const minHeight = this.$store.state.selectedAlbum.tracks.length * 40;
      this.containerHeight = Math.min(minHeight, calcHeight);
      if (minHeight <= calcHeight) {
        this.scrollBarOptions.suppressScrollY = true;
        this.scrollContainerPadding = 0;
      } else {
        this.scrollBarOptions.suppressScrollY = false;
        this.scrollContainerPadding = 32;
      }
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
    &__text {
      height: 300px;
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        height: auto;
      }
      &__details {
        padding-left: 24px;
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          padding: 0;
        }
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
            font-size: 1em;
          }
        }
      }
      &__tracks {
        .scroll-area {
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
          min-width: 330px;
          display: flex;
          justify-content: space-between;
          @media #{map-get($display-breakpoints, 'xs-only')} {
            min-width: 300px;
          }
          &__title {
            display: flex;
            max-width: 30ch;
            margin-right: 12px;
          }
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
  }
}
.visibilityHidden {
  visibility: hidden;
}
</style>
