import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      'com': path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    vue(),
      AutoImport({
        imports: ['vue', 'vue-router']
      })
  ]
})
