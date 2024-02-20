import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisplayAlbum from "@/components/DisplayAlbum.vue";
import DisplayArtist from "@/components/DisplayArtist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/album/:trackId',
      name: 'AlbumDetail',
      component: DisplayAlbum,
      props: true
    },
    {
      path :'/artist/:id',
      name: 'artist',
      component: DisplayArtist,
      props: true,
    },
  ]
})

export default router
