<template>
  <div>
    <h1 class="mb-xs-6 mb-lg-10 writeUp__title">{{ writeUp.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="writeUp__message" v-html="writeUp.message"></p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { WriteUp } from "@/types/model";
export default Vue.extend({
  name: "WriteUp",
  props: {
    writeUp: {
      type: Object as PropType<WriteUp>,
      required: true
    }
  },
  data() {
    return {};
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
</style>
