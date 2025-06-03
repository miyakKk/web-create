import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()], //を追加することで@を使用してインポートできるようになるらしいrouter/index.jsで使用
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
