<script>

import { ref} from "vue";

export default {
  name: "DisplayArtist",
  props: {
    id : String,

  },

  setup(props) {
    const artist = ref(null);
    fetch('https://api.deezer.com/artist/'+props.id)
        .then(response => response.json())
        .then(data => artist.value = data)
    return {
      artist
    }
  }
}

</script>

<template>
  <h1>{{artist}}</h1>
</template>

<style scoped>

</style>