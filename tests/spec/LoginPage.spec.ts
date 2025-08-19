import { mount } from '@vue/test-utils'
import { createTestingPinia,  } from '@pinia/testing'
import { useUserStore } from '@/stores/user.js'
import LoginPage from '@/pages/LoginPage.vue'
import { describe, it, expect, vi } from 'vitest'

// Vue Router の useRouter をモック化
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}))




describe('LoginPage', () => {
  it('正しい認証情報でログインできる', async () => {
      const wrapper = mount(LoginPage, {
        global: {
          plugins: [createTestingPinia({ stubActions: false })],
        },
      })

    await wrapper.find('[data-test="username"]').setValue('test')
    await wrapper.find('[data-test="password"]').setValue('1234')
    await wrapper.find('[data-test="login-btn"]').trigger('submit')

    expect(wrapper.find('[data-test="login-error"]').exists()).toBe(false)
  })

  it('間違った認証情報でログインできない', async () => {
      const wrapper = mount(LoginPage, {
        global: {
          plugins: [createTestingPinia({ stubActions: false })],
        },
      })
  const store = useUserStore()
  store.login = vi.fn().mockReturnValue(false)

    await wrapper.find('[data-test="username"]').setValue('wrong')
    await wrapper.find('[data-test="password"]').setValue('xxxx')
  await wrapper.find('[data-test="login-btn"]').trigger('submit')


  expect(wrapper.find('[data-test="login-error"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="login-error"]').text())
      .toContain('ユーザー名またはパスワードが間違っています')

  })
})
