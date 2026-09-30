// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Se estiver no repositório de demonstração pessoal do GitHub Pages (felippejuan/site-1177),
// o site precisa ser servido com base na subpasta '/site-1177'.
// No domínio oficial (drluizinho.com.br), no repositório DL1177 ou na hospedagem de produção, roda na raiz '/'.
const isPersonalDemo = process.env.GITHUB_REPOSITORY === 'felippejuan/site-1177' || process.env.DEPLOY_TARGET === 'gh-pages';

// https://astro.build/config
export default defineConfig({
  site: isPersonalDemo ? 'https://felippejuan.github.io' : (process.env.SITE_URL || 'https://drluizinho.com.br'),
  base: isPersonalDemo ? '/site-1177' : (process.env.BASE_PATH || '/'),
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
