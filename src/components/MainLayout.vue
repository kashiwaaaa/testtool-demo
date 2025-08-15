
<template>
  <div>
    <nav>
      <router-link to="/map">Map</router-link> |
      <router-link to="/settings">Settings</router-link>
      <button @click="logout" style="float:right">ログアウト</button>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

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

<style scoped>
nav {
  background: #f5f5f5;
  padding: 1rem;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}
</style>
