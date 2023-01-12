import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import AboutView from '../views/AboutView.vue'
import EventCreateView from '../views/EventCreateView.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => AboutView,
    },
    {
      path: '/create',
      name: 'create',
      component: () => EventCreateView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    },
  ],
})

export default router
