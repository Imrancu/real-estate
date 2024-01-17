import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';


const env = loadEnv(
    'all',
    process.cwd()
);

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: env.VITE_REACT_APP_SERVER_API,
        // secure: false,
        // changeOrigin: true,
        // Add the line below to specify the SSL/TLS version
        // e.g., 'https://api-self-zeta.vercel.app': { target: 'https://api-self-zeta.vercel.app', secure: false, protocol: 'http2' },
      },
    },
    
  //   headers: {
  //     'Cross-Origin-Embedder-Policy': 'unsafe-none',
  //     // 'Cross-Origin-Opener-Policy': 'same-origin',
  //     'Cross-Origin-Opener-Policy': 'restrict-properties'
  // },
  },
  plugins: [react()],
});
