import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const repoBase = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base: repoBase,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
