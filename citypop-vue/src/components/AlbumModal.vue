<template>
  <v-dialog v-model="$store.state.albumModal" width="unset" content-class="albumModal ">
    <v-card class="maroon">
      <div>
        <img :src="$store.state.selectedAlbum.cover" alt="" class="albumModal__image " />
        <div>
          <div>
            <h1>{{ $store.state.selectedAlbum.title }}</h1>
            <h5 class="white--text">{{ $store.state.selectedAlbum.artist }}</h5>
          </div>
          <div>
            <div v-for="(song, i) in $store.state.selectedAlbum.songs" :key="i">
              <p>{{ song.title }}</p>
              <p>{{ song.duration }}</p>
            </div>
          </div>
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          class="text-none font-weight-bold text-spacing-normal"
          @click="$store.state.albumModal = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AlbumModal",
  data() {
    return {};
  }
});
</script>

<style lang="scss">
.albumModal {
  border-radius: 15px;
  &__image {
    width: 300px;
    border: 4px solid $color-orange;
    border-radius: 15px;
    margin: 2em;
  }
}
</style>
