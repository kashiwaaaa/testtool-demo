import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    isLoggedIn: false,
  }),
  actions: {
    login(name: string, password: string) {
      if (name === 'test' && password === '1234') {
        this.username = name
        this.isLoggedIn = true
        return true
      }
      return false
    },
    logout() {
      this.username = ''
      this.isLoggedIn = false
    },
  },
})
export default useUserStore