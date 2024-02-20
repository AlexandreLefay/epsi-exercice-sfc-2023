<template>
  <div class="border">

    <div v-if="isLoading" class="loading">
      <p>Loading...</p>
    </div>

    <div v-if="handleError" class="error">
      <p>Error: {{ handleError.message }}</p>
    </div>

    <div v-if="album" class="albumDetail">
      <h3>{{ album.title }}</h3>
      <h3>{{ album.id }}</h3>
      <img :src="album.cover_medium" :alt="album.title" />
      <p>Date de sortie : {{ album.release_date }}</p>
      <a>Lien : {{ album.link }}</a>

    </div>
  </div>
</template>

<script>
export default {
  props: ['trackId'],
  data() {
    return {
      isLoading: true,
      handleError: null,
      album: null,
    };
  },
  async beforeMount() {
    try {
      // Utilisez directement this.trackId ici
      const albumResponse = await fetch(`https://api.deezer.com/track/${this.trackId}`, { method: 'GET' });
      if (!albumResponse.ok) throw new Error('Network response was not ok for album details');
      const albumData = await albumResponse.json();
      this.album = albumData.album;
    } catch (error) {
      this.handleError = error;
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>

.border {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}

.loading, .error {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.albumDetail {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.albumDetail img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 1rem;
}
</style>
