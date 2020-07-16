<template>
  <v-hover v-slot:default="{ hover }">
    <v-img :src="imageSrc" :class="{ 'on-hover': hover }" @click="doSomething"></v-img>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AlbumCard",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imageSrc: require(`@/assets/${this.src}`)
    };
  },
  methods: {
    doSomething(): void {
      console.log("HELLO");
    }
  }
});
</script>

<style lang="scss" scoped>
.v-image {
  opacity: 0.65;
  transition: opacity 0.3s ease-in-out;
  &.on-hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
