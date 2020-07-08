<template>
  <v-container :class="['albumgrid']">
    <div :class="['albumgrid__title']">
      Discover <br v-if="!$vuetify.breakpoint.mdAndUp" />CityPop
    </div>
    <div id="one" class="albumgrid__albumsmall">
      <v-card>
        <v-img width="50vw" src="@/assets/PlasticLoveArtworkByUsagiHime.jpg"> </v-img>
        <v-card-text
          >Plastic Love Artwork by <br />
          兔姬 UsagiHime</v-card-text
        >
      </v-card>
    </div>
    <div id="one-text" class="albumgrid__textsmall">
      City pop (シティーポップ, shitī poppu) is a loosely defined subset of pop music that
      originated in Japan in the late 1970s.
    </div>
    <div id="two" class="albumgrid__albumsmall">
      <v-card>
        <v-img width="50vw" src="@/assets/MariyaTakeuchiPlasticLoveVinylCover.jpg"></v-img>
        <v-card-text>
          Original Plastic Love Vinyl Cover
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.albumgrid {
  display: grid;
  padding: 0;
}

@media #{map-get($display-breakpoints, 'md-only')} {
  .albumgrid {
    gap: 1em;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 1fr;
    grid-template-areas:
      "a a a b b b . . . . . ."
      "a a a b b b . . . . . ."
      "a a a b b b . . . . . ."
      "a a a c c c . . . . . ."
      "a a a c c c . . . . . ."
      "a a a . . . . . . . . ."
      "a a a . . . . . . . . .";
  }
  .albumgrid::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .albumgrid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "a a a a"
      "a a a a"
      "d d b b"
      "d d b b"
      "c c . ."
      "c c . .";
  }
}
#one {
  grid-area: b;
}
#two {
  grid-area: c;
}
.albumgrid__title {
  grid-area: a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  padding-bottom: 1em;
}
.albumgrid__title--sm {
  font-size: 3em;
  font-weight: 800;
}
.albumgrid__title--md {
  writing-mode: vertical-rl;
  font-size: 10rem;
}
.albumgrid__textsmall {
  display: flex;
  padding: 1em;
  justify-content: center;
  align-items: center;
}
#one-text {
  grid-area: d;
}
</style>
