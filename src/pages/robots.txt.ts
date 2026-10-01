import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const isIndexavel = import.meta.env.PUBLIC_INDEXAVEL === 'true';
  const body = isIndexavel
    ? `User-agent: *\nAllow: /\nSitemap: https://doutorluizinho.com.br/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
