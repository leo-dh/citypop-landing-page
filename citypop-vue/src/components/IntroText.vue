<template>
  <div class="introText">
    <h1 class="mb-6 mb-lg-8 introText__header">What is City pop?</h1>
    <p class="introText__para">
      City pop (シティーポップ) is a genre of music popular in Japan in the late 70s and 80s that
      blended pop, jazz, and funk
    </p>
    <p class="text-cursive mb-9 introText__para">Music made by city people, for city people</p>
    <v-btn class="primary-btn " rounded :x-large="$vuetify.breakpoint.lgAndUp" @click="playVideo">
      <span class="introText__btntext text-spacing-normal text-sans-serif">
        PLAY SAMPLE
      </span>
      <v-icon right>mdi-play-circle</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "IntroText",
  data() {
    return {};
  },
  methods: {
    playVideo() {
      this.$store.state.videoPlaying = true;
    }
  }
});
</script>

<style lang="scss" scoped>
.introText {
  @media #{map-get($display-breakpoints, 'sm-only')} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .introText__header {
    @media #{map-get($display-breakpoints, 'sm-only')} {
      font-size: 2.4em;
      text-align: center;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      font-size: 2.5em;
    }
    @media #{map-get($display-breakpoints, 'lg-only')} {
      font-size: 3em;
    }
  }
  .introText__para {
    @media #{map-get($display-breakpoints, 'sm-only')} {
      font-size: 0.9em;
      text-align: center;
      width: 80%;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      font-size: 0.9em;
      width: 80%;
    }
    @media #{map-get($display-breakpoints, 'lg-only')} {
      font-size: 1.1em;
      width: 80%;
    }
  }
  .introText__btntext {
    @media #{map-get($display-breakpoints, 'lg-only')} {
      font-size: 1.1em;
    }
  }
}
</style>
