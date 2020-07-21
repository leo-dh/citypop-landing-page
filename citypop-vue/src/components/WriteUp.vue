<template>
  <div>
    <h1 class="mb-xs-6 mb-lg-10 writeUp__title fade-transition fade-in">{{ writeUp.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="writeUp__message fade-transition fade-in" v-html="writeUp.message"></p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { WriteUp } from "@/types/model";
import mixins from "vue-typed-mixins";
import FadeInMixin from "@/mixins/FadeInMixin";
export default mixins(FadeInMixin).extend({
  name: "WriteUp",
  props: {
    writeUp: {
      type: Object as PropType<WriteUp>,
      required: true
    }
  }
  // data() {
  //   return {
  //     fadeInElements: [] as Element[]
  //   };
  // },
  // mounted() {
  //   this.fadeInElements = Array.from(this.$el.getElementsByClassName("fade-in"));
  //   document.addEventListener("scroll", this.scrollCallback);
  // },
  // destroyed() {
  //   document.removeEventListener("scroll", this.scrollCallback);
  // },
  // methods: {
  //   scrollCallback(): void {
  //     this.fadeInElements.forEach((el: Element, i: number): void => {
  //       if (this.isElemVisible(el)) {
  //         (el as HTMLElement).style.opacity = "1";
  //         (el as HTMLElement).style.transform = "translateY(0)";
  //         this.fadeInElements.splice(i, 1);
  //       }
  //     });
  //   },
  //   isElemVisible(el: Element): boolean {
  //     const buffer = 100;
  //     const rect = el.getBoundingClientRect();
  //     const elemTop = rect.top + buffer;
  //     const elemBottom = rect.bottom;
  //     return elemTop < window.innerHeight && elemBottom >= 0;
  //   }
  // }
});
</script>
<style lang="scss" scoped>
.writeUp__title {
  @media #{map-get($display-breakpoints, 'lg-only')} {
    font-size: 3em;
  }
}
.writeUp__message {
  font-size: 0.8em;
  white-space: pre-line;
  @media #{map-get($display-breakpoints, 'lg-only')} {
    font-size: 1.1em;
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
