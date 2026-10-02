// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Se estiver no repositório de demonstração pessoal do GitHub Pages (felippejuan/site-1177),
// o site precisa ser servido com base na subpasta '/site-1177'.
// No domínio oficial (doutorluizinho.com.br), no repositório DL1177 ou na hospedagem de produção, roda na raiz '/'.
const isPersonalDemo = process.env.GITHUB_REPOSITORY === 'felippejuan/site-1177' || process.env.DEPLOY_TARGET === 'gh-pages';

// No Windows com OneDrive, o build gera EPERM ao tentar remover dist/videos (arquivos grandes).
// Usando um outDir fora do OneDrive resolve o problema permanentemente.
const outDir = process.env.ASTRO_OUT_DIR || 'dist';

// https://astro.build/config
export default defineConfig({
  site: 'https://doutorluizinho.com.br',
  base: isPersonalDemo ? '/site-1177' : (process.env.BASE_PATH || '/'),
  output: 'static',
  outDir,
  vite: {
    plugins: [tailwindcss()],
    // Exclui .mp4 do processamento do Rollup (copia direto, sem hash/otimização)
    assetsInclude: ['**/*.mp4'],
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          // Mantém vídeos com o nome original sem hash
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.mp4')) {
              return 'videos/[name][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
  },
});
