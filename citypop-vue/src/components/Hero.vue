<template>
  <div class="wrapper">
    <div class="grid-layout">
      <div class="hero ">
        <div class="hero__content">
          <h1 class="hero__content__title ">
            Discover <br :v-if="$vuetify.breakpoint.lgAndUp" />
            Citypop
          </h1>
          <v-btn
            class="primary-btn text-cursive text-decoration-none hero__content__button"
            rounded
            :x-large="$vuetify.breakpoint.lgAndUp"
            @click="scrollToView"
            ><span class="hero__content__button__text">Lets go!</span></v-btn
          >
        </div>
        <img
          src="@/assets/skyline-2730410.svg"
          alt="watermark of cityskyline"
          srcset=""
          class="hero__watermark"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Hero",
  data() {
    return {};
  },
  methods: {
    scrollToView() {
      const el: Element = document.getElementsByClassName("scrollTo")[0];
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }
});
</script>

<style lang="scss" scoped>
.hero {
  height: 90vh;
  background: $background-dark;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-column: 1 / -1;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      font-size: 3em;
      line-height: 1.2em;
      background: -webkit-linear-gradient(315deg, $color-orange, $color-purple);
      background-clip: text;
      color: transparent;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
      margin-bottom: 0.6em;
      @media #{map-get($display-breakpoints, 'sm-only')} {
        font-size: 4em;
      }
      @media #{map-get($display-breakpoints, 'md-only')} {
        font-size: 5em;
      }
      @media #{map-get($display-breakpoints, 'lg-only')} {
        font-size: 6em;
      }
    }

    &__button {
      z-index: 2;
      &__text {
        font-size: 1em;
        text-transform: none;
        @media #{map-get($display-breakpoints, 'sm-only')} {
          font-size: 1.4em;
        }
        @media #{map-get($display-breakpoints, 'md-only')} {
          font-size: 1.6em;
        }
        @media #{map-get($display-breakpoints, 'lg-only')} {
          font-size: 2em;
        }
      }
    }
  }

  &__watermark {
    position: absolute;
    bottom: 0px;
    opacity: 0.1;
    min-width: 100vw;
    min-height: 40vh;
    z-index: 1;
  }
}
</style>
