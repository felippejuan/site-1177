import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Design for Doutor Luizinho 1177 Favicon
// Deep blue rounded tile + 1177 in bold italic vibrant orange + crisp medical cross
const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="tileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#123F8F" />
      <stop offset="100%" stop-color="#071738" />
    </linearGradient>
  </defs>
  <!-- Background rounded squircle tile -->
  <rect x="1" y="1" width="62" height="62" rx="16" fill="url(#tileGrad)" stroke="#1E4E9E" stroke-width="1.5" />
  
  <!-- Medical Health Cross at top center-right -->
  <g transform="translate(47, 14)">
    <rect x="-1.5" y="-6" width="3" height="12" rx="1.5" fill="#38BDF8" />
    <rect x="-6" y="-1.5" width="12" height="3" rx="1.5" fill="#38BDF8" />
  </g>

  <!-- Number 1177: Centered with comfortable breathing room -->
  <text x="32" y="44" font-family="Arial Black, Impact, system-ui, sans-serif" font-size="22" font-weight="900" font-style="italic" text-anchor="middle" letter-spacing="-0.5">
    <tspan fill="#FFFFFF">11</tspan><tspan fill="#F15A29">77</tspan>
  </text>
  
  <!-- Bottom accent underline -->
  <rect x="18" y="49" width="28" height="2.5" rx="1.25" fill="#F15A29" />
</svg>`;

async function buildFavicons() {
  const publicDir = path.resolve('public');
  
  // 1. Save favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgFavicon, 'utf8');
  console.log('Saved favicon.svg');

  const svgBuffer = Buffer.from(svgFavicon);

  // 2. Generate favicon-32x32.png
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Saved favicon-32x32.png');

  // 3. Generate favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Saved favicon-16x16.png');

  // 4. Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Saved apple-touch-icon.png');

  // 5. Generate favicon.ico (32x32 PNG as ico)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Saved favicon.ico');
}

buildFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
