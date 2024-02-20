<script>
var apiUrl = 'https://api.deezer.com/search?q=album:"One More Time"'

Vue.createApp({
  data() {
    return {
      listMusique: [],
    }
  },

  created: function () {
    this.fetchDataPromise();
  },

  watch: {
    listMusique: "fetchDataPromise",
  },

  methods: {
    fetchDataPromise: async function () {
      try {
        const response = await axios.get(apiURL);
        this.listMusique = response.data;
      } catch (error) {
        console.log("Appel API en erreur");
      }
    },
  }
}).mount('#app');
</script>

<!--<script>-->
<!--import { ref } from "vue";-->
<!--let input = ref("");-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isLoading: true,-->
<!--      handleError: null,-->
<!--      musique: null,-->
<!--      ODO: Remplacez 'Enter Track ID Here' par un ID de musique valide reçu de la searchbar-->
<!--      trackId: '3135556',-->
<!--    };-->
<!--  },-->
<!--  async beforeMount() {-->
<!--    try {-->
<!--      const musiqueResponse = await fetch('https://api.deezer.com/search?q=album:"One More Time"', { method: 'GET' });-->
<!--      if (!musiqueResponse.ok) throw new Error('Network response was not ok for album details');-->
<!--      const listMusiqueData = await musiqueResponse.json();-->

<!--      this.musique = listMusiqueData.musique;-->
<!--    } catch (error) {-->
<!--      this.handleError = error;-->
<!--    } finally {-->
<!--      this.isLoading = false;-->
<!--    }-->
<!--    console.log(this.musique)-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<script setup>-->
<!--const musiques = ["apple", "banana", "orange"];-->
<!--function filteredList() {-->
<!--  return musiques.filter((musique) =>-->
<!--      musique.toLowerCase().includes(input.value.toLowerCase())-->
<!--  );-->
<!--}-->
<!--</script>-->

<template>
  <p>{{listMusique.data}}</p>
  <input type="text" v-model="input" placeholder="Recherchez une musique..." />
  <div class="item musique" v-for="musique in filteredList()" :key="musique">
    <p>{{ musique }} {{artistes}}</p>
  </div>
  <div class="item error" v-if="input&&!filteredList().length">
    <p>Aucune musique trouvé !</p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("https://static.vecteezy.com/system/resources/previews/018/931/574/original/magnifying-glass-icon-png.png") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
  rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.musique {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>


<!--https://api.deezer.com/search?q=album:%22Bruxelles%20je%20t%E2%80%99aime%22-->