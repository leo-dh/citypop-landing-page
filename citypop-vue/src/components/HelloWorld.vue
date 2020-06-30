<template>
  <v-container
    :class="['albumgrid', $vuetify.breakpoint.mdAndUp ? 'albumgrid--md' : 'albumgrid--sm']"
  >
    <div
      :class="[
        'albumgrid__title',
        $vuetify.breakpoint.mdAndUp ? 'albumgrid__title--md' : 'albumgrid__title--sm'
      ]"
    >
      CityPop
    </div>
    <div id="one" class="albumgrid__albumsmall">One</div>
    <div id="two" class="albumgrid__albumsmall">Two</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HelloWorld extends Vue {
  name = "HelloWorld";

  data() {
    return {};
  }
}
</script>

<style scoped>
.albumgrid {
  display: grid;
  gap: 1em;
}
.albumgrid--md {
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
.albumgrid--sm {
}
.albumgrid::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
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
}
.albumgrid__title--sm {
}
.albumgrid__title--md {
  writing-mode: vertical-rl;
  font-size: 10rem;
}
</style>
