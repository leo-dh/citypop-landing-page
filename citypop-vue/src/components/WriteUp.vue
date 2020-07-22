<template>
  <div>
    <h1 class="mb-6 mb-lg-10 writeUp__title fade-transition fade-in">{{ writeUp.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="writeUp__message fade-transition fade-in" v-html="writeUp.message"></p>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
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
