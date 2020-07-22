<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hello-world />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default Vue.extend({
  name: "About",
  components: {
    HelloWorld
  }
});
</script>
