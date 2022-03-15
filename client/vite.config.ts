import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: '/public/', // 静态资源在 egg 访问的路径前缀
  build: {
    // 指定打包路径，index.html 需要移动到 view 目录下，通过 build.sh 操作
    outDir: '../server/app/public'
  },
  server: {
    open: true,
    proxy: {
      '/blog': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true
      }
    }
  }
})
