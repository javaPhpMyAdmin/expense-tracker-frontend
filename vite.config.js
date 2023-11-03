import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': '/src/components',
      '@/assets': '/src/assets',
      '@/context': '/src/context',
      '@/hooks': '/src/hooks',
      '@/pages': '/src/pages',
      '@/services': '/src/services',
      '@/common': '/src/common',
      '@/httpClient': '/src/httpClient',
      '@/config': '/src/config',
      '@/helpers': '/src/helpers',
      '@/styles': '/src/styles',
      '@/utils': '/src/utils',
    },
  },
});
