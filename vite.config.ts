import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',

  root: __dirname,

  publicDir: 'public',

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true,
  },

  server: {
    port: 4000,
  },
});
