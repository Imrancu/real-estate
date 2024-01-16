import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // secure: false,
        // changeOrigin: true,
        // Add the line below to specify the SSL/TLS version
        // e.g., 'https://api-self-zeta.vercel.app': { target: 'https://api-self-zeta.vercel.app', secure: false, protocol: 'http2' },
      },
    },
  },
  plugins: [react()],
});
