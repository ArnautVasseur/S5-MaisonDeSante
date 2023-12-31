import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404View.vue'
import SemellesOrthopediquesView from '../views/SemellesOrthopediquesView.vue'
import TraitementView from '../views/TraitementView.vue'
import NousConnaitreView from '../views/NousConnaitreView.vue'
import DevisView from '../views/DevisView.vue'
import AuthView from '../views/Admin/AuthentificationView.vue'
import DatabaseView from '../views/Admin/DatabaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/404', 
      name: 'NotFound', 
      component: NotFound
    },
    {
        path: '/:catchAll(.*)', redirect:'404'
    },
    {
      path: '/semelles-orthopediques', 
      name: 'SemellesOrthopediques', 
      component: SemellesOrthopediquesView
    },
    {
      path: '/traitement', 
      name: 'Traitement', 
      component: TraitementView
    },
    {
      path: '/nous-connaitre', 
      name: 'NousConnaitre', 
      component: NousConnaitreView
    },
    {
      path: '/faire-devis', 
      name: 'Devis', 
      component: DevisView
    },
    {
      path: '/authentification', 
      name: 'Authentification', 
      component: AuthView
    },
    {
      path: '/database', 
      name: 'Database', 
      component: DatabaseView
    },
  ],
})

export default router