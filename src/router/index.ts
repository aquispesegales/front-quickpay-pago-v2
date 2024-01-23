// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/SitioView.vue'),
      },
      {
        path: '/entidades/:tipo_entidad_id',
        name: 'Entidades',
        component: () => import(/* webpackChunkName: "home" */ '@/views/EntidadesView.vue'),
      },
      {
        path: '/pago/:entidad_id',
        name: 'Pago',
        component: () => import(/* webpackChunkName: "home" */ '@/views/PagoView.vue'),
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
