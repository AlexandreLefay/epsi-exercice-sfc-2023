<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <router-link :to="`/album/${selectedTrackId}`">Voir les détails de l'album</router-link>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

</style>
