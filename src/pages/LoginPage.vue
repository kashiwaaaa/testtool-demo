
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
  <div class="min-h-screen flex items-center justify-center bg-gray-500 px-4">
    <div class="w-full max-w-sm bg-white shadow-lg rounded-lg p-8 border border-gray-200">
      


      <!-- タイトル -->
      <h2 class="text-2xl font-bold text-center text-green-600 mb-6">ログイン画面</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- ユーザー名 -->
          <div class="form-control">
            <input
              v-model="name"
              type="text"
              placeholder="test"
              class="input input-bordered w-full text-base"
              required
              data-test="username"
            />
          </div>

        <!-- パスワード -->
          <div class="form-control">
            <input
              v-model="password"
              type="password"
              placeholder="1234"
              class="input input-bordered w-full text-base"
              required
              data-test="password"
            />
          </div>

        <!-- ボタン -->
          <button
            type="submit"
            class="btn btn-success w-full text-base font-semibold"
            data-test="login-btn"
          >
            ログイン
          </button>

        <!-- エラーメッセージ -->
          <div v-if="error" class="alert alert-error mt-3 py-2 px-4 text-sm text-center" data-test="login-error">
            {{ error }}
          </div>
      </form>


    </div>
  </div>
</template>