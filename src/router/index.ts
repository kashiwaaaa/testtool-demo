import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage.vue'
import MainLayout from '@/components/MainLayout.vue'
import MapPage from '@/pages/MapPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'


const routes = [
  { path: '/', name: 'login', component: LoginPage },
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'map', name: 'map', component: MapPage },
      { path: 'settings', name: 'settings', component: SettingsPage },
    ],
  },
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 認証ガード
import { useUserStore } from '@/stores/user'
router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.isLoggedIn) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

