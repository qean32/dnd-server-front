import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY),
      'process.env.SOME_KEY_': JSON.stringify(env.SOME_KEY + 'zxc')
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@component': path.resolve(__dirname, 'src/component'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@service': path.resolve(__dirname, 'src/service'),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  }
})