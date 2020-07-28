<template>
  <div class="wrapper">
    <div class="endsection overflow-hidden maroon">
      <div class="grid-layout ">
        <div class="endsection__content">
          <h1
            class="endsection__content__title mb-2 mb-sm-4 mb-md-6 mb-lg-12 mb-xl-12 fade-transition fade-in"
          >
            Love what you hear?
          </h1>
          <v-btn
            class="primary-btn endsection__content__button fade-transition fade-in"
            rounded
            :x-large="$vuetify.breakpoint.lgAndUp"
            to="/resources"
            ><span class="text-cursive endsection__content__button__text"
              >find out more!</span
            ></v-btn
          >
        </div>
      </div>
      <p class="endsection__watermark endsection__watermark--top text-sans-serif">
        DISCOVER
      </p>
      <p class="endsection__watermark endsection__watermark--bottom text-sans-serif">CITY POP</p>
    </div>
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import FadeInMixin from "@/mixins/FadeInMixin";
export default mixins(FadeInMixin).extend({
  name: "EndSection",
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.endsection {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &__watermark {
    position: absolute;
    opacity: 0.05;
    font-size: 5em;
    text-overflow: inherit;
    white-space: nowrap;
    margin: 0;
    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      font-size: 8em;
    }
    &--top {
      top: 0px;
      @media #{map-get($display-breakpoints, 'sm-and-up')} {
        top: -0.5em;
        left: -0.2em;
      }
    }
    &--bottom {
      bottom: 0px;
      @media #{map-get($display-breakpoints, 'sm-and-up')} {
        bottom: -0.5em;
        right: -0.2em;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1 / -1;

    &__title {
      text-align: center;
      @media #{map-get($display-breakpoints, 'sm-only')} {
        font-size: 3em;
      }
      @media #{map-get($display-breakpoints, 'md-only')} {
        font-size: 4em;
      }
      @media #{map-get($display-breakpoints, 'lg-and-up')} {
        font-size: 5em;
      }
    }
    &__button {
      z-index: 2;
      &__text {
        font-size: 1em;
        text-transform: none;
        @media #{map-get($display-breakpoints, 'sm-only')} {
          font-size: 1.2em;
        }
        @media #{map-get($display-breakpoints, 'md-only')} {
          font-size: 1.3em;
        }
        @media #{map-get($display-breakpoints, 'lg-and-up')} {
          font-size: 1.5em;
        }
      }
    }
  }
}
.fade-in {
  opacity: 0;
  transform: translateY(50px);
}
.fade-transition {
  transition: all 0.3s ease-out;
}
</style>
