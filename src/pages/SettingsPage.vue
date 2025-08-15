<template>
  <div>
    <h1>設定</h1>
    <p>ユーザー: {{ store.username }}</p>
    <button @click="toggleTheme">テーマ切替</button>
    <p>現在のテーマ: {{ theme }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const store = useUserStore()
const theme = ref('light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
