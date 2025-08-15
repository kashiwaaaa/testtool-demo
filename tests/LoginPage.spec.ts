import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import LoginPage from '@/pages/LoginPage.vue'
import { describe, it, expect, vi } from 'vitest'

// Vue Router の useRouter をモック化
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(), // ダミー関数
  }),
}))

describe('LoginPage', () => {
  it('正しい認証情報でログインできる', async () => {
    const wrapper = mount(LoginPage, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
      },
    })

    await wrapper.find('input[placeholder="ユーザー名"]').setValue('test')
    await wrapper.find('input[placeholder="パスワード"]').setValue('1234')
    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).not.toContain('ユーザー名またはパスワードが間違っています')
  })
})

  it('間違った認証情報でログインできない', async () => {
    const wrapper = mount(LoginPage, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
      },
    })

    await wrapper.find('input[placeholder="ユーザー名"]').setValue('wrongUser')
    await wrapper.find('input[placeholder="パスワード"]').setValue('wrongPass')
    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('ユーザー名またはパスワードが間違っています')
  })
