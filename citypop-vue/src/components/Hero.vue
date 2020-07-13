<template>
  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__content__title ">Discover Citypop</h1>
      <v-btn class="hero__content__button" rounded>Lets go!</v-btn>
    </div>
    <img
      src="@/assets/skyline-2730410.svg"
      alt="watermark of cityskyline"
      srcset=""
      class="hero__watermark"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Hero",
  data() {
    return {};
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
    }

    &__button {
      background-color: $color-red !important;
      font-family: "Damion", cursive;
      text-transform: none;
      font-size: 1rem;
    }
  }

  &__watermark {
    position: absolute;
    bottom: 0px;
    opacity: 0.1;
    min-width: 100vw;
    min-height: 40vh;
  }
}
</style>
