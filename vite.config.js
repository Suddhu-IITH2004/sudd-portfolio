import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import os from 'os'

const repoBase = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base: '/sudd-portfolio/',
  // 👈 Force Vite cache outside of OneDrive to prevent EPERM errors
  cacheDir: path.join(os.tmpdir(), 'vite-cache-sudd-portfolio'), 
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
