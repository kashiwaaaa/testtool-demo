// tests/vitest.config.ts
import { mergeConfig } from 'vitest/config'
import viteConfig from "./vite.config.ts";

export default mergeConfig(viteConfig, {
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
