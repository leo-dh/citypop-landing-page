<template>
  <div class="writeUp">
    <h1 class="mb-6 mb-lg-10 mb-xl-10 writeUp__title fade-transition fade-in">
      {{ writeUp.title }}
    </h1>
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
.writeUp {
  @media #{map-get($display-breakpoints, 'sm-only')} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .writeUp__title {
    @media #{map-get($display-breakpoints, 'sm-only')} {
      font-size: 2.4em;
      text-align: center;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      font-size: 2.5em;
    }
    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      font-size: 3em;
    }
  }
  .writeUp__message {
    font-size: 0.8em;
    white-space: pre-line;
    @media #{map-get($display-breakpoints, 'sm-only')} {
      font-size: 0.9em;
      text-align: center;
      width: 85%;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      font-size: 0.9em;
    }
    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      font-size: 1.1em;
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
