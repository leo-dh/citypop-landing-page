<template>
  <div class="imageCard">
    <img :src="imageSrc" style="width: 100%;" />
    <p class="text-cursive mt-2 mb-0 text-center imageCaptions">{{ imageCard.imageCaptions }}</p>
  </div>
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
.imageCard {
  width: 100%;
  @media #{map-get($display-breakpoints, "lg-only")} {
    width: clamp(300px, 80%, 500px);
  }
  .imageCaptions {
    white-space: pre-line;
    @media #{map-get( $display-breakpoints, 'lg-only' )} {
      font-size: 1.1rem;
    }
  }
}
</style>
