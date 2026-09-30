// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://drluizinho.com.br',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
