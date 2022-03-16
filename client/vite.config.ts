import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 在其他地方可通过 import.meta.env.xxx 获取环境变量
  const env = loadEnv(mode, process.cwd()) // 获取 .env 文件里定义的环境变量

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    base: env.VITE_APP_BASE_URL, // 静态资源在 egg 访问的路径前缀
    build: {
      // 指定打包路径。其中 index.html 需要移动到 view 目录下，通过 build.sh 操作
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
}
