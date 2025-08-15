
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const store = useUserStore()
const name = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  if (store.login(name.value, password.value)) {
    router.push('/map')
  } else {
    error.value = 'ユーザー名またはパスワードが間違っています'
  }
}
</script>


<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
    <div class="card w-full max-w-md bg-base-100 shadow-2xl rounded-2xl">
      <div class="card-body">
        <h1 class="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">ログイン</h1>
        <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">ユーザー名</span>
            </div>
            <input v-model="name" type="text" placeholder="ユーザー名" class="input input-bordered input-primary w-full" />
          </label>
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">パスワード</span>
            </div>
            <input v-model="password" type="password" placeholder="パスワード" class="input input-bordered input-primary w-full" />
          </label>
          <button type="submit" class="btn btn-primary w-full mt-2">ログイン</button>
          <p v-if="error" class="text-error text-center mt-2">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>
