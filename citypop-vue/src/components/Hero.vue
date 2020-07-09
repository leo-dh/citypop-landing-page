<template>
  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__content__title ">Discover Citypop</h1>
      <v-btn class="hero__content__button" rounded>Lets go!</v-btn>
    </div>
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

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      font-size: 3rem;
      background: -webkit-linear-gradient(315deg, $color-orange, $color-purple);
      background-clip: text;
      color: transparent;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
    }

    &__button {
      background-color: $color-red !important;
      font-family: "Damion", cursive;
      text-transform: none;
      font-size: 1rem;
    }
  }
}
</style>
