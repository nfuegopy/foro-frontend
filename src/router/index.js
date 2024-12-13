import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue')
  },
  {
    path: '/forum',
    component: () => import('../layout/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/forum/HomeView.vue')
      },
      // {
      //   path: 'categories',
      //   name: 'categories',
      //   component: () => import('../views/forum/CategoryView.vue')
      // },
      // {
      //   path: 'my-threads',
      //   name: 'myThreads',
      //   component: () => import('../views/forum/MyThreadsView.vue')
      // },
      // {
      //   path: 'users',
      //   name: 'users',
      //   component: () => import('../views/forum/UsersView.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guardia de navegación
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Aquí verificarías el token real
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else if (to.name === 'login' && isAuthenticated) {
    next('/forum')
  } else {
    next()
  }
})

export default router