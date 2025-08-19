

<script setup lang="ts">

import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

function logout() {
  store.logout()
  router.push('/')
}
</script>
<template>
  <div>
  <nav class="bg-gray-100 p-4 flex items-center h-16">
      <router-link to="/map" class="mx-4 no-underline text-gray-800" active-class="font-bold text-green-500">Map</router-link>
      <span>|</span>
      <router-link to="/settings" class="mx-4 no-underline text-gray-800" active-class="font-bold text-green-500">Settings</router-link>
      <button @click="logout" class="ml-auto float-right text-red-500">ログアウト</button>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>




