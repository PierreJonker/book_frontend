import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,  // Optional: Useful for debugging production builds
  },
  server: {
    port: 3000  // Optional: Configure the development server port
  }
})
