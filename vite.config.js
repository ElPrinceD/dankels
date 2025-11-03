import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    hmr: {
      protocol: 'wss',
      host: 'c9f3850eaade.ngrok-free.app',
      clientPort: 443
    },
    allowedHosts: [
      'c9f3850eaade.ngrok-free.app',
      'localhost',
      '127.0.0.1'
    ]
  }
})

