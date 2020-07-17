<template>
  <div class="grid-layout overflow-hidden">
    <div class="endsection">
      <div class="endsection__content">
        <h1 class="endsection__content__title mb-2">Love what you hear?</h1>
        <v-btn
          class="primary-btn text-cursive text-decoration-none endsection__content__button"
          rounded
          >find out more!</v-btn
        >
      </div>
      <p class="endsection__watermark endsection__watermark--top text-sans-serif">DISCOVER</p>
      <p class="endsection__watermark endsection__watermark--bottom text-sans-serif">CITY POP</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "EndSection",
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.endsection {
  height: 100vh;
  background: $background-dark;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  position: relative;
  &__watermark {
    position: absolute;
    opacity: 0.1;
    font-size: 5em;
    transform: rotate(20deg);
    text-overflow: inherit;
    white-space: nowrap;
    &--top {
      top: 0px;
    }
    &--bottom {
      bottom: 0px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      text-align: center;
    }
    &__button {
      font-size: 1em;
      text-transform: none;
      z-index: 2;
    }
  }
}
</style>
