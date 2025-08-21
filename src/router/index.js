import { createRouter, createWebHistory } from 'vue-router'
import RegistrationPage from '@/views/Registration.vue'
import ParticipantsPage from '@/views/Participants.vue'

const routes = [
  {
    path: '/',
    redirect: '/registration'
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage
  },
  {
    path: '/participants',
    name: 'ParticipantsPage',
    component: ParticipantsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
