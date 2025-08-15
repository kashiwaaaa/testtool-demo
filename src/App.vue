<template>
  <div id="app">
    <header style="padding: 1rem; background: #f0f0f0;">
      <h2>Vitest Demo App</h2>
      <nav>
        <router-link to="/">ログイン</router-link> |
        <router-link to="/map">地図</router-link> |
        <router-link to="/settings">設定</router-link>
      </nav>
    </header>

    <main style="padding: 1rem;">
      <!-- ここでルートごとの画面を切り替える -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// 特にロジックなし
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
nav a {
  margin-right: 0.5rem;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
