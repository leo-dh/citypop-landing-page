<template>
  <v-card color="transparent">
    <div>
      <v-img :src="imageSrc"></v-img>
      <p class="text-cursive pt-2 mb-0 text-center imageCaptions">{{ imageCard.imageCaptions }}</p>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { ImageCard } from "@/types/model";
export default Vue.extend({
  name: "ImageCard",
  props: {
    imageCard: {
      type: Object as PropType<ImageCard>,
      required: true
    }
  },
  data() {
    return {
      imageSrc: require(`@/assets/${this.imageCard.imagePath}`)
    };
  }
});
</script>

<style lang="scss" scoped>
.imageCaptions {
  white-space: pre-line;
}
</style>
