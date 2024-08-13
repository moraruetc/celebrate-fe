import react from '@vitejs/plugin-react';
import sass from 'sass';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementations: sass
      }
    }
  }
});
