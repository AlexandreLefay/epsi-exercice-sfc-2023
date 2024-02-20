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
  <h1>{{artist.name}}</h1>
  <img :src="artist.picture" alt="Photo de l'artiste">

  <p>Nombre d'albums: {{ artist.nb_album }}</p>
  <p>Nombre de fans: {{ artist.nb_fan }}</p>
</template>

<style scoped>
* {
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px;
}

h1 {
  color: #333;
}

img {

  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

p {
  color: #555;
}
</style>