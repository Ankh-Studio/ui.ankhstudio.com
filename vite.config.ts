import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/ui.ankhstudio.com/' : '/',

  root: __dirname,

  publicDir: 'public',

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@ankh-studio/components/dist/ankh/*',
          dest: 'ankh',
        },
      ],
    }),
  ],

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
