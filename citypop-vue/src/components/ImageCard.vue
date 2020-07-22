<template>
  <div>
    <div class="imageCard fade-transition fade-in">
      <img :src="imageSrc" class="imageBox" />
      <p class="text-cursive mt-2 mb-0 text-center imageCaptions">
        {{ imageCard.imageCaptions }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ImageCard } from "@/types/model";
import mixins from "vue-typed-mixins";
import FadeInMixin from "@/mixins/FadeInMixin";
export default mixins(FadeInMixin).extend({
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .imageCaptions {
    white-space: pre-line;
    @media #{map-get( $display-breakpoints, 'lg-only' )} {
      font-size: 1.1rem;
    }
  }
  .imageBox {
    width: 100%;

    @media #{map-get($display-breakpoints, "md-only")} {
      width: clamp(200px, 80%, 300px);
    }
    @media #{map-get($display-breakpoints, "lg-and-up")} {
      width: clamp(300px, 80%, 500px);
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
