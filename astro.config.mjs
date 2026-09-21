// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://felippejuan.github.io',
  base: '/site-1177',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
