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
      '@types': '/src/types',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      '@utils': '/src/utils'
    }
  }
})
