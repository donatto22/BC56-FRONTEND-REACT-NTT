import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': '/src/assets/images',
      '@icons': '/src/assets/icons',
      '@components': '/src/components',
      '@declarations': '/src/declarations',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      '@utils': '/src/utils'
    }
  }
})
