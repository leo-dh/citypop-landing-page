<template>
  <div>
    <h1>{{ writeUp.title }}</h1>
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
.writeUp__message {
  font-size: 0.8em;
  white-space: pre-line;
}
</style>
