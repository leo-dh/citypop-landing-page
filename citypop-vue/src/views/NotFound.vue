<template>
  <div>
    <div class="center">
      <h1 style="font-size: 3em; text-align: center;">
        Oops Page Not Found
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NotFound",
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
</style>
